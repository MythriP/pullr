'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, Briefcase, TrendingUp } from 'lucide-react';

interface HeroSectionProps {
    mode: 'jobseeker' | 'recruiter';
}

export default function HeroSection({ mode }: HeroSectionProps) {
    const content = {
        jobseeker: {
            headline: 'Build Your Portfolio.\nGet Discovered.',
            subheadline: 'Pullr is the platform where talent creates portfolios and gets discovered by companies. No more endless applications.',
            cta: 'Create Your Portfolio',
            demo: 'See How It Works',
            stats: [
                { number: '50K+', label: 'Active Creators', icon: Users },
                { number: '2.3x', label: 'Faster Hiring', icon: TrendingUp },
                { number: '89%', label: 'Success Rate', icon: Briefcase }
            ]
        },
        recruiter: {
            headline: 'Discover Hidden Talent.\nHire Faster.',
            subheadline: 'Find authentic portfolios, see real skills, and connect with talent that matches your needs. Skip the resume pile.',
            cta: 'Start Discovering',
            demo: 'View Demo',
            stats: [
                { number: '10K+', label: 'Companies', icon: Briefcase },
                { number: '3.5x', label: 'Better Matches', icon: TrendingUp },
                { number: '76%', label: 'Time Saved', icon: Users }
            ]
        }
    };

    const currentContent = content[mode];
    const primaryColor = mode === 'jobseeker' ? '#1E40AF' : '#991B1B';
    const backgroundColor = mode === 'jobseeker' ? '#F8FAFC' : '#FAFAFA';

    return (
        <section className="min-h-screen relative" style={{ backgroundColor }}>
            {/* Simple background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100"></div>

            <div className="max-w-7xl mx-auto px-6 pt-8 pb-16 relative z-10">
                {/* Simple Logo */}
                <motion.div
                    className="flex justify-center mb-16"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <svg
                        width="120"
                        height="120"
                        viewBox="0 0 120 120"
                        fill="none"
                        className="relative z-10"
                    >
                        <rect x="20" y="20" width="25" height="80" fill={primaryColor} />
                        <rect x="20" y="20" width="50" height="25" fill={primaryColor} />
                        <rect x="20" y="50" width="35" height="20" fill={primaryColor} />
                        <rect x="70" y="20" width="30" height="30" fill={primaryColor} />
                        <rect x="70" y="55" width="30" height="25" fill={primaryColor} />
                    </svg>
                </motion.div>

                {/* Main Content */}
                <div className="text-center mb-20">
                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-huge font-bold mb-8 leading-tight"
                        style={{ color: primaryColor }}
                    >
                        {currentContent.headline.split('\n').map((line, index) => (
                            <div key={index}>{line}</div>
                        ))}
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-slate-700"
                    >
                        {currentContent.subheadline}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
                    >
                        <button
                            className="px-8 py-4 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
                            style={{ backgroundColor: primaryColor }}
                        >
                            {currentContent.cta}
                            <ArrowRight size={20} />
                        </button>

                        <button
                            className="px-8 py-4 font-semibold rounded-2xl transition-all duration-300 hover:scale-105 border-2 bg-white flex items-center gap-2"
                            style={{ color: primaryColor, borderColor: primaryColor }}
                        >
                            <Play size={18} />
                            {currentContent.demo}
                        </button>
                    </motion.div>
                </div>

                {/* Demo Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mb-24"
                >
                    <div className="card max-w-4xl mx-auto">
                        <div className="rounded-xl h-80 flex items-center justify-center bg-white border border-slate-200">
                            <div className="text-center">
                                <div
                                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                                    style={{ backgroundColor: `${primaryColor}15` }}
                                >
                                    <Play className="w-10 h-10" style={{ color: primaryColor }} />
                                </div>
                                <p className="font-semibold text-lg mb-2" style={{ color: primaryColor }}>
                                    Interactive Demo Coming Soon
                                </p>
                                <p className="text-sm text-slate-600">
                                    See how {mode === 'jobseeker' ? 'talent builds portfolios' : 'recruiters discover talent'}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto"
                >
                    {currentContent.stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                            className="text-center group"
                        >
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all hover:scale-110"
                                style={{ backgroundColor: `${primaryColor}15` }}
                            >
                                <stat.icon size={28} style={{ color: primaryColor }} />
                            </div>
                            <div className="text-4xl font-bold mb-3" style={{ color: primaryColor }}>
                                {stat.number}
                            </div>
                            <div className="font-medium text-slate-600">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
} 