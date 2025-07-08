"use client";

import { Zap } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-[#0B1F3F] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-[#14D8FF]" />
              <span className="ml-dir-2 text-xl font-bold">AI Voice</span>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              {t('hero-subtitle')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse mt-6">
              <a href="#" className="text-gray-300 hover:text-[#14D8FF]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#14D8FF]">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#14D8FF]">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#14D8FF]">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Company links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('company')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#14D8FF] text-sm">
                  {t('about')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#14D8FF] text-sm">
                  {t('careers')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#14D8FF] text-sm">
                  {t('blog')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('legal')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#14D8FF] text-sm">
                  {t('privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#14D8FF] text-sm">
                  {t('terms')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#14D8FF] text-sm">
                  {t('cookies')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact')}</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">
                contact@ai-voice-agency.com
              </li>
              <li className="text-gray-300 text-sm">
                +962 6 000 0000
              </li>
              <li className="text-gray-300 text-sm">
                King Hussein Business Park
                <br />
                Amman, Jordan
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}