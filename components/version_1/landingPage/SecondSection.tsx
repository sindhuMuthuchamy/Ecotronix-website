import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface IndustrySectionProps {
  title?: string;
  subtitle?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  videoUrl?: string;
}

export function IndustrySection({
  title = "Change The Way Of Manufacturing",
  subtitle = "Global",
  heading = "Industrial Inspection Solution Leader",
  description = "산업 현장에서 시리얼 검증된 머신비전(MV), 비파괴검사(NDT) 기술과 적업장 통합데이터 강사, 실시간 공장 모니터링 등을 아우르는 일체적 토탈 검사 솔루션 및 서비스를 제공합니다.",
  buttonText = "Find Out More",
  videoUrl = "https://www.pexels.com/download/video/852388/",
}: IndustrySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Enhanced scroll effects - slides from down and behind
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [200, 0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.95]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && videoRef.current) {
          // Force play with error handling
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                console.log("Video playing successfully");
              })
              .catch((err) => {
                console.log("Video autoplay prevented:", err);
                // Try to play again after a short delay
                setTimeout(() => {
                  if (videoRef.current) {
                    videoRef.current.play().catch(() => {});
                  }
                }, 100);
              });
          }
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-[500px] h-[500px] rounded-full opacity-5 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      <motion.div
        ref={sectionRef}
        style={{ y, opacity, scale }}
        className="relative z-10 min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-24"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative inline-block"
              >
                <h3 className="text-cyan-400 tracking-wider text-sm md:text-base uppercase relative">
                  {title}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
                  <span className="bg-linear-to-r from-gray-700 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                    {subtitle}
                  </span>
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
                  <span className="bg-linear-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent font-bold">
                    {heading}
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl"
              >
                {description}
              </motion.p>

              {/* CTA Button with glow effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-lg overflow-hidden shadow-lg shadow-cyan-500/30"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {buttonText}
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </motion.svg>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>

              {/* Decorative stats or features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-8 pt-8 border-t border-gray-200"
              >
                {[
                  { label: "Years Experience", value: "15+" },
                  { label: "Industries Served", value: "100+" },
                  { label: "Success Rate", value: "99%" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    className="relative"
                  >
                    <div className="text-2xl md:text-3xl font-bold bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-xs md:text-sm mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right video */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              {/* Glow effect behind video */}
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 to-blue-600/20 blur-3xl rounded-3xl" />

              {/* Video container with 3D effect */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-white/10"
                whileHover={{ scale: 1.02, rotateY: 2, rotateX: -2 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <video
                  ref={videoRef}
                  src={videoUrl}
                  className="w-full h-auto rounded-2xl"
                  loop
                  muted
                  playsInline
                  preload="auto"
                  autoPlay
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {!isInView && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center"
                    >
                      <svg
                        className="w-10 h-10 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  </motion.div>
                )}

                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400/50 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        bottom: "0%",
                      }}
                      animate={{
                        y: [-20, -400],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-3xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-blue-400/50 rounded-bl-3xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.5 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}