'use client';

import { createContext, useState } from 'react';

export const sideBarContext = createContext({} as any);

export default function SideBarProvider({ children }: any) {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <sideBarContext.Provider value={{ openSideBar, setOpenSideBar }}>
      {children}
    </sideBarContext.Provider>
  );
}
