import { motion } from "motion/react";
import { Ship, Cpu, Globe } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

interface BusinessSectionProps {
  title?: string;
  subtitle?: string;
  heading?: string;
}

export function BusinessField({ title = "Business Field", subtitle = "", heading = "사업분야" }: BusinessSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  const businessItems = [
    {
      id: "marine",
      icon: Ship,
      title: "Marine Electronics",
      subtitle: "해양 산업용 장비 전자장비 개발",
      items: [],
      image: "https://images.unsplash.com/photo-1758248421325-6f3a1d92075a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwJTIwbWFyaW5lJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWx8ZW58MXx8fHwxNzY5MDg0NjUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
      gradientFrom: "from-blue-500",
      gradientTo: "to-cyan-500",
      glowColor: "shadow-blue-500/20",
    },
    {
      id: "ai",
      icon: Cpu,
      title: "AI Business",
      subtitle: "",
      items: [
        "1. AI 자동화 검사기 & 솔루션",
        "2. 스마트팩토리용 Robot_ARM",
        "3. 선박용 자율운항 솔루션",
        "4. CSO패킷사 솔루션",
      ],
      image: "https://images.unsplash.com/photo-1758626056863-9191d5cef12e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwaGFuZCUyMG5ldHdvcmt8ZW58MXx8fHwxNzY5MDg0NjUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-500",
      glowColor: "shadow-purple-500/20",
    },
    {
      id: "global",
      icon: Globe,
      title: "Global EMS/ODM",
      subtitle: "",
      items: [
        "1. Global Trading 사업",
        "2. Global EMS 및 ODM 사업",
      ],
      image: "https://images.unsplash.com/photo-1768796372362-05c256e61d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMG1hbnVmYWN0dXJpbmclMjBhc3NlbWJseSUyMGxpbmV8ZW58MXx8fHwxNzY5MDQxNzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      iconColor: "text-pink-600",
      iconBg: "bg-pink-100",
      gradientFrom: "from-pink-500",
      gradientTo: "to-rose-500",
      glowColor: "shadow-pink-500/20",
    },
  ];

  return (
    <section id="business" className="bg-linear-to-b from-gray-50 to-white py-16 md:py-20 relative overflow-hidden">
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={sectionRef}
          style={{ opacity, y }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="text-cyan-600 font-medium tracking-wider uppercase text-sm">{subtitle}</span>
            <div className="h-0.5 w-full bg-linear-to-r from-cyan-400 to-blue-500 mt-1" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mt-4 bg-linear-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
          >
            {heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto mt-6 text-lg"
          >
            Innovating across multiple sectors to bring sustainable technology to every aspect of modern life.
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {businessItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.7,
                type: "spring",
                stiffness: 100,
              }}
              onHoverStart={() => setHoveredCard(item.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="flex flex-col perspective-1000"
            >
              {/* Card Container */}
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`
                  bg-white rounded-2xl overflow-hidden 
                  shadow-xl hover:shadow-2xl ${item.glowColor}
                  border border-gray-100
                  transition-all duration-300
                  h-full flex flex-col
                  relative
                `}
              >
                {/* Gradient accent bar at top */}
                <div className={`h-1.5 bg-linear-to-r ${item.gradientFrom} ${item.gradientTo}`} />

                {/* Card Content */}
                <div className="p-6 flex flex-col grow">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className={`w-16 h-16 rounded-xl ${item.iconBg} flex items-center justify-center relative overflow-hidden`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Animated gradient background */}
                      <motion.div
                        className={`absolute inset-0 bg-linear-to-br ${item.gradientFrom} ${item.gradientTo} opacity-0`}
                        animate={{
                          opacity: hoveredCard === item.id ? 0.2 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <item.icon className={`w-8 h-8 ${item.iconColor} relative z-10`} />
                    </motion.div>
                    <h3 className={`text-xl md:text-2xl font-bold ${item.iconColor}`}>
                      {item.title}
                    </h3>
                  </div>

                  {/* Subtitle or Items */}
                  <div className="mb-6 grow">
                    {item.subtitle && (
                      <motion.p 
                        className="text-blue-600 font-medium text-base md:text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      >
                        {item.subtitle}
                      </motion.p>
                    )}
                    {item.items.length > 0 && (
                      <ul className="space-y-3">
                        {item.items.map((listItem, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                              delay: index * 0.2 + idx * 0.1, 
                              duration: 0.4 
                            }}
                            className="text-gray-700 text-sm md:text-base flex items-start gap-2"
                          >
                            <motion.span
                              className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${item.gradientFrom} ${item.gradientTo} mt-2 shrink-0`}
                              whileHover={{ scale: 1.5 }}
                            />
                            <span>{listItem}</span>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Image */}
                  <motion.div
                    className="relative overflow-hidden rounded-xl shadow-lg h-48 md:h-56 group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      animate={{
                        scale: hoveredCard === item.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-full h-full"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        width={1080}
                        height={1920}
                      />
                    </motion.div>
                    
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent`} />
                    
                    {/* Animated gradient border on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-linear-to-r ${item.gradientFrom} ${item.gradientTo} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.2 }}
                    />

                    {/* Shine effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                      animate={{
                        x: hoveredCard === item.id ? ['100%', '200%'] : '-100%',
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </div>

                {/* Bottom gradient accent */}
                <motion.div
                  className={`h-1 bg-linear-to-r ${item.gradientFrom} ${item.gradientTo} opacity-0`}
                  animate={{
                    opacity: hoveredCard === item.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}