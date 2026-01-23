import React from 'react';
import { motion } from 'framer-motion';

interface Department {
  id: string;
  title: string;
  teams: string[];
}

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeInSection = ({ children, delay = 0 }: FadeInSectionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="w-full flex flex-col relative"
  >
    {children}
  </motion.div>
);

const OrgChart = () => {
  const departments = [
    {
      id: 'prod',
      title: '생산본부',
      teams: ['기판생산팀', '제품생산팀', '품질기술팀', '생산관리팀'],
    },
    {
      id: 'finance',
      title: '재무관리실',
      teams: ['회계팀', '인사총무팀'],
    },
    {
      id: 'newbiz',
      title: '신사업실',
      teams: ['신사업팀'],
    },
    {
      id: 'scm',
      title: 'SCM실',
      teams: ['영업팀', '구매팀'],
    },
    {
      id: 'rnd',
      title: '연구소',
      teams: ['AI팀', 'SW팀', 'HW팀', '기구개발팀'],
    },
  ];

  return (
    <section className="py-10 lg:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-3xl lg:text-4xl mb-8 lg:mb-12 text-center text-gray-800 font-bold">
            조직도
          </h2>
        </FadeInSection>

        <div className="flex flex-col items-center w-full">
            
            {/* ==============================================
                LEVEL 1: CEO
               ============================================== */}
            <FadeInSection delay={0.1}>
              <div className="flex flex-col items-center z-20 relative w-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#3BB1D1] text-white w-40 py-3 rounded-lg text-lg shadow-md font-medium text-center z-10 relative"
                >
                  대표이사
                </motion.div>
              </div>
            </FadeInSection>

            {/* ==============================================
                LEVEL 1.5: QA Section (Responsive Split)
               ============================================== */}
            
            {/* --- MOBILE VIEW (Vertical Stack) --- */}
            <div className="flex flex-col items-center w-full lg:hidden">
                {/* Connector Line Down */}
                <div className="h-8 w-px bg-gray-300"></div>
                
                {/* QA Box */}
                <FadeInSection delay={0.15}>
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm py-2 px-6 w-auto text-center relative z-10">
                        <span className="text-[#3BB1D1] font-semibold">품질보증실</span>
                    </div>
                </FadeInSection>

                {/* Connector Line Down */}
                <div className="h-8 w-px bg-gray-300"></div>
            </div>

            {/* --- DESKTOP VIEW (Horizontal Branch) --- */}
            <div className="hidden lg:flex relative justify-center items-center w-full h-24">
               {/* Main Vertical Spine */}
               <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gray-300"></div>
               {/* Horizontal Connector to Left */}
               <div className="absolute right-1/2 top-1/2 w-[220px] h-px bg-gray-300"></div>
               {/* Junction Dot */}
               <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full z-10"></div>
               {/* QA Node */}
               <div className="absolute right-1/2 top-1/2 -translate-y-1/2 pr-[220px]">
                  <FadeInSection delay={0.15}>
                    <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center w-[160px]">
                         <div className="bg-white border border-gray-200 rounded-lg shadow-sm py-3 w-full text-center relative z-10">
                            <span className="text-[#3BB1D1] font-semibold text-lg">품질보증실</span>
                         </div>
                    </motion.div>
                  </FadeInSection>
               </div>
            </div>


            {/* ==============================================
                LEVEL 2: Managing Director
               ============================================== */}
            <FadeInSection delay={0.2}>
              <div className="flex flex-col items-center relative z-10 w-full">
                {/* Desktop Top Dot (Hidden on mobile as lines connect directly) */}
                <div className="hidden lg:block w-2 h-2 bg-gray-400 rounded-full -mt-1 z-10 relative"></div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#3BB1D1] text-white w-40 py-3 rounded-lg text-lg shadow-md font-medium text-center z-10 relative"
                >
                  상무이사
                </motion.div>

                {/* Connector Down */}
                <div className="w-px h-8 lg:h-10 bg-gray-300 relative">
                  {/* Desktop Split Dot */}
                  <div className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full translate-y-1/2 z-20"></div>
                </div>
              </div>
            </FadeInSection>


            {/* ==============================================
                LEVEL 3: Departments (Responsive Split)
               ============================================== */}

            {/* Container */}
            <div className="w-full relative">
                
                {/* --- DESKTOP VIEW (Horizontal Tree) --- */}
                <div className="hidden lg:flex w-full justify-center pt-4">
                    {departments.map((dept, index) => {
                        const isFirst = index === 0;
                        const isLast = index === departments.length - 1;
                        return (
                        <div key={index} className="flex flex-col flex-1 relative">
                            {/* Lines */}
                            <div className="h-8 w-full relative">
                                {!isLast && <div className="absolute top-0 right-0 w-1/2 h-px bg-gray-300"></div>}
                                {!isFirst && <div className="absolute top-0 left-0 w-1/2 h-px bg-gray-300"></div>}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gray-300"></div>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full -translate-y-1/2 z-10"></div>
                            </div>
                            {/* Card */}
                            <FadeInSection delay={0.1 * index + 0.3}>
                                <div className="flex flex-col items-center px-2 h-full">
                                    <DepartmentCard dept={dept} />
                                </div>
                            </FadeInSection>
                        </div>
                        );
                    })}
                </div>

                {/* --- MOBILE VIEW (Vertical Tree / List) --- */}
                <div className="flex flex-col w-full lg:hidden pl-4 md:pl-20">
                    <div className="border-l border-gray-300 ml-6 space-y-8 pb-4">
                        {departments.map((dept, index) => (
                            <FadeInSection key={index} delay={0.1 * index}>
                                <div className="relative pl-8 pr-4">
                                    {/* Horizontal connector from main vertical line */}
                                    <div className="absolute top-6 left-0 w-8 h-px bg-gray-300"></div>
                                    <div className="absolute top-6 left-0 w-2 h-2 bg-gray-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                    
                                    {/* Card */}
                                    <DepartmentCard dept={dept} />
                                </div>
                            </FadeInSection>
                        ))}
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

// Extracted Card Component to ensure design consistency between Mobile and Desktop
const DepartmentCard = ({ dept }: { dept: Department }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="w-full flex flex-col items-center h-full max-w-sm mx-auto lg:max-w-none"
    >
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm py-3 w-full text-center relative mb-3 z-10">
            <span className="text-[#3BB1D1] font-semibold text-lg">
                {dept.title}
            </span>
        </div>
        <div className="bg-white lg:bg-gray-50 rounded-xl shadow-sm lg:shadow-inner border lg:border-none p-4 w-full flex-grow text-left">
            <ul className="grid grid-cols-1 gap-2">
                {dept.teams.map((team, i) => (
                <li key={i} className="text-gray-600 text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                    {team}
                </li>
                ))}
            </ul>
        </div>
    </motion.div>
);

export default OrgChart;