'use client';
import { ReactNode, useContext, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaCalendar, FaHtml5, FaTrophy } from 'react-icons/fa6';
import Overlay from './Overlay';
import UpdateSkillScores from './UpdateSkillScores';
import { SkillsContext } from '@/app/context/skillsContext';

export function SkillTest() {
  const [openQuestionModal, setQuestionModal] = useState(false);

  function handleCloseModal() {
    setQuestionModal(false);
  }
  return (
    <>
      <div className="flex max-sm:flex-col max-sm:items-start items-center gap-6 border border-gray-300 p-4 rounded-lg relative">
        <div>
          <FaHtml5 className="text-orange-700 text-5xl" />
        </div>
        <div>
          <p className="font-bold max-md:mb-2">Hyper Text Markup Language</p>
          <div className="flex gap-1 max-sm:flex-col max-sm:gap-3">
            <p className="border-r-2 border-gray-300 pr-2 text-sm max-md:border-r-0">
              Questions: 08
            </p>
            <p className="border-r-2 border-gray-300 text-sm pr-2 max-md:border-r-0">
              Duration: 15 mins
            </p>
            <p className="text-sm">Submitted on 5 June 2021</p>
          </div>
        </div>
        <div>
          <button
            onClick={() => setQuestionModal(true)}
            className="bg-blue-900 hover:bg-blue-600 transition-colors cursor-pointer text-white px-5 text-xs py-2 text-bold rounded-lg border-black border-2 relative -top-2 font-bold"
            type="button"
          >
            Update
          </button>
          {openQuestionModal && (
            <>
              <Overlay handleClick={handleCloseModal} />
              <UpdateSkillScores setQuestionModal={setQuestionModal} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export function SkillStats() {
  const { skills } = useContext(SkillsContext);
  return (
    <div className="border p-2 rounded-lg border-gray-300 mt-6 pb-6">
      <span className="pb-2 font-bold inline-block">Quick Statistics</span>
      <ul className="flex justify-between max-sm:flex-col gap-6 max-md:justify-center">
        <SkillStatsPoints points={skills.rank} detail="Your Rank">
          <FaTrophy className="text-orange-500" />
        </SkillStatsPoints>

        <SkillStatsPoints points={`${skills.percentile}%`} detail="percentile">
          <FaCalendar className="text-gray-500" />
        </SkillStatsPoints>

        <SkillStatsPoints
          points={`${skills.score} / 15`}
          detail="correct answers"
        >
          <FaCheckCircle className="text-green-500" />
        </SkillStatsPoints>
      </ul>
    </div>
  );
}

function SkillStatsPoints({
  children,
  points,
  detail,
}: {
  points: string;
  detail: string;
  children: ReactNode;
}) {
  return (
    <li className="flex items-center gap-2 border-r border-gray-300 last:border-0 pr-7 dlast:pr-6">
      <div className="text-xl bg-gray-100 p-4 rounded-full max-md:text-sm">
        {children}
      </div>
      <div>
        <div>
          <p className="font-bold text-xl max-md:text-sm">{points}</p>
          <p className="uppercase text-gray-600 text-xs">{detail}</p>
        </div>
      </div>
    </li>
  );
}
