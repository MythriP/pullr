'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import WhyUsSection from '@/components/WhyUsSection';
import FAQSection from '@/components/FAQSection';
import CommunityCTASection from '@/components/CommunityCTASection';
import Footer from '@/components/Footer';
import ModeToggle from '@/components/ModeToggle';
import Navigation from '@/components/Navigation';

export default function Home() {
  const [mode, setMode] = useState<'jobseeker' | 'recruiter'>('jobseeker');

  return (
    <div className={`min-h-screen relative transition-all duration-500 ${mode === 'jobseeker' ? 'theme-jobseeker' : 'theme-recruiter'
      }`}>
      {/* Navigation */}
      <Navigation mode={mode} />

      {/* Mode Toggle - Aligned with navbar */}
      <div className="fixed top-4 right-6 z-50">
        <ModeToggle mode={mode} onModeChange={setMode} />
      </div>

      {/* Main Content */}
      <motion.main
        key={mode}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pt-20"
      >
        <HeroSection mode={mode} />
        <FeaturesSection mode={mode} />
        <WhyUsSection mode={mode} />
        <FAQSection mode={mode} />
        {mode === 'jobseeker' && <CommunityCTASection />}
        <Footer mode={mode} />
      </motion.main>
    </div>
  );
}
