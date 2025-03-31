'use client';
import { SkillsContext } from '@/app/context/skillsContext';
import { useContext } from 'react';
import { GiBullseye } from 'react-icons/gi';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Your Value', value: 80 }, // Your actual data point
  { name: 'Remaining', value: 20 }, // Filler to complete the circle
];

const COLORS = ['#0088FE', '#DDDDDD'];

export default function SkillPieChart() {
  const { skills } = useContext(SkillsContext);
  return (
    <div className="border border-gray-300 p-5 mt-7 rounded-lg">
      <div className="mb-5 flex items-center">
        <p className="font-bold">Question Analysis</p>
        <span className="ml-auto font-bold text-blue-600">
          {skills.score}/15
        </span>
      </div>

      <p>
        <span className="font-bold text-gray-600">
          You scored of {skills.score} questions out of 15.
        </span>{' '}
        However it still needs some improvement
      </p>
      <div className="flex justify-center items-center relative">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={[
                { name: 'percentile', value: (skills.score / 15) * 100 },
                { name: 'Remaining', value: 100 - (skills.score / 15) * 100 },
              ]}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <span className="absolute">
          <GiBullseye className="text-5xl text-red-500 rotate-180" />
        </span>
      </div>
    </div>
  );
}
