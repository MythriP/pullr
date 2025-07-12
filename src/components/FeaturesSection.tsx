'use client';

import { motion } from 'framer-motion';
import { Brain, Target, Zap, Users, Sparkles, Shield, Clock, TrendingUp } from 'lucide-react';

interface FeaturesSectionProps {
    mode: 'jobseeker' | 'recruiter';
}

export default function FeaturesSection({ mode }: FeaturesSectionProps) {
    const primaryColor = mode === 'jobseeker' ? '#1E40AF' : '#991B1B';
    const backgroundColor = mode === 'jobseeker' ? '#F8FAFC' : '#FAFAFA';

    const jobseekerFeatures = [
        {
            icon: Brain,
            title: "Smart Portfolio Builder",
            description: "Create stunning, interactive portfolios that showcase your real work and achievements. No coding required."
        },
        {
            icon: Target,
            title: "Targeted Matching",
            description: "Get matched with opportunities that align with your skills, experience, and career goals."
        },
        {
            icon: Zap,
            title: "Instant Notifications",
            description: "Be the first to know when recruiters view your profile or when perfect opportunities become available."
        },
        {
            icon: Users,
            title: "Community Support",
            description: "Connect with like-minded professionals, share experiences, and grow together in our supportive community."
        },
        {
            icon: TrendingUp,
            title: "Career Growth Analytics",
            description: "Track your progress, identify skill gaps, and get personalized recommendations for career advancement."
        },
        {
            icon: Shield,
            title: "Privacy Control",
            description: "You decide what information to share and with whom. Your data, your control, always."
        }
    ];

    const recruiterFeatures = [
        {
            icon: Brain,
            title: "AI-Powered Search",
            description: "Find the perfect candidates using advanced AI that understands skills, experience, and cultural fit."
        },
        {
            icon: Target,
            title: "Precision Matching",
            description: "Get highly relevant candidate suggestions based on your specific requirements and company culture."
        },
        {
            icon: Clock,
            title: "Time-Saving Tools",
            description: "Streamline your hiring process with automated screening, scheduling, and candidate management."
        },
        {
            icon: Users,
            title: "Team Collaboration",
            description: "Work seamlessly with your hiring team, share feedback, and make informed decisions together."
        },
        {
            icon: Sparkles,
            title: "Quality Candidates",
            description: "Access a curated pool of pre-vetted professionals who are serious about their careers."
        },
        {
            icon: TrendingUp,
            title: "Hiring Analytics",
            description: "Track your hiring metrics, analyze trends, and continuously improve your recruitment strategy."
        }
    ];

    const currentFeatures = mode === 'jobseeker' ? jobseekerFeatures : recruiterFeatures;

    return (
        <section className="py-24 relative" style={{ backgroundColor }}>
            {/* Simple background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: primaryColor }}>
                        Built for <span className="text-slate-900">{mode === 'jobseeker' ? 'Talent' : 'Recruiters'}</span>
                    </h2>
                    <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                        {mode === 'jobseeker'
                            ? "Everything you need to showcase your skills and land your dream job."
                            : "Powerful tools to find, evaluate, and hire the best talent efficiently."
                        }
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="card hover:shadow-lg transition-all duration-300 relative bg-white border border-slate-200 rounded-2xl p-8 h-full">
                                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl shadow-md" style={{ backgroundColor: `${primaryColor}15` }}>
                                    <feature.icon className="w-8 h-8" style={{ color: primaryColor }} />
                                </div>
                                <h3 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>
                                    {feature.title}
                                </h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 bg-white">
                        <Sparkles className="w-5 h-5" style={{ color: primaryColor }} />
                        <span className="font-medium" style={{ color: primaryColor }}>
                            Powered by AI • Designed for Humans
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 