'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Users, Heart } from 'lucide-react';

export default function CommunityCTASection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 w-20 h-20 bg-purple-100 rounded-full blur-xl"></div>
                <div className="absolute top-32 right-20 w-32 h-32 bg-blue-100 rounded-full blur-2xl"></div>
                <div className="absolute bottom-20 left-32 w-24 h-24 bg-indigo-100 rounded-full blur-xl"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex justify-center mb-6">
                        <div className="flex items-center gap-2 bg-yellow-50 rounded-full px-4 py-2 border border-yellow-200">
                            <Sparkles className="w-5 h-5 text-yellow-600" />
                            <span className="text-gray-800 font-medium">Join the Movement</span>
                        </div>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Be a part of a cool community that doesn&apos;t just shine —
                        <span className="inline-flex items-center gap-2 text-yellow-600">
                            we reflect <Sparkles className="w-8 h-8 sm:w-10 sm:h-10" />
                        </span>
                    </h2>

                    <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                        Explore other profiles, find common interests, and share the journey.
                        Connect with like-minded professionals who are building their futures, just like you.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                        <div className="flex items-center gap-2 text-gray-700">
                            <Users className="w-5 h-5 text-yellow-600" />
                            <span>Connect with peers</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                            <Heart className="w-5 h-5 text-yellow-600" />
                            <span>Share your journey</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                            <Sparkles className="w-5 h-5 text-yellow-600" />
                            <span>Discover opportunities</span>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group bg-yellow-600 hover:bg-yellow-700 text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Create Your Portfolio
                        <ArrowRight className="inline-block ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
                    </motion.button>

                    <p className="text-gray-500 mt-6 text-sm">
                        Free to start • No credit card required • Join 10,000+ creators
                    </p>
                </motion.div>
            </div>
        </section>
    );
} 