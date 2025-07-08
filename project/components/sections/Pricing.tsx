"use client";

import { useLanguage } from '@/components/LanguageProvider';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export function Pricing() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const pricingPlans = [
    {
      name: t('starter'),
      price: t('starter-price'),
      features: [
        '1 Voice Agent',
        '500 minutes/month',
        'Basic Analytics',
        'Email Support',
        'Standard SLA',
      ],
      setupFee: '499 JD',
      popular: false,
      buttonText: t('get-started'),
    },
    {
      name: t('growth'),
      price: t('growth-price'),
      features: [
        '3 Voice Agents',
        '2,000 minutes/month',
        'Advanced Analytics',
        'WhatsApp Integration',
        'POS/ERP Integration',
        'Priority Support',
        '99.9% Uptime SLA',
      ],
      setupFee: '999 JD',
      popular: true,
      buttonText: t('get-started'),
    },
    {
      name: t('enterprise'),
      price: t('enterprise-price'),
      features: [
        'Unlimited Voice Agents',
        'Custom minutes/month',
        'Custom Analytics Dashboard',
        'Full API Access',
        'Multiple Location Support',
        'Dedicated Account Manager',
        '99.99% Uptime SLA',
        'Custom Integrations',
      ],
      setupFee: t('contact-us'),
      popular: false,
      buttonText: t('contact-us'),
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
    hidden: { opacity: 0, y: 50 },
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
      id="pricing"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3F] dark:text-white mb-4">
            {t('pricing-title')}
          </h2>
        </div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                plan.popular
                  ? 'border-2 border-[#14D8FF]'
                  : 'border border-gray-200 dark:border-gray-700'
              }`}
              variants={itemVariants}
            >
              {plan.popular && (
                <div className="absolute top-5 right-[-35px] bg-[#14D8FF] text-[#0B1F3F] font-bold py-1 px-10 text-sm transform rotate-45">
                  Popular
                </div>
              )}
              
              <div className={`p-8 flex-grow ${
                plan.popular 
                  ? 'bg-[#14D8FF]/10 dark:bg-[#14D8FF]/20' 
                  : 'bg-white dark:bg-[#071631]'
              }`}>
                <h3 className="text-xl font-bold text-[#0B1F3F] dark:text-white mb-2">
                  {plan.name}
                </h3>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-[#0B1F3F] dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 ml-dir-1">
                    {plan.name !== t('enterprise') && t('per-month')}
                  </span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    {t('setup-fee')}: {plan.setupFee}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-[#14D8FF] mr-dir-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-8 bg-white dark:bg-[#071631] border-t border-gray-100 dark:border-gray-800">
                <Button
                  className={`w-full ${
                    plan.popular ? 'primary-btn' : 'outline-btn'
                  }`}
                  onClick={() => {
                    window.__boltTrack('pricing_cta_click', { plan: plan.name });
                    const contactSection = document.querySelector('#contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}