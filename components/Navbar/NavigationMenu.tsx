import { motion } from "motion/react";

export function NavigationMenu() {
  const menuItems = [
    { label: "회사 소개", href: "#about" },
    { label: "주요 사업", href: "#business" },
    { label: "문의하기", href: "#contact" },
  ];

  return (
    <>
      <div className="bg-white py-10">
        <div className="container mx-auto px-6 flex justify-center">
          <motion.img
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            src="/assets/images/logo.svg"
            alt="Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>
      </div>

      <nav className="bg-slate-800 border-t border-slate-700 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6">
          <ul className="flex justify-center items-center gap-12 py-3">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.a
                  href={item.href}
                  className="text-white text-sm md:text-base hover:text-cyan-400 transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"
                  />
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}