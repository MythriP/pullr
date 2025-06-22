'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';

interface HeroSectionProps {
    mode: 'jobseeker' | 'recruiter';
}

export default function HeroSection({ mode }: HeroSectionProps) {
    const content = {
        jobseeker: {
            badge: '💚 For Talent',
            headline: 'Stop Applying.\nStart Getting Found.',
            subheadline: 'Build your killer portfolio. Let dream jobs discover YOU. Join the revolution where talent gets the spotlight.',
            cta: 'Build My Portfolio',
            stats: [
                { number: '50K+', label: 'Creators Found' },
                { number: '2.3x', label: 'Faster Hiring' },
                { number: '89%', label: 'Success Rate' }
            ]
        },
        recruiter: {
            badge: '🧡 For Recruiters',
            headline: 'Find Hidden Gems.\nSkip The Noise.',
            subheadline: 'Discover authentic portfolios. See real skills, not polished resumes. Hire faster with AI-powered matching.',
            cta: 'Start Discovering',
            stats: [
                { number: '10K+', label: 'Companies Trust Us' },
                { number: '3.5x', label: 'Better Matches' },
                { number: '76%', label: 'Time Saved' }
            ]
        }
    };

    const currentContent = content[mode];

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Pulse Effect */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary opacity-5 blur-3xl pulse-glow"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent opacity-5 blur-3xl pulse-glow" style={{ animationDelay: '1.5s' }}></div>
            </div>

            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="text-center max-w-5xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card mb-8 group cursor-pointer"
                    >
                        <motion.span
                            className="text-sm font-semibold text-primary"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {currentContent.badge}
                        </motion.span>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="text-primary"
                        >
                            <Sparkles size={16} />
                        </motion.div>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-huge font-black mb-8 leading-none"
                    >
                        {currentContent.headline.split('\n').map((line, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                            >
                                {line}
                                {index === 0 && (
                                    <motion.span
                                        className="text-primary inline-block ml-4"
                                        animate={{
                                            rotate: [0, 10, -10, 0],
                                            scale: [1, 1.1, 1]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 2
                                        }}
                                    >
                                        {mode === 'jobseeker' ? <Target size={60} /> : <Zap size={60} />}
                                    </motion.span>
                                )}
                            </motion.div>
                        ))}
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-xl text-muted mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        {currentContent.subheadline}
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="mb-16"
                    >
                        <motion.button
                            className="btn-primary group relative overflow-hidden"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: mode === 'jobseeker'
                                    ? '0 0 50px rgba(143, 188, 143, 0.4)'
                                    : '0 0 50px rgba(212, 175, 140, 0.4)'
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                {currentContent.cta}
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <ArrowRight size={20} />
                                </motion.div>
                            </span>

                            {/* Button Glow Effect */}
                            <motion.div
                                className="absolute inset-0 bg-white opacity-0 rounded-full"
                                whileHover={{ opacity: 0.1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
                    >
                        {currentContent.stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                                className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300"
                                whileHover={{ y: -10 }}
                            >
                                <motion.div
                                    className="text-4xl font-black text-primary mb-2"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.5
                                    }}
                                >
                                    {stat.number}
                                </motion.div>
                                <div className="text-muted font-medium">{stat.label}</div>

                                {/* Stat Card Glow */}
                                <motion.div
                                    className="absolute inset-0 bg-primary opacity-0 rounded-3xl blur-xl"
                                    whileHover={{ opacity: 0.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                    <motion.div
                        className="w-1 h-3 bg-primary rounded-full mt-2"
                        animate={{
                            height: [12, 6, 12],
                            opacity: [1, 0.5, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
} 