'use client';
import { sideBarContext } from '@/app/context/sideBarContext';
import { cn } from '@/app/lib/utils';
import Link from 'next/link';
import { ReactNode, useContext } from 'react';
import { FaAward, FaFile } from 'react-icons/fa6';
import Overlay from './Overlay';
import { BiBarChart } from 'react-icons/bi';

export default function SideBar() {
  const { openSideBar, setOpenSideBar } = useContext(sideBarContext);

  return (
    <>
      <section
        className={cn(
          'border-r border-gray-400 pr-4 max-sm:fixed max-sm:translate-x-[-100%] top-0 transition-transform',
          openSideBar &&
            'max-sm:z-40 max-sm:translate-x-0 max-sm:bg-gray-50 max-sm:h-dvh'
        )}
      >
        <ul className="flex flex-col gap-6 py-12">
          <SideBarLinks text="Dashboard">
            <BiBarChart />
          </SideBarLinks>
          <SideBarLinks text="Skill Test" className="text-blue-700 bg-gray-100">
            <FaAward />
          </SideBarLinks>
          <SideBarLinks text="Interships">
            <FaFile />
          </SideBarLinks>
        </ul>
      </section>
      {openSideBar && (
        <Overlay className="" handleClick={() => setOpenSideBar(false)} />
      )}
    </>
  );
}

function SideBarLinks({
  text,
  className,
  children,
}: {
  text: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <li
      className={cn(
        `flex items-center rounded-r-full px-4 font-bold pr-24 py-4 text-gray-600 gap-3`,
        className
      )}
    >
      {children}
      <Link className={``} href="/">
        {text}
      </Link>
    </li>
  );
}
