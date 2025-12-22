import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface MenuItem {
  title: string;
  isMainTopic: boolean;
  isSubTopic?: boolean;
  items?: string[];
}

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuData: MenuItem[] = [
  {
    title: "SOLUTION",
    isMainTopic: true,
    items: [
      "Industrial Inspection",
      "  Machine vision",
      "  NDT",
      "Manufacturing Intelligence",
      "  LISA Platform",
      "  Data CAMP",
      "  LISA V (AI CCTV)",
    ],
  },
  {
    title: "IR",
    isMainTopic: true,
    items: ["공시정보", "공지사항", "언론보도"],
  },
  {
    title: "COMPANY",
    isMainTopic: true,
    items: [
      "기업소개",
      "Company Overview",
      "History",
      "Certificates",
      "Location",
      "채용",
    ],
  },
  {
    title: "CONTACT ONLINE",
    isMainTopic: true,
  },
];

export function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50"
        >
          
          <div className="absolute inset-0 bg-linear-to-br from-indigo-950 via-purple-900 to-pink-900">  
            <motion.div
              className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, transparent 70%)",
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, transparent 70%)",
              }}
              animate={{
                x: [0, -80, 0],
                y: [0, 80, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            onClick={onClose}
            className="absolute top-8 right-8 z-50 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors group"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-6 h-6" />
          </motion.button>

          <div className="relative z-10 h-full flex items-center justify-center px-8 overflow-y-auto">
            <div className="w-full max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                {menuData.map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{
                      delay: 0.1 + sectionIndex * 0.1,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="flex flex-col"
                  >
                    {/* Main topic */}
                    <motion.h2
                      className="text-2xl lg:text-3xl mb-6 text-white relative inline-block"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="relative">
                        {section.title}
                        <motion.span
                          className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-pink-500 to-purple-500"
                          initial={{ width: "0%" }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                    </motion.h2>

                    {/* Sub items */}
                    {section.items && (
                      <ul className="space-y-3">
                        {section.items.map((item, itemIndex) => {
                          const isSubTopic =
                            !item.startsWith("  ") &&
                            itemIndex > 0 &&
                            section.items &&
                            section.items[itemIndex + 1]?.startsWith("  ");
                          const isNestedItem = item.startsWith("  ");
                          const cleanItem = item.trim();

                          return (
                            <motion.li
                              key={itemIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: 0.2 + sectionIndex * 0.1 + itemIndex * 0.05,
                                duration: 0.4,
                              }}
                              className={`${
                                isNestedItem ? "ml-6" : ""
                              }`}
                            >
                              <motion.a
                                href="#"
                                className={`block relative group ${
                                  isSubTopic
                                    ? "text-white/90"
                                    : isNestedItem
                                    ? "text-white/60 text-sm"
                                    : "text-white/70"
                                }`}
                                whileHover={{ x: 5, color: "rgba(255, 255, 255, 1)" }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                {!isNestedItem && (
                                  <motion.span
                                    className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-linear-to-r from-pink-400 to-purple-400"
                                    whileHover={{ width: "20px" }}
                                    transition={{ duration: 0.2 }}
                                  />
                                )}
                                <span className={isNestedItem ? "" : "ml-0 group-hover:ml-7 transition-all duration-300"}>
                                  {cleanItem}
                                </span>
                              </motion.a>
                            </motion.li>
                          );
                        })}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-20 text-center"
              >
                <div className="text-white/20 text-sm tracking-widest">
                  INNOVATION • TECHNOLOGY • EXCELLENCE
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -1000],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}