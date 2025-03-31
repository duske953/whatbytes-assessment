'use client';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { FaArrowRight, FaHtml5 } from 'react-icons/fa6';
import { UseFormRegister, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { cn } from '@/app/lib/utils';
import { SkillsContext } from '@/app/context/skillsContext';

export default function UpdateSkillScores({
  setQuestionModal,
}: {
  setQuestionModal: Dispatch<SetStateAction<boolean>>;
}) {
  const updateSchema = yup
    .object({
      rank: yup
        .number()
        .typeError('Rank must be valid number')
        .required('Rank is required')
        .max(5, 'Rank must be less than 5 characters'),
      percentile: yup
        .number()
        .required('Percentile is required')
        .typeError('Percentile must a valid number'),
      score: yup
        .number()
        .typeError('Score must be valid number')
        .required('Score is required')
        .max(15, 'Score must be less than 15 characters'),
    })
    .required();

  const { skills, setSkills } = useContext(SkillsContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(updateSchema),
    mode: 'onChange',
    defaultValues: {
      rank: skills.rank,
      percentile: skills.percentile,
      score: skills.score,
    },
  });

  function onSubmit(data: yup.InferType<typeof updateSchema>) {
    setSkills(data);
    setQuestionModal(false);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="fixed z-30 bg-white top-1/2 left-1/2 transform -translate-x-1/2 w-1/2 max-lg:w-full -translate-y-1/2 p-6 border border-gray-300 rounded-lg"
    >
      <div className="flex justify-between mb-8">
        <p className="text-2xl font-bold">Update Scores</p>
        <FaHtml5 className="text-3xl text-orange-500" />
      </div>
      <div className="flex flex-col gap-7">
        <SkillUpdate
          id="1"
          text="Rank"
          type="rank"
          register={register}
          errors={errors}
        />
        <SkillUpdate
          id="2"
          text="Percentile"
          type="percentile"
          register={register}
          errors={errors}
        />
        <SkillUpdate
          id="3"
          text="Current Score (out of 15)"
          type="score"
          register={register}
          errors={errors}
        />
      </div>
      <div className="flex justify-end gap-6 py-6 relative top-5">
        <button
          onClick={() => setQuestionModal(false)}
          type="button"
          className="border cursor-pointer border-gray-400 px-9 py-3 font-bold inline-block rounded-lg"
        >
          Cancel
        </button>
        <button
          type="submit"
          className={cn(
            'bg-blue-800 hover:bg-blue-500 cursor-pointer px-9 py-3 font-bold text-white flex items-center gap-4 rounded-lg'
          )}
        >
          Save
          <FaArrowRight />
        </button>
      </div>
    </form>
  );
}

function SkillUpdate({
  id,
  text,
  type,
  register,
  errors,
}: {
  id: string;
  text: string;
  type: 'rank' | 'percentile' | 'score';
  register: UseFormRegister<{
    percentile: number;
    rank: number;
    score: number;
  }>;

  errors: any;
}) {
  return (
    <div className="flex items-center gap-5">
      <p className="bg-blue-900 size-10 flex justify-center items-center text-white rounded-full">
        {id}
      </p>
      <p>
        Update your <span className="font-bold">{text}</span>
      </p>
      <div className="ml-auto relative">
        <input
          {...register(type)}
          type="number"
          className="border-blue-500 outline-blue-500 outline-1 border rounded-sm"
        />
        <p className="absolute text-xs text-red-500 font-bold top-7">
          {errors[type]?.message}
        </p>
      </div>
    </div>
  );
}
