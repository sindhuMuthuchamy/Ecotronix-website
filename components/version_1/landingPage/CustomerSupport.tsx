import { motion } from "motion/react";
import { Newspaper, Download, MessageSquare, ChevronRight, Calendar, FileText } from "lucide-react";
import { useState } from "react";

export function CustomerSupportSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const topNews = [
    {
      id: 1,
      title: "2026년 신규 AI 자동화 솔루션 출시 안내",
      date: "2026.01.20",
      isNew: true,
    },
    {
      id: 2,
      title: "스마트팩토리 Robot ARM 업그레이드 완료",
      date: "2026.01.15",
      isNew: true,
    },
    {
      id: 3,
      title: "Maritime 자율운항 시스템 성공적 테스트",
      date: "2026.01.10",
      isNew: false,
    },
  ];

  const resources = [
    { name: "AI Technology", icon: "🤖", color: "from-purple-500 to-pink-500" },
    { name: "MASS Solutions", icon: "⚓", color: "from-blue-500 to-cyan-500" },
    { name: "Smart Factory", icon: "🏭", color: "from-orange-500 to-red-500" },
  ];

  return (
    <section id="news" className="bg-linear-to-b from-white to-gray-50 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-linear-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-linear-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            고객지원
          </h2>
          <p className="text-gray-600 text-lg">Customer Support</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Card 1: News & Announcements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0, duration: 0.6 }}
            onHoverStart={() => setHoveredCard("news")}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative"
          >
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100 overflow-hidden h-full flex flex-col transition-all duration-300"
            >
              {/* Header */}
              <div className="bg-linear-to-r from-blue-600 to-cyan-600 p-6 text-white relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  animate={{
                    x: hoveredCard === "news" ? ["-100%", "100%"] : "-100%",
                  }}
                  transition={{ duration: 0.6 }}
                />
                <div className="flex items-center gap-3 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Newspaper className="w-8 h-8" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold">뉴스/공지</h3>
                    <p className="text-sm text-blue-100">News & Announcements</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 grow flex flex-col">
                <div className="space-y-3 mb-6 grow">
                  {topNews.map((news, idx) => (
                    <motion.div
                      key={news.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      whileHover={{ x: 5 }}
                      className="border-l-4 border-blue-500 pl-4 py-2 hover:bg-blue-50 transition-colors rounded-r cursor-pointer group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm text-gray-800 line-clamp-2 grow group-hover:text-blue-600 transition-colors">
                          {news.title}
                        </p>
                        {news.isNew && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold shrink-0"
                          >
                            NEW
                          </motion.span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{news.date}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-linear-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow group"
                >
                  <span>더보기</span>
                  <motion.div
                    animate={{ x: hoveredCard === "news" ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Card 2: Resource Download */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.15, duration: 0.6 }}
            onHoverStart={() => setHoveredCard("download")}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative"
          >
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100 overflow-hidden h-full flex flex-col transition-all duration-300"
            >
              {/* Header */}
              <div className="bg-linear-to-r from-purple-600 to-pink-600 p-6 text-white relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  animate={{
                    x: hoveredCard === "download" ? ["-100%", "100%"] : "-100%",
                  }}
                  transition={{ duration: 0.6 }}
                />
                <div className="flex items-center gap-3 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Download className="w-8 h-8" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold">자료 다운로드</h3>
                    <p className="text-sm text-purple-100">Resource Download</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-600 mb-6 text-sm">
                  첨단 기술 트렌드와 관련된 최신 자료를 다운로드하세요
                </p>

                <div className="space-y-3 mb-6 grow">
                  {resources.map((resource, idx) => (
                    <motion.div
                      key={resource.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.03 }}
                      className="bg-linear-to-r p-[2px] rounded-lg cursor-pointer"
                      style={{
                        backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                      }}
                    >
                      <div className="bg-white rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{resource.icon}</span>
                            <div>
                              <p className="font-semibold text-gray-800">{resource.name}</p>
                              <p className="text-xs text-gray-500">Latest trends & data</p>
                            </div>
                          </div>
                          <FileText className="w-5 h-5 text-purple-600" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-linear-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                >
                  <span>자료실 바로가기</span>
                  <motion.div
                    animate={{ x: hoveredCard === "download" ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Card 3: Consultation Request */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onHoverStart={() => setHoveredCard("consult")}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative"
          >
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100 overflow-hidden h-full flex flex-col transition-all duration-300"
            >
              {/* Header */}
              <div className="bg-linear-to-r from-orange-600 to-red-600 p-6 text-white relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  animate={{
                    x: hoveredCard === "consult" ? ["-100%", "100%"] : "-100%",
                  }}
                  transition={{ duration: 0.6 }}
                />
                <div className="flex items-center gap-3 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MessageSquare className="w-8 h-8" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold">상담요청</h3>
                    <p className="text-sm text-orange-100">Consultation Request</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 grow flex flex-col">
                <div className="grow">
                  <p className="text-gray-700 font-medium mb-4">
                    (주)에코트로닉스에 관심을 가져주셔서 감사합니다
                  </p>
                  
                  <div className="bg-linear-to-br from-orange-50 to-red-50 rounded-xl p-5 mb-6 border border-orange-100">
                    <p className="text-gray-700 leading-relaxed">
                      고객님의 관심 분야와 관련한 어떤 내용이든 
                      <span className="font-bold text-orange-600"> 최선을 다해 답변</span>
                      드리겠습니다.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center gap-3 text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                      <span>제품 및 기술 문의</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center gap-3 text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                      <span>비즈니스 협력 상담</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex items-center gap-3 text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                      <span>기타 문의사항</span>
                    </motion.div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 bg-linear-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                >
                  <span>간편하게 문의하기</span>
                  <motion.div
                    animate={{ x: hoveredCard === "consult" ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
