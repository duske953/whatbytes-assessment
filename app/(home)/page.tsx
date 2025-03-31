import { Metadata } from 'next';
import SideBarProvider from '../context/sideBarContext';
import SkillsProvider from '../context/skillsContext';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { SkillStats, SkillTest } from './components/SkillAssessment';
import SkillLineChart from './components/SkillLineChart';

import SkillPieChart from './components/SkillPieChart';
import SyllabusProgressSection from './components/SyllablusProgress';

export const metadata: Metadata = {
  title: 'Technical Assessment - Frontend Developer Internship | WhatBytes',
  description:
    'Participating in the technical assessment for the Frontend Developer internship role at WhatBytes. Showcasing skills in web development and problem-solving.',
};

export default function Page() {
  return (
    <SkillsProvider>
      <SideBarProvider>
        <section className="h-dvh max-w-[120rem] mx-auto">
          <section className="grid grid-cols-[0.2fr_auto] max-sm:grid-cols-1">
            <NavBar />
            <SideBar />
            <section className="p-4 grid grid-cols-[1.6fr_1fr] gap-6 max-lg:block">
              <div>
                <SkillTest />
                <SkillStats />
                <SkillLineChart />
              </div>
              <div className="max-md:py-9">
                <SyllabusProgressSection />
                <SkillPieChart />
              </div>
            </section>
          </section>
        </section>
      </SideBarProvider>
    </SkillsProvider>
  );
}
