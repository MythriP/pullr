'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Mail, Sparkles } from 'lucide-react';

interface FooterProps {
    mode: 'jobseeker' | 'recruiter';
}

export default function Footer({ mode }: FooterProps) {
    const primaryColor = mode === 'jobseeker' ? '#1E40AF' : '#991B1B';
    const backgroundColor = mode === 'jobseeker' ? '#F8FAFC' : '#FAFAFA';

    const socialLinks = [
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Mail, href: "#", label: "Email" }
    ];

    const quickLinks = [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Login", href: "/login" },
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" }
    ];

    return (
        <footer className="py-16 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundColor }}>
            {/* Simple background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-6"
                        >
                            <h3 className="text-2xl font-bold mb-4" style={{ color: primaryColor }}>
                                Pullr
                            </h3>
                            <p className="text-slate-600 leading-relaxed max-w-md">
                                {mode === 'jobseeker'
                                    ? "Build your portfolio, showcase your skills, and get discovered by companies looking for talent like you."
                                    : "Discover authentic talent through portfolios, not resumes. Find the right people for your team."
                                }
                            </p>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex space-x-4"
                        >
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:scale-110 bg-white"
                                    style={{ '--hover-color': primaryColor } as any}
                                    title={link.label}
                                >
                                    <link.icon size={20} className="text-slate-600" />
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h4 className="text-lg font-semibold mb-4" style={{ color: primaryColor }}>
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-slate-600 hover:text-slate-900 transition-colors duration-300"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Status */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white border border-slate-200 rounded-2xl p-6"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <span className="text-sm font-bold" style={{ color: primaryColor }}>
                                    Under Construction
                                </span>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                We're working hard to bring you the best talent platform.
                                Stay tuned for updates!
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4"
                >
                    <p className="text-sm text-slate-600">
                        © 2024 Pullr. All rights reserved.
                    </p>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 bg-white">
                        <Sparkles className="w-4 h-4" style={{ color: primaryColor }} />
                        <span className="text-sm font-medium" style={{ color: primaryColor }}>
                            Powered by Future Technology
                        </span>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
} 