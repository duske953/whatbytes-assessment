import { cn } from '@/app/lib/utils';

export default function Overlay({
  handleClick,
  className,
}: {
  handleClick: () => void;
  className?: string;
}) {
  return (
    <div
      onClick={handleClick}
      className={cn(
        `fixed cursor-pointer top-0 left-0 w-full h-full bg-gray-800/70 z-20`,
        className
      )}
    ></div>
  );
}
