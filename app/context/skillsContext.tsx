'use client';

import { createContext, useState } from 'react';

interface skillsTypes {
  rank: number;
  percentile: number;
  score: number;
}

export const SkillsContext = createContext({} as any);

export default function SkillsProvider({ children }: any) {
  const [skills, setSkills] = useState<skillsTypes>({
    rank: 1,
    percentile: 30,
    score: 10,
  });

  return (
    <SkillsContext.Provider value={{ skills, setSkills }}>
      {children}
    </SkillsContext.Provider>
  );
}
