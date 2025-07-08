"use client";

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { PurposePromise } from '@/components/sections/PurposePromise';
import { PainPoints } from '@/components/sections/PainPoints';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Services } from '@/components/sections/Services';
import { Pricing } from '@/components/sections/Pricing';
import { ComplianceBanner } from '@/components/sections/ComplianceBanner';
import { ContactDialog } from '@/components/sections/ContactDialog';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  return (
    <main className="min-h-screen relative">
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      
      <Hero />
      
      <PurposePromise />
      
      <PainPoints />
      
      <HowItWorks />
      
      <Services />
      
      <Pricing />
      
      <ComplianceBanner />
      
      <ContactDialog 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      
      <Footer />
      
      <WhatsAppButton />
    </main>
  );
}