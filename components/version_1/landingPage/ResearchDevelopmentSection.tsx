'use client';
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const rAndDData = [
  {
    title: "AI & Autonomous Systems",
    description: "Pioneering the future with self-learning algorithms and autonomous control systems for marine and industrial applications.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50"
  },
  {
    title: "Green Marine Tech",
    description: "Developing eco-friendly propulsion and energy management systems to reduce the carbon footprint of global shipping.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50"
  },
  {
    title: "Smart Factory IoT",
    description: "Integrating IoT sensors and real-time data analytics to optimize manufacturing processes and predict maintenance needs.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50"
  },
  {
    title: "Next-Gen Materials",
    description: "Researching advanced composite materials for lighter, stronger, and more durable vessel construction.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: "from-purple-500 to-indigo-500",
    bg: "bg-purple-50"
  }
];

export function ResearchDevelopmentSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div className="relative bg-slate-50 py-32 overflow-hidden" id="research">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-linear-to-bl from-cyan-100 to-blue-50 blur-3xl opacity-60"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-linear-to-tr from-purple-100 to-pink-50 blur-3xl opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
            ref={sectionRef}
            style={{ opacity, y }}
            className="text-center max-w-3xl mx-auto mb-20"
        >
            <h3 className="text-cyan-600 font-medium tracking-wider uppercase text-sm mb-4">Innovation First</h3>
            <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
            Research & Development
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
            Pushing the boundaries of what's possible. Our dedicated labs are focused on creating sustainable, efficient, and intelligent solutions for the industries of tomorrow.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rAndDData.map((item, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className={`${item.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`bg-linear-to-br ${item.color} bg-clip-text text-transparent`}>
                      {/* We need to clone the element to apply classes if passing raw SVG, or just wrap it */}
                      <div className="text-current">
                        {item.icon}
                      </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-cyan-600 transition-colors">
                {item.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-sm">
                {item.description}
                </p>

                <div className="mt-6 flex items-center text-sm font-medium text-cyan-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </div>
            </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
