'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import WhyUsSection from '@/components/WhyUsSection';
import FeaturesSection from '@/components/FeaturesSection';
import CommunityCTASection from '@/components/CommunityCTASection';
import Footer from '@/components/Footer';
import ModeToggle from '@/components/ModeToggle';

export default function Home() {
  const [mode, setMode] = useState<'jobseeker' | 'recruiter'>('jobseeker');

  return (
    <div className={`min-h-screen ${mode === 'jobseeker' ? 'theme-jobseeker' : 'theme-recruiter'} relative`}>
      {/* Animated Background */}
      <div className="animated-bg"></div>

      {/* Floating Particles */}
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Interactive Orbs */}
      <div className="interactive-orb" style={{ top: '10%', left: '5%' }}></div>
      <div className="interactive-orb" style={{ top: '60%', right: '10%', animationDelay: '2s' }}></div>
      <div className="interactive-orb" style={{ bottom: '20%', left: '15%', animationDelay: '4s' }}></div>

      {/* Mode Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ModeToggle mode={mode} onModeChange={setMode} />
      </div>

      {/* Main Content */}
      <motion.main
        key={mode}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10"
      >
        <HeroSection mode={mode} />
        <WhyUsSection mode={mode} />
        <FeaturesSection mode={mode} />
        {mode === 'jobseeker' && <CommunityCTASection />}
        <Footer mode={mode} />
      </motion.main>
    </div>
  );
}
