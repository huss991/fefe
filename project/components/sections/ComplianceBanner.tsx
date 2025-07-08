"use client";

import { useLanguage } from '@/components/LanguageProvider';
import { Shield, Server, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function ComplianceBanner() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });
  
  const complianceItems = [
    {
      icon: <Server className="h-6 w-6 text-[#14D8FF]" />,
      text: t('hosted-in'),
    },
    {
      icon: <Shield className="h-6 w-6 text-[#14D8FF]" />,
      text: t('pdpl-ready'),
    },
    {
      icon: <CreditCard className="h-6 w-6 text-[#14D8FF]" />,
      text: t('pci-dss'),
    },
  ];
  
  return (
    <section
      className="py-12 bg-[#0B1F3F] text-white relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#14D8FF" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {t('compliance-title')}
          </h2>
        </motion.div>
        
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {complianceItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="bg-[#14D8FF]/20 p-2 rounded-full">
                {item.icon}
              </div>
              <span className="text-sm md:text-base">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}