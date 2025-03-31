import { Progress } from '@/app/components/ui/progress';
import { cn } from '@/app/lib/utils';

export default function SyllabusProgressSection() {
  return (
    <div className="border border-gray-300 p-4 rounded-lg">
      <p className="mb-7 font-bold">Syllabus Wise Analysis</p>
      <div className="flex flex-col gap-11">
        <SyllabusProgress
          value="80%"
          text="HTML Tools, Forms, History"
          fillColor="bg-blue-600"
          textColor="text-blue-600"
          outlineColor="bg-blue-100"
        />

        <SyllabusProgress
          value="60%"
          text="Tags & References In HTML"
          fillColor="bg-orange-400"
          textColor="text-orange-600"
          outlineColor="bg-orange-100"
        />

        <SyllabusProgress
          value="24%"
          text="Tables & References In HTML"
          fillColor="bg-red-600"
          textColor="text-red-600"
          outlineColor="bg-red-100"
        />

        <SyllabusProgress
          value="96%"
          text="Tables & CSS Basics"
          fillColor="bg-green-500"
          textColor="text-green-600"
          outlineColor="bg-green-100"
        />
      </div>
    </div>
  );
}

function SyllabusProgress({
  value,
  text,
  fillColor,
  outlineColor,
  textColor,
}: {
  value: string;
  text: string;
  fillColor: string;
  outlineColor: string;
  textColor: string;
}) {
  return (
    <div>
      <p>{text}</p>
      <div className="flex items-center gap-5">
        <Progress
          fillColor={fillColor}
          outlineColor={outlineColor}
          value={+value.split('%')[0]}
          max={100}
        />
        <p className={cn('font-bold', textColor)}>{value}</p>
      </div>
    </div>
  );
}
