"use client";

import { useLanguage } from '@/components/LanguageProvider';
import { Mic, Brain, MessageSquare, Link2, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function HowItWorks() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const steps = [
    {
      icon: <Mic className="h-12 w-12 text-[#14D8FF]" />,
      title: "Capture Audio",
      description: "The AI instantly answers every call or drive-thru mic in natural Arabic & English, streaming crystal-clear audio to the cloud.",
      number: 1
    },
    {
      icon: <Brain className="h-12 w-12 text-[#14D8FF]" />,
      title: "Real-Time Understanding",
      description: "Low-latency speech-to-text and GPT-class NLU decode the caller's intent (order, reservation, question) in under a second.",
      number: 2
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-[#14D8FF]" />,
      title: "Smart Response",
      description: "A neural voice replies just as fast—confirming the order, suggesting upsells, or clarifying details—so the conversation flows naturally.",
      number: 3
    },
    {
      icon: <Link2 className="h-12 w-12 text-[#14D8FF]" />,
      title: "POS / CRM Integration",
      description: "Orders and data flow straight into your POS, delivery app, or CRM with zero re-typing, cutting errors and kitchen wait-time.",
      number: 4
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-[#14D8FF]" />,
      title: "Continuous Learning",
      description: "Every interaction feeds analytics dashboards; accuracy, upsell rates, and response speed keep improving automatically.",
      number: 5
    }
  ];
  
  return (
    <section 
      className="py-16 md:py-24 bg-gray-50 dark:bg-[#071631] relative overflow-hidden" 
      id="how-it-works"
      ref={sectionRef}
    >
      {/* Diagonal pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern id="diagonalPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M-10,10 l20,-20 M0,40 l40,-40 M30,50 l20,-20" stroke="#14D8FF" strokeWidth="1" fill="none" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#diagonalPattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3F] dark:text-white mb-4">
            {t('how-it-works-title')}
          </h2>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#14D8FF]/30 hidden md:block"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative mb-12 md:mb-24 last:mb-0"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Step number bubble */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#0B1F3F] dark:bg-[#14D8FF] rounded-full text-white dark:text-[#0B1F3F] flex items-center justify-center font-bold text-xl z-10 hidden md:flex">
                  {step.number}
                </div>
                
                {/* Content box */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-white dark:bg-[#0B1F3F]/60 rounded-xl p-8 shadow-lg glass">
                    <div className="flex items-center mb-4">
                      <div className="mr-4 md:hidden">
                        <div className="w-10 h-10 bg-[#0B1F3F] dark:bg-[#14D8FF] rounded-full text-white dark:text-[#0B1F3F] flex items-center justify-center font-bold">
                          {step.number}
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#0B1F3F] dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Icon */}
                <div className="hidden md:flex items-center justify-center w-full md:w-1/2">
                  <div className="w-24 h-24 bg-[#14D8FF]/10 dark:bg-[#14D8FF]/20 rounded-full flex items-center justify-center transform transition-all duration-300 hover:rotate-6">
                    {step.icon}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}