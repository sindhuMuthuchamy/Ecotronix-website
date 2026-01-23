"use client";

import { Building2, Factory, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
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

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-4xl mb-12 text-center">오시는 길</h2>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Headquarters */}
          <FadeInSection delay={0.1}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-linear-to-br from-gray-800 to-gray-700 p-8 rounded-lg shadow-xl"
            >
              <h3 className="text-2xl mb-6 flex items-center">
                <Building2 className="w-6 h-6 mr-3 text-cyan-400" />
                본사
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 mt-1 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="text-gray-200">TEL. 031-730-0500</p>
                    <p className="text-gray-200">FAX. 031-730-0515</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeInSection>

          {/* Factory */}
          <FadeInSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-linear-to-br from-gray-800 to-gray-700 p-8 rounded-lg shadow-xl"
            >
              <h3 className="text-2xl mb-6 flex items-center">
                <Factory className="w-6 h-6 mr-3 text-purple-400" />
                공장
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 mt-1 text-purple-400 flex-shrink-0" />
                  <div>
                    <p className="text-gray-200">TEL. 043-534-6491</p>
                    <p className="text-gray-200">FAX. 043-730-6492</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeInSection>
        </div>

        {/* Email */}
        <FadeInSection delay={0.3}>
          <div className="mt-12 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg shadow-lg"
            >
              <Mail className="w-6 h-6 mr-3 text-white" />
              <span className="text-xl text-white">s.sales@ecotro.co.kr</span>
            </motion.div>
          </div>
        </FadeInSection>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2025 Ecotronics Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;