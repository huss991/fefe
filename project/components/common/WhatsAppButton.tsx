"use client";

import { motion } from 'framer-motion';

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Track WhatsApp clicks
    window.__boltTrack('whatsapp_click');
    
    // Open WhatsApp with a pre-filled message
    window.open(
      'https://wa.me/962790000000?text=Hi,%20I%20would%20like%20to%20learn%20more%20about%20your%20AI%20voice%20solutions.',
      '_blank'
    );
  };
  
  return (
    <motion.button
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300"
      onClick={handleWhatsAppClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      aria-label="Contact us on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    </motion.button>
  );
}