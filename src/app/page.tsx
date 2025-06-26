'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import WhyUsSection from '@/components/WhyUsSection';
import FeaturesSection from '@/components/FeaturesSection';
import FAQSection from '@/components/FAQSection';
import CommunityCTASection from '@/components/CommunityCTASection';
import Footer from '@/components/Footer';
import ModeToggle from '@/components/ModeToggle';

export default function Home() {
  const [mode, setMode] = useState<'jobseeker' | 'recruiter'>('jobseeker');

  return (
    <div className="min-h-screen bg-white relative">
      {/* Mode Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ModeToggle mode={mode} onModeChange={setMode} />
      </div>

      {/* Main Content */}
      <motion.main
        key={mode}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSection mode={mode} />
        <FeaturesSection mode={mode} />
        <FAQSection mode={mode} />
        {mode === 'jobseeker' && <CommunityCTASection />}
        <Footer mode={mode} />
      </motion.main>
    </div>
  );
}
