'use client';

import { motion } from 'framer-motion';
import { Target, Zap, Shield, TrendingUp, Search, Clock } from 'lucide-react';

interface WhyUsSectionProps {
    mode: 'jobseeker' | 'recruiter';
}

export default function WhyUsSection({ mode }: WhyUsSectionProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    if (mode === 'jobseeker') {
        const features = [
            {
                icon: Target,
                title: "No Resume Tailoring",
                description: "Build one dynamic portfolio that showcases everything. No more tweaking resumes for every single application."
            },
            {
                icon: TrendingUp,
                title: "Dynamic Portfolio Builder",
                description: "Your portfolio evolves as you grow. Add projects, skills, and achievements that tell your real story."
            },
            {
                icon: Search,
                title: "Get Discovered by Real Recruiters",
                description: "Quality recruiters find you based on your actual work and skills, not keyword matching games."
            },
            {
                icon: Zap,
                title: "Career Growth Tips & Nudges",
                description: "Get personalized suggestions, skill recommendations, and career guidance tailored to your goals."
            }
        ];

        return (
            <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
                {/* Simple background with blue and slight black gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            <span className="text-blue-900">
                                Why Choose <span className="text-slate-900">Pullr?</span>
                            </span>
                        </h2>
                        <p className="text-xl text-blue-800 max-w-3xl mx-auto leading-relaxed">
                            We're revolutionizing how talented people connect with opportunities.
                            <span className="block mt-2 text-slate-800 font-medium">
                                No more job board scrolling, no more application black holes.
                            </span>
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="text-center group"
                            >
                                <div className="relative p-8 h-full bg-white rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                                    <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-slate-800 rounded-2xl shadow-md">
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 text-blue-900">
                                        {feature.title}
                                    </h3>
                                    <p className="text-blue-700 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        );
    }

    const features = [
        {
            icon: Shield,
            title: "No Buzzword Stuffing",
            description: "See authentic portfolios that showcase real work, skills, and achievements—not keyword-optimized resumes."
        },
        {
            icon: Target,
            title: "Portfolios > Resumes",
            description: "Candidates can't fake skills when they have to show actual projects and results. Quality over quantity."
        },
        {
            icon: Clock,
            title: "No Bot-Spammed Applications",
            description: "Only genuine candidates who've invested time in building meaningful portfolios. Save time on screening."
        },
        {
            icon: Search,
            title: "Smart Talent Discovery",
            description: "Our algorithm surfaces top talent based on actual skills and project quality, not just keywords."
        }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
            {/* Simple background with maroon and slight black gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-slate-50"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                        <span className="text-red-900">
                            Why Choose <span className="text-slate-900">Pullr?</span>
                        </span>
                    </h2>
                    <p className="text-xl text-red-800 max-w-3xl mx-auto leading-relaxed">
                        We're revolutionizing how smart recruiters find exceptional talent.
                        <span className="block mt-2 text-slate-800 font-medium">
                            No more resume spam, no more keyword guessing games.
                        </span>
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="text-center group"
                        >
                            <div className="relative p-8 h-full bg-white rounded-2xl border border-red-200 hover:border-red-300 transition-all duration-300 hover:shadow-lg">
                                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-slate-800 rounded-2xl shadow-md">
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-red-900">
                                    {feature.title}
                                </h3>
                                <p className="text-red-700 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
} 