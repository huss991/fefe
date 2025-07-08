"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageProvider';
import { motion } from 'framer-motion';

interface NavbarProps {
  onContactClick: () => void;
}

export function Navbar({ onContactClick }: NavbarProps) {
  const { t, setLanguage, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };
  
  const navLinks = [
    { name: t('home'), href: '#' },
    { name: t('services'), href: '#services' },
    { name: t('pricing'), href: '#pricing' },
    { name: t('contact'), onClick: onContactClick },
  ];
  
  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0B1F3F]/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="https://i.postimg.cc/J4xQ6XqZ/openart-9d89a809-14e1-4518-8396-cb5c1ea744ee.png"
              alt="Genesis AI Logo"
              width={160}
              height={160}
              className="h-16 w-auto"
              priority
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={link.onClick}
                className="text-gray-200 hover:text-[#14D8FF] px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={toggleLanguage}
              variant="outline"
              className="ml-4 border-[#14D8FF] text-[#14D8FF] hover:bg-[#14D8FF] hover:text-white"
            >
              {t('language')}
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-[#14D8FF] hover:bg-gray-800/50 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>
      
      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0B1F3F]/90 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  if (link.onClick) {
                    link.onClick();
                  }
                  setIsOpen(false);
                }}
                className="text-gray-200 hover:text-[#14D8FF] block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              variant="outline"
              className="w-full mt-4 border-[#14D8FF] text-[#14D8FF] hover:bg-[#14D8FF] hover:text-white"
            >
              {t('language')}
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}