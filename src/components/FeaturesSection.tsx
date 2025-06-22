'use client';

import { motion } from 'framer-motion';
import {
    Code,
    Zap,
    Users,
    Eye,
    Shield,
    TrendingUp,
    Brain,
    Sparkles,
    Rocket,
    Target
} from 'lucide-react';

interface FeaturesSectionProps {
    mode: 'jobseeker' | 'recruiter';
}

export default function FeaturesSection({ mode }: FeaturesSectionProps) {
    const content = {
        jobseeker: {
            badge: '✨ Features for Creators',
            title: 'Your Portfolio,\nYour Rules',
            subtitle: 'Build once, impress forever. Tools that grow with your career.',
            features: [
                {
                    icon: Code,
                    title: 'Live Project Showcase',
                    description: 'Display your work with interactive demos. Let recruiters see your skills in action.',
                    stats: '2.5x more views',
                    color: 'from-green-500 to-emerald-400'
                },
                {
                    icon: TrendingUp,
                    title: 'Growth Analytics',
                    description: 'Track portfolio views, skill ratings, and industry interest over time.',
                    stats: '89% accuracy',
                    color: 'from-emerald-500 to-teal-400'
                },
                {
                    icon: Zap,
                    title: 'Smart Skill Matching',
                    description: 'AI analyzes your projects and matches you with relevant opportunities automatically.',
                    stats: '3x faster discovery',
                    color: 'from-teal-500 to-cyan-400'
                },
                {
                    icon: Shield,
                    title: 'Privacy Controls',
                    description: 'Choose who sees what. Full control over your professional visibility.',
                    stats: '100% secure',
                    color: 'from-green-600 to-green-400'
                }
            ]
        },
        recruiter: {
            badge: '🎯 Tools for Recruiters',
            title: 'Find Talent That\nActually Fits',
            subtitle: 'Beyond resumes. Real skills, real portfolios, real results.',
            features: [
                {
                    icon: Brain,
                    title: 'AI-Powered Matching',
                    description: 'Advanced algorithms match candidates based on actual skill demonstrations.',
                    stats: '94% match accuracy',
                    color: 'from-amber-500 to-orange-400'
                },
                {
                    icon: Eye,
                    title: 'Portfolio Deep Dive',
                    description: 'See real work, not just claims. Evaluate skills through live projects.',
                    stats: '5x better insights',
                    color: 'from-orange-500 to-red-400'
                },
                {
                    icon: Users,
                    title: 'Talent Pipeline',
                    description: 'Build relationships with emerging talent before they hit the market.',
                    stats: '60% earlier access',
                    color: 'from-red-500 to-pink-400'
                },
                {
                    icon: Rocket,
                    title: 'Instant Connect',
                    description: 'Direct communication tools. Skip the middleman, start conversations.',
                    stats: '40% faster hiring',
                    color: 'from-amber-600 to-amber-400'
                }
            ]
        }
    };

    const currentContent = content[mode];

    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-primary opacity-3 blur-3xl pulse-glow"></div>
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-accent opacity-3 blur-3xl pulse-glow" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card mb-8 group"
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
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            className="text-primary"
                        >
                            <Sparkles size={16} />
                        </motion.div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-big font-black mb-6 leading-tight"
                    >
                        {currentContent.title.split('\n').map((line, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                            >
                                {line}
                            </motion.div>
                        ))}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl text-muted max-w-2xl mx-auto"
                    >
                        {currentContent.subtitle}
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {currentContent.features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.2,
                                ease: "easeOut"
                            }}
                            className="group"
                        >
                            <div className="feature-card h-full relative">
                                {/* Card Background Glow */}
                                <motion.div
                                    className="absolute inset-0 bg-primary opacity-0 rounded-3xl blur-xl"
                                    whileHover={{ opacity: 0.03 }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Icon Container */}
                                <motion.div
                                    className="relative mb-8"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                        <motion.div
                                            animate={{
                                                rotate: [0, 5, -5, 0],
                                                scale: [1, 1.05, 1]
                                            }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: index * 0.5
                                            }}
                                        >
                                            <feature.icon className="text-primary" size={32} />
                                        </motion.div>
                                    </div>

                                    {/* Stats Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                        className="absolute -top-2 -right-2 px-3 py-1 bg-primary text-black text-xs font-bold rounded-full pulse-glow"
                                    >
                                        {feature.stats}
                                    </motion.div>
                                </motion.div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <motion.h3
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                        className="text-2xl font-bold group-hover:text-primary transition-colors duration-300"
                                    >
                                        {feature.title}
                                    </motion.h3>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                        className="text-muted leading-relaxed"
                                    >
                                        {feature.description}
                                    </motion.p>
                                </div>

                                {/* Hover Effect Lines */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-20"
                >
                    <motion.div
                        className="inline-flex items-center gap-3 px-8 py-4 glass-card group cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Target className="text-primary" size={20} />
                        <span className="font-semibold">
                            {mode === 'jobseeker' ? 'Start Building Your Portfolio' : 'Discover Top Talent'}
                        </span>
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Rocket className="text-primary" size={20} />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
} 