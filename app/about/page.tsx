"use client";

import { Factory, TrendingUp, Users, Award, Building2, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import OrgChart from './components/OrganizationChart';

const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

// Custom Arrow Components
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white text-cyan-600 hover:scale-110 transition-all duration-200 border border-cyan-100 hidden md:block"
      aria-label="Next"
      type="button"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white text-cyan-600 hover:scale-110 transition-all duration-200 border border-cyan-100 hidden md:block"
      aria-label="Previous"
      type="button"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
}

export default function App() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false, // Hide arrows on mobile for better touch experience
        }
      }
    ]
  };

  const certifications = [
    { name: 'ISO 9001', description: '품질경영시스템' },
    { name: 'ISO 14001', description: '환경경영시스템' },
    { name: 'ISO 45001', description: '안전보건경영시스템' },
    { name: 'CE', description: '유럽 안전 인증' },
    { name: 'UL', description: '미국 안전 인증' },
    { name: 'NMEA', description: '해양전자협회' },
    { name: 'KC', description: '한국 안전 인증' },
    { name: 'PSE', description: '일본 전기용품' },
    { name: 'CCC', description: '중국 강제 인증' },
    { name: 'IEC', description: '국제전기표준' },
    { name: 'Wheelmark', description: 'DNV MED/MER-D 인증' },
  ];

  const awards = [
    { title: '2천만불 수출탑', year: '2013', description: '수출 실적 우수 기업 인정' },
    { title: '대통령 표창', year: '2017', description: '무역의날 수상' },
    { title: '산업포장 수상', year: '2025', description: '산업 발전 기여' },
    { title: '한국을 빛낸 이달의 무역인상', year: '2023', description: '무역 진흥 공로' },
    { title: '산업통상자원부장관 표창', year: '2020', description: '산업 발전 공로' },
    { title: '중소벤처기업부장관 표창', year: '2022', description: '중소기업 육성 기여' },
  ];

  const historyData = {
    '1990\'s': [
      { year: '1991', event: '에코트로닉스(주) 설립' }
    ],
    '2000\'s': [
      { year: '2000', event: '진천공장 설립' },
      { year: '2002', event: 'ISO 9001 인증' },
      { year: '2003', event: '기업부설연구소 설립' },
      { year: '2007', event: '진천 제2공장 설립' }
    ],
    '2010\'s': [
      { year: '2011', event: 'ISO 14001 & INNOBIZ 인증' },
      { year: '2013', event: '2천만불 수출탑 수상' },
      { year: '2014', event: '진천 제3공장 설립' },
      { year: '2017', event: '무역의날 대통령 표창' }
    ],
    '2020\'s': [
      { year: '2023', event: '대통령 국빈방문 한미경제사절단 선정' },
      { year: '2024', event: 'ESG 경영수준확인서 A등급 획득' },
      { year: '2025', event: '산업포장 수상' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-linear-to-r from-cyan-500 to-blue-500 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl mb-4"
          >
            회사 소개
          </motion.h1>
          <motion.p 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-cyan-100"
          >
            About Ecotronics
          </motion.p>
        </div>
      </motion.header>

      {/* Section 1: CEO Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-4xl mb-12 text-center text-gray-800">CEO 인사말</h2>
          </FadeInSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInSection delay={0.2}>
              <div className="relative group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="CEO"
                    className="w-full h-[500px] object-cover rounded-lg shadow-xl"
                  />
                </motion.div>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.4}>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  에코트로닉스는 1991년 10월에 설립, 레이더, AIS등 다양한 선박용 항해 장비를 글로벌 수출하고 있으며 
                  지속적인 R&D 투자를 통해 자사브랜드의 AI관련 장비 및 각종 솔루션 사업등 다양한 분야에 도전하고 있습니다.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  기업의 사회적 책임에 대한 높은 이해로 사회적 약자 및 지역발전을 위한 기부와 공익을 위한 대외활동을 지속하고 있으며, 
                  환경경영시스템 도입과 함께 ESG경영을 실천하고 있습니다.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  고객의 신뢰를 바탕으로 고객 만족을 최우선으로 하는 에코트로닉스(주)가 되기 위해 전임직원이 최선을 다해 노력하겠습니다.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Section 2: Key Messages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-4xl mb-12 text-center text-gray-800">Key Messages</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeInSection delay={0.1}>
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="text-center p-8 bg-white rounded-xl hover:shadow-xl transition-shadow border-t-4 border-cyan-500"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-4">
                  <TrendingUp className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl mb-3 text-gray-800">지속적인 성장</h3>
                <p className="text-gray-600">1991년 설립 이후 지속적인 성장</p>
              </motion.div>
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="text-center p-8 bg-white rounded-xl hover:shadow-xl transition-shadow border-t-4 border-purple-500"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <Building2 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl mb-3 text-gray-800">연구개발</h3>
                <p className="text-gray-600">2003년 중앙연구소 설립 (SW, HW, AI, 기구설계)</p>
              </motion.div>
            </FadeInSection>
            
            <FadeInSection delay={0.3}>
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="text-center p-8 bg-white rounded-xl hover:shadow-xl transition-shadow border-t-4 border-pink-500"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                  <Factory className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl mb-3 text-gray-800">제조기반 확대</h3>
                <p className="text-gray-600">3번에 걸친 진천공장 확장으로 제조기반 확대</p>
              </motion.div>
            </FadeInSection>
            
            <FadeInSection delay={0.4}>
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="text-center p-8 bg-white rounded-xl hover:shadow-xl transition-shadow border-t-4 border-blue-500"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl mb-3 text-gray-800">글로벌 경쟁력</h3>
                <p className="text-gray-600">2013년 2천만불 수출 달성 / 2023 한미경제사절단 선정</p>
              </motion.div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Section 3: History - Improved Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-4xl mb-4 text-center text-gray-800">주요 연혁</h2>
            <p className="text-center text-lg text-cyan-600 mb-16">제조기반 확대 / R&D 지속투자 / 지속성장</p>
          </FadeInSection>
          
          <div className="space-y-12">
            {Object.entries(historyData).map(([decade, events], decadeIndex) => (
              <FadeInSection key={decade} delay={decadeIndex * 0.1}>
                <div>
                  {/* Decade Badge */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-8"
                  >
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-3 rounded-full text-xl shadow-lg">
                      {decade}
                    </div>
                  </motion.div>
                  
                  {/* Timeline Items */}
                  <div className="relative">
                    {/* Timeline Line - positioned behind the cards */}
                    <div className="hidden md:block absolute left-0 right-0 top-8 h-0.5 bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {events.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -8 }}
                          className="relative"
                        >
                          {/* Card */}
                          <div className="bg-white border-l-4 border-cyan-500 rounded-lg shadow-md hover:shadow-xl transition-all p-5 h-full">
                            {/* Year Badge */}
                            <div className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm mb-3">
                              {item.year}
                            </div>
                            {/* Event Text */}
                            <p className="text-gray-800 text-base leading-relaxed">{item.event}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Organization Chart */}
      <OrgChart />

      {/* Section 5: Certifications & Awards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-4xl mb-12 text-center text-gray-800">인증 및 수상</h2>
          </FadeInSection>
          
          {/* Technical Certifications */}
          <div className="mb-16">
            <FadeInSection>
              <h3 className="text-3xl mb-8 text-center text-gray-700">기술 인증</h3>
            </FadeInSection>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {certifications.map((cert, index) => (
                <FadeInSection key={index} delay={index * 0.05}>
                  <motion.div 
                    whileHover={{ y: -8, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center border-t-4 border-cyan-500"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full mb-3">
                      <Award className="w-8 h-8 text-cyan-600" />
                    </div>
                    <h4 className="text-lg mb-1 text-gray-800">{cert.name}</h4>
                    <p className="text-sm text-gray-600">{cert.description}</p>
                  </motion.div>
                </FadeInSection>
              ))}
            </div>
          </div>

          {/* Awards Carousel */}
          <div className="mb-16">
            <FadeInSection>
              <h3 className="text-3xl mb-8 text-center text-gray-700">수상 경력</h3>
            </FadeInSection>
            <Slider {...carouselSettings}>
              {awards.map((award, index) => (
                <div key={index} className="px-4">
                  <motion.div 
                    whileHover={{ y: -8 }}
                    className="bg-linear-to-br from-white to-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow h-64 border-t-4 border-purple-500"
                  >

                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-br from-yellow-100 to-orange-100 rounded-full mb-4">
                          <Award className="w-6 h-6 text-yellow-600" />
                        </div>
                        <h4 className="text-xl mb-2 text-gray-800">{award.title}</h4>
                        <p className="text-purple-600 mb-3">{award.year}</p>
                      </div>
                      <p className="text-gray-600">{award.description}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Additional Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <FadeInSection delay={0.1}>
              <motion.div 
                whileHover={{ y: -8 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center border-t-4 border-pink-500"
              >
                <Users className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h4 className="text-lg mb-2 text-gray-800">벤처기업확인서</h4>
                <p className="text-sm text-gray-600">혁신적 기술 기업 인증</p>
              </motion.div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <motion.div 
                whileHover={{ y: -8 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center border-t-4 border-cyan-500"
              >
                <Building2 className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h4 className="text-lg mb-2 text-gray-800">기업부설연구소인정서</h4>
                <p className="text-sm text-gray-600">R&D 역량 인증</p>
              </motion.div>
            </FadeInSection>
            <FadeInSection delay={0.3}>
              <motion.div 
                whileHover={{ y: -8 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center border-t-4 border-blue-500"
              >
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg mb-2 text-gray-800">원산지인증수출자인증서</h4>
                <p className="text-sm text-gray-600">수출 우수 기업 인증</p>
              </motion.div>
            </FadeInSection>
          </div>
        </div>
      </section>

    </div>
  );
}
