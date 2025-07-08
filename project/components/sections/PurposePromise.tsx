"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Lightbulb } from 'lucide-react';

export function PurposePromise() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const cards = [
    {
      icon: <Target className="h-12 w-12 text-[#14D8FF]" />,
      title: "Our Mission",
      content: "At Genesis AI, our mission is to democratize advanced customer experiences by delivering cutting-edge AI voice agents and end-to-end CX automation for every industry. We empower organizations of all sizes to engage customers in real time, streamline operations, and unlock new value—turning every interaction into an effortless, human-centric conversation powered by intelligent automation."
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-[#14D8FF]" />,
      title: "Our Vision",
      content: "We envision Genesis AI To be every industry's go-to AI partner—landing with voice agents that fix urgent CX gaps, then scaling into chat, RPA, and analytics to turn real-time data into loyalty-driven insights and an integrated, predictive customer-experience stack that's impossible to displace."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 dot-pattern"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3F] mb-4">
            Purpose & Promise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#0B1F3F] rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-[#14D8FF]/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {card.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}