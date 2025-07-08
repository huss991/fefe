"use client";

import { useLanguage } from '@/components/LanguageProvider';
import { DollarSign, PhoneOff, TrendingUp, Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function PainPoints() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const painPoints = [
    {
      icon: <DollarSign className="h-12 w-12 text-[#14D8FF]" />,
      title: "Slash Operating Costs & Beat the Labor Crunch",
      description: "Automate the repetitive work—save on wages, stay open longer",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-[#14D8FF]" />,
      title: "Recover Lost Revenue",
      description: "Stop letting phones ring out—every unanswered call is a missed ticket",
    },
    {
      icon: <Languages className="h-12 w-12 text-[#14D8FF]" />,
      title: t('pain-point-2-title'),
      description: t('pain-point-2-desc'),
      tooltip: "Source: Customer Experience Benchmark 2024",
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#0B1F3F]/90 relative overflow-hidden" ref={sectionRef}>
      {/* Wave background effect */}
      <div className="absolute inset-0 wave-bg z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3F] dark:text-white mb-4">
            {t('pain-points-title')}
          </h2>
        </div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-[#0B1F3F]/60 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden glass"
              variants={itemVariants}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#14D8FF]/10 rounded-full transform translate-x-10 -translate-y-10 z-0"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  {point.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-[#0B1F3F] dark:text-white mb-3 text-center">
                  {point.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {point.description}
                </p>
                
                {point.tooltip && (
                  <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center italic">
                    {point.tooltip}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}