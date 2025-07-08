"use client";

import { useLanguage } from '@/components/LanguageProvider';
import { Mic, MessageSquare, Cog, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function Services() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const services = [
    {
      icon: <Mic className="h-12 w-12 text-[#14D8FF]" />,
      title: t('service-1-title'),
      description: t('service-1-desc'),
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-[#14D8FF]" />,
      title: t('service-2-title'),
      description: t('service-2-desc'),
    },
    {
      icon: <Cog className="h-12 w-12 text-[#14D8FF]" />,
      title: t('service-3-title'),
      description: t('service-3-desc'),
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-[#14D8FF]" />,
      title: t('service-4-title'),
      description: t('service-4-desc'),
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  
  return (
    <section 
      className="py-16 md:py-24 bg-white dark:bg-[#0B1F3F] relative overflow-hidden" 
      id="services"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3F] dark:text-white mb-4">
            {t('services-title')}
          </h2>
        </div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-[#071631] rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col"
              variants={itemVariants}
            >
              <div className="bg-[#14D8FF]/10 dark:bg-[#14D8FF]/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[#0B1F3F] dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 flex-grow">
                {service.description}
              </p>
              
              <div className="mt-6">
                <a 
                  href="#contact" 
                  className="text-[#14D8FF] hover:text-[#0CBADC] font-medium flex items-center"
                  onClick={() => window.__boltTrack('service_learn_more', { service: service.title })}
                >
                  {t('learn-more')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-dir-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}