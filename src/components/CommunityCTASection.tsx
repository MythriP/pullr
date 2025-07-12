'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Users, Heart, Zap } from 'lucide-react';

export default function CommunityCTASection() {
    const primaryColor = '#1E40AF';
    const backgroundColor = '#F8FAFC';

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundColor }}>
            {/* Simple background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50"></div>

            <div className="max-w-6xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        <span className="text-blue-900">Be a part of a cool community</span>
                        <span className="block text-slate-900">that doesn't just shine —</span>
                        <span className="inline-flex items-center gap-3 mt-2">
                            <span className="text-blue-900">we reflect</span>
                            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700" />
                        </span>
                    </h2>

                    <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-slate-700">
                        Explore other profiles, find common interests, and share the journey.
                        Connect with like-minded professionals who are building their futures, just like you.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
                        {[
                            { icon: Users, text: "Connect with peers" },
                            { icon: Heart, text: "Share your journey" },
                            { icon: Zap, text: "Discover opportunities" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-3"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100">
                                    <item.icon className="w-5 h-5 text-blue-700" />
                                </div>
                                <span className="font-medium text-blue-900">
                                    {item.text}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all duration-300 flex items-center gap-2 hover:scale-105 shadow-lg">
                            <span>Join the Community</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-2xl transition-all duration-300 hover:scale-105">
                            Learn More
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
} 