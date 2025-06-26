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

    return (
        <section className="min-h-screen bg-white relative">
            {/* Clean Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
                {/* Main Content */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border ${mode === 'jobseeker'
                            ? 'border-yellow-200 bg-yellow-50 text-yellow-800'
                            : 'border-blue-200 bg-blue-50 text-blue-800'
                            }`}
                    >
                        <span className="text-sm font-medium">
                            {mode === 'jobseeker' ? '💛' : '💙'}
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                    >
                        {currentContent.headline.split('\n').map((line, index) => (
                            <div key={index} className={index === 1 ? (mode === 'jobseeker' ? 'text-yellow-600' : 'text-blue-600') : ''}>
                                {line}
                            </div>
                        ))}
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        {currentContent.subheadline}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                    >
                        <button className={`px-8 py-4 rounded-lg font-semibold text-white flex items-center gap-3 transition-all hover:scale-105 ${mode === 'jobseeker'
                            ? 'bg-yellow-600 hover:bg-yellow-700'
                            : 'bg-blue-600 hover:bg-blue-700'
                            }`}>
                            {currentContent.cta}
                            <ArrowRight size={20} />
                        </button>

                        <button className="px-8 py-4 border border-gray-300 rounded-lg font-semibold text-gray-700 flex items-center gap-3 hover:bg-gray-50 transition-all">
                            <Play size={18} />
                            {currentContent.demo}
                        </button>
                    </motion.div>
                </div>

                {/* Demo/Preview Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mb-20"
                >
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-12">
                        <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                            <div className="text-center">
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${mode === 'jobseeker' ? 'bg-yellow-100' : 'bg-blue-100'
                                    }`}>
                                    <Play className={`w-8 h-8 ${mode === 'jobseeker' ? 'text-yellow-600' : 'text-blue-600'
                                        }`} />
                                </div>
                                <p className="text-gray-500 font-medium">Interactive Demo Coming Soon</p>
                                <p className="text-sm text-gray-400">See how {mode === 'jobseeker' ? 'talent builds portfolios' : 'recruiters discover talent'}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {currentContent.stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                            className="text-center group"
                        >
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all group-hover:scale-110 ${mode === 'jobseeker'
                                ? 'bg-yellow-100 text-yellow-600'
                                : 'bg-blue-100 text-blue-600'
                                }`}>
                                <stat.icon size={24} />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-600 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="text-sm text-gray-400 font-medium">
                        Scroll to explore
                    </div>
                    <div className={`w-0.5 h-6 rounded-full ${mode === 'jobseeker' ? 'bg-yellow-400' : 'bg-blue-400'
                        }`} />
                </motion.div>
            </div>
        </section>
    );
} 