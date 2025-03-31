'use client';
import { SkillsContext } from '@/app/context/skillsContext';
import { useContext } from 'react';
import { FaChartLine } from 'react-icons/fa6';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceDot,
} from 'recharts';

const leftData = [
  { percentile: 0, numberOfStudents: 1 },
  { percentile: 10, numberOfStudents: 2 },
  { percentile: 20, numberOfStudents: 3 },
  { percentile: 25, numberOfStudents: 4 },
  { percentile: 30, numberOfStudents: 5 },
];

const rightData = [
  { percentile: 30, numberOfStudents: 6 },
  { percentile: 40, numberOfStudents: 8 },
  { percentile: 50, numberOfStudents: 10 },
  { percentile: 60, numberOfStudents: 7 },
  { percentile: 70, numberOfStudents: 5 },
  { percentile: 75, numberOfStudents: 3 },
  { percentile: 90, numberOfStudents: 2 },
  { percentile: 100, numberOfStudents: 1 },
];
const CustomTooltip = ({ active, payload }: { active: any; payload: any }) => {
  console.log(active, payload);
  if (active && payload && payload.length && payload[0]) {
    return (
      <div className="bg-white p-2 border rounded shadow">
        <p>{payload[0].payload.percentile}</p>
        <p className="text-purple-500">
          numberOfStudents: {payload[0].payload.numberOfStudents}
        </p>
      </div>
    );
  }
};

export default function SkillLineChart() {
  const { skills } = useContext(SkillsContext);
  return (
    <div className="border border-gray-300 p-5 mt-7 rounded-lg">
      <div>
        <p className="font-bold mb-4">Comparison graph</p>
        <div className="flex items-center gap-3">
          <p className="">
            <span className="mr-1 font-bold text-gray-600">
              You scored {skills.percentile}% of percentile
            </span>
            which is lower than the average percentile 72% of all the engineers
            who took this assessment
          </p>
          <span className="bg-gray-100 p-4 rounded-full relative -top-10 ml-auto">
            <FaChartLine className="bg-gray-300 text-xl" />
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart key={skills.percentile}>
          <XAxis dataKey="percentile" type="number" domain={[0, 100]} />
          <YAxis axisLine={false} tick={false} />

          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            data={leftData}
            dataKey="numberOfStudents"
            stroke="#8884d8"
            dot={{ r: 3 }}
          />

          <Line
            type="monotone"
            data={rightData}
            dataKey="numberOfStudents"
            stroke="#8884d8"
            dot={{ r: 3 }}
          />

          <ReferenceLine
            x={skills.percentile}
            stroke="gray"
            strokeWidth={1}
            label={{
              value: 'Your Percentile',
              position: 'center',
              fill: 'black',
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
