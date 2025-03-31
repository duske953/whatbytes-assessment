'use client';
import { sideBarContext } from '@/app/context/sideBarContext';
import Image from 'next/image';
import { useContext } from 'react';
import { CiMenuFries } from 'react-icons/ci';

export default function NavBar() {
  const { setOpenSideBar } = useContext(sideBarContext);
  return (
    <header className="border-b border-gray-300 col-[1_/-1] relative">
      <nav className="flex justify-between p-4 items-center">
        <h1 className="font-bold text-3xl">WhatBytes</h1>

        <div>
          <div className="flex items-center border border-gray-300 p-3 rounded-lg gap-2">
            <Image
              className="size-8 object-cover rounded-full"
              src="/profile.jpg"
              alt="Profile of Rahil Siddique"
              width={100}
              height={100}
            />
            <p className="text-sm font-bold">Rahil Siddique</p>
          </div>
        </div>
      </nav>
      <CiMenuFries
        onClick={() => setOpenSideBar(true)}
        className="absolute left-4 cursor-pointer top-[4.4rem] font-bold text-3xl hidden max-lg:block"
      />
    </header>
  );
}
