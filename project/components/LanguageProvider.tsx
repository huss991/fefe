"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type LanguageContextType = {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
  dir: 'ltr' | 'rtl';
  t: (key: string) => string;
};

const translations = {
  en: {
    // Navbar
    'home': 'Home',
    'services': 'Services',
    'pricing': 'Pricing',
    'contact': 'Contact',
    'language': 'العربية',
    
    // Hero
    'hero-title': 'Genesis AI',
    'hero-subtitle': 'Wave Goodbye to Manual Tasks—Hello to Human-Tone Agents With Machine-Grade Speed',
    'book-demo': 'Book a 15-min Demo',
    'learn-more': 'Learn More',
    
    // Pain Points
    'pain-points-title': 'Why Automation Matters',
    'pain-point-1-title': '43% Missed Calls',
    'pain-point-1-desc': 'restaurant calls go unanswered during peak hours',
    'pain-point-2-title': '90% Bilingual Preference',
    'pain-point-2-desc': 'of diners want service in both Arabic and English',
    'pain-point-3-title': 'PDPL Compliance',
    'pain-point-3-desc': 'fines up to 50K JD for non-compliance',
    
    // How It Works
    'how-it-works-title': 'How It Works',
    'step-1-title': 'Capture Audio',
    'step-1-desc': 'Our AI answers calls in natural Arabic or English',
    'step-2-title': 'GPT-4o Reasoning',
    'step-2-desc': 'Advanced AI understands context and intent',
    'step-3-title': 'POS Integration',
    'step-3-desc': 'Orders sent directly to your system in seconds',
    
    // Services
    'services-title': 'Our Services',
    'service-1-title': 'Voice Agents',
    'service-1-desc': 'Bilingual voice bots that handle calls, bookings, and orders',
    'service-2-title': 'Chat & WhatsApp Bots',
    'service-2-desc': 'Instant responses to customer queries on all channels',
    'service-3-title': 'RPA + ERP Hooks',
    'service-3-desc': 'Seamless integration with your existing systems',
    'service-4-title': 'Analytics & Forecasting',
    'service-4-desc': 'Data-driven insights to optimize your operations',
    
    // Pricing
    'pricing-title': 'Simple, Transparent Pricing',
    'starter': 'Starter',
    'growth': 'Growth',
    'enterprise': 'Enterprise',
    'starter-price': '299 JD',
    'growth-price': '599 JD',
    'enterprise-price': 'Custom',
    'per-month': '/month',
    'setup-fee': '+ one-time setup',
    'get-started': 'Get Started',
    'contact-us': 'Contact Us',
    
    // Compliance
    'compliance-title': 'Enterprise-Grade Security',
    'hosted-in': 'Hosted in Umniah Tier III Data Center, Amman',
    'pdpl-ready': 'Jordan PDPL Compliant',
    'pci-dss': 'PCI-DSS Payment Redaction',
    
    // Contact Form
    'contact-title': 'Book Your Demo',
    'contact-subtitle': 'See how our AI voice agents can transform your business',
    'name': 'Full Name',
    'email': 'Email Address',
    'phone': 'Phone Number',
    'company': 'Company',
    'industry': 'Industry',
    'message': 'Message (Optional)',
    'submit': 'Request Demo',
    'required': 'Required field',
    'select-industry': 'Select your industry',
    'food-beverage': 'Food & Beverage',
    'retail': 'Retail',
    'healthcare': 'Healthcare',
    'hospitality': 'Hospitality',
    'financial': 'Financial Services',
    'other': 'Other',
    'success-message': 'Thank you! We will contact you shortly.',
    
    // Footer
    'company': 'Company',
    'about': 'About Us',
    'careers': 'Careers',
    'blog': 'Blog',
    'legal': 'Legal',
    'privacy': 'Privacy Policy',
    'terms': 'Terms of Service',
    'cookies': 'Cookie Policy',
    'copyright': '© 2025 Genesis AI. All rights reserved.',
  },
  ar: {
    // Navbar
    'home': 'الرئيسية',
    'services': 'خدماتنا',
    'pricing': 'الأسعار',
    'contact': 'اتصل بنا',
    'language': 'English',
    
    // Hero
    'hero-title': 'جينيسيس للذكاء الاصطناعي',
    'hero-subtitle': 'ودّع المهام اليدوية — وأهلاً بوكلاء بلمسة إنسانية وسرعة الآلة',
    'book-demo': 'احجز عرضاً لمدة 15 دقيقة',
    'learn-more': 'اعرف المزيد',
    
    // Pain Points
    'pain-points-title': 'لماذا الأتمتة مهمة',
    'pain-point-1-title': '43% من المكالمات',
    'pain-point-1-desc': 'تبقى بدون رد خلال ساعات الذروة في المطاعم',
    'pain-point-2-title': '90% يفضلون',
    'pain-point-2-desc': 'الخدمة باللغتين العربية والإنجليزية',
    'pain-point-3-title': 'الامتثال للـ PDPL',
    'pain-point-3-desc': 'غرامات تصل إلى 50 ألف دينار أردني',
    
    // How It Works
    'how-it-works-title': 'كيف يعمل النظام',
    'step-1-title': 'التقاط الصوت',
    'step-1-desc': 'يرد الذكاء الاصطناعي على المكالمات بلغة عربية أو إنجليزية طبيعية',
    'step-2-title': 'معالجة GPT-4o',
    'step-2-desc': 'يفهم الذكاء الاصطناعي المتقدم السياق والقصد',
    'step-3-title': 'تكامل نقاط البيع',
    'step-3-desc': 'ترسل الطلبات مباشرة إلى نظامك في غضون ثوانٍ',
    
    // Services
    'services-title': 'خدماتنا',
    'service-1-title': 'الوكلاء الصوتيون',
    'service-1-desc': 'روبوتات صوتية ثنائية اللغة تتعامل مع المكالمات والحجوزات والطلبات',
    'service-2-title': 'روبوتات الدردشة وواتساب',
    'service-2-desc': 'ردود فورية على استفسارات العملاء على جميع القنوات',
    'service-3-title': 'تكامل RPA و ERP',
    'service-3-desc': 'تكامل سلس مع أنظمتك الحالية',
    'service-4-title': 'التحليلات والتنبؤ',
    'service-4-desc': 'رؤى قائمة على البيانات لتحسين عملياتك',
    
    // Pricing
    'pricing-title': 'أسعار بسيطة وشفافة',
    'starter': 'المبتدئ',
    'growth': 'النمو',
    'enterprise': 'المؤسسات',
    'starter-price': '299 دينار',
    'growth-price': '599 دينار',
    'enterprise-price': 'مخصص',
    'per-month': '/شهرياً',
    'setup-fee': '+ رسوم إعداد لمرة واحدة',
    'get-started': 'ابدأ الآن',
    'contact-us': 'اتصل بنا',
    
    // Compliance
    'compliance-title': 'أمان بمستوى المؤسسات',
    'hosted-in': 'مستضاف في مركز بيانات أمنية من المستوى الثالث، عمّان',
    'pdpl-ready': 'متوافق مع قانون PDPL الأردني',
    'pci-dss': 'تنقيح المدفوعات وفق معيار PCI-DSS',
    
    // Contact Form
    'contact-title': 'احجز عرضك التوضيحي',
    'contact-subtitle': 'اكتشف كيف يمكن لوكلائنا الصوتيين تحويل أعمالك',
    'name': 'الاسم الكامل',
    'email': 'البريد الإلكتروني',
    'phone': 'رقم الهاتف',
    'company': 'الشركة',
    'industry': 'القطاع',
    'message': 'الرسالة (اختياري)',
    'submit': 'طلب عرض توضيحي',
    'required': 'حقل مطلوب',
    'select-industry': 'اختر قطاعك',
    'food-beverage': 'المطاعم والمشروبات',
    'retail': 'التجزئة',
    'healthcare': 'الرعاية الصحية',
    'hospitality': 'الضيافة',
    'financial': 'الخدمات المالية',
    'other': 'أخرى',
    'success-message': 'شكراً لك! سنتواصل معك قريباً.',
    
    // Footer
    'company': 'الشركة',
    'about': 'من نحن',
    'careers': 'وظائف',
    'blog': 'المدونة',
    'legal': 'القانونية',
    'privacy': 'سياسة الخصوصية',
    'terms': 'شروط الخدمة',
    'cookies': 'سياسة ملفات تعريف الارتباط',
    'copyright': '© 2025 جينيسيس للذكاء الاصطناعي. جميع الحقوق محفوظة.',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  dir: 'ltr',
  t: () => '',
});

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  
  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    
    setIsTransitioning(true);
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [dir, language]);
  
  useEffect(() => {
    const detectBrowserLanguage = () => {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'ar') {
        setLanguage('ar');
      }
    };
    
    const storedLang = localStorage.getItem('language');
    if (storedLang === 'ar' || storedLang === 'en') {
      setLanguage(storedLang);
    } else {
      detectBrowserLanguage();
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);
  
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}