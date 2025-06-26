'use client';

import { motion } from 'framer-motion';
import { Palette, Users, Zap, Target, Globe, Shield } from 'lucide-react';

interface FeaturesSectionProps {
    mode: 'jobseeker' | 'recruiter';
}

export default function FeaturesSection({ mode }: FeaturesSectionProps) {
    const features = {
        jobseeker: [
            {
                icon: Palette,
                title: 'Build Your Portfolio',
                description: 'Create stunning portfolios that showcase your work, skills, and personality. No design skills needed.'
            },
            {
                icon: Zap,
                title: 'Get Discovered Fast',
                description: 'Our AI matches your skills with the right opportunities. Companies find you, not the other way around.'
            },
            {
                icon: Target,
                title: 'Precise Matching',
                description: 'Get matched with roles that actually fit your skills, interests, and career goals.'
            },
            {
                icon: Users,
                title: 'Join The Community',
                description: 'Connect with other creators, share work, get feedback, and grow your professional network.'
            },
            {
                icon: Globe,
                title: 'Global Reach',
                description: 'Access opportunities from companies worldwide. Work remotely or find local positions.'
            },
            {
                icon: Shield,
                title: 'Privacy First',
                description: 'Control who sees your portfolio. Share only with companies you\'re interested in.'
            }
        ],
        recruiter: [
            {
                icon: Users,
                title: 'Discover Real Talent',
                description: 'Browse authentic portfolios and see actual work, not just polished resumes.'
            },
            {
                icon: Zap,
                title: 'AI-Powered Matching',
                description: 'Our smart algorithms find candidates that match your exact requirements and company culture.'
            },
            {
                icon: Target,
                title: 'Precise Filtering',
                description: 'Filter by skills, experience, location, and more to find the perfect candidates.'
            },
            {
                icon: Globe,
                title: 'Global Talent Pool',
                description: 'Access a worldwide network of talented professionals ready for your opportunities.'
            },
            {
                icon: Palette,
                title: 'See Their Work',
                description: 'View portfolios, projects, and case studies to evaluate candidates properly.'
            },
            {
                icon: Shield,
                title: 'Verified Profiles',
                description: 'All profiles are verified to ensure you\'re connecting with real, qualified professionals.'
            }
        ]
    };

    const currentFeatures = features[mode];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        {mode === 'jobseeker' ? 'Everything You Need to Succeed' : 'Find Better Talent, Faster'}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {mode === 'jobseeker'
                            ? 'Build, share, and get discovered. Our platform gives you all the tools to showcase your talent and land your dream job.'
                            : 'Skip the resume pile and find candidates who can actually do the work. See portfolios, not just promises.'
                        }
                    </p>
                </motion.div>

                {/* Features Grid */}
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
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all group-hover:scale-110 ${mode === 'jobseeker'
                                ? 'bg-yellow-100 text-yellow-600'
                                : 'bg-blue-100 text-blue-600'
                                }`}>
                                <feature.icon size={24} />
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 