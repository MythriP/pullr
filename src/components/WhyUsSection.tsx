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
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Pullr?</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            We&apos;re revolutionizing how talented people connect with opportunities.
                            No more job board scrolling, no more application black holes.
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
                                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                                    <feature.icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Pullr?</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Tired of sifting through hundreds of generic resumes?
                        We&apos;re changing how you discover and connect with genuine talent.
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
                            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl group-hover:from-orange-200 group-hover:to-red-200 transition-all duration-300">
                                <feature.icon className="w-8 h-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
} 