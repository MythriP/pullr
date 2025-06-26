'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
    mode: 'jobseeker' | 'recruiter';
}

export default function Footer({ mode }: FooterProps) {
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
        <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold mb-4">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                    Pullr
                                </span>
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                {mode === 'jobseeker'
                                    ? "The platform where talent meets opportunity. Build your portfolio, showcase your skills, and let jobs find you."
                                    : "Discover authentic talent through real portfolios. Connect with verified professionals who can actually deliver."
                                }
                            </p>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 group"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Status Message */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-6 border border-gray-700"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-yellow-400">Under Construction</span>
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                {mode === 'jobseeker'
                                    ? "See you soon 🚀 – We're still baking this, but it already smells 🔥"
                                    : "Our unbiased matching algorithm is still being trained. Stay tuned 🤖✨"
                                }
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
                >
                    <p className="text-gray-400 text-sm">
                        © 2025 Pullr. Made with{" "}
                        <Heart className="inline w-4 h-4 text-red-400 mx-1" />{" "}
                        for the next generation of talent.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>Built with</span>
                        <div className="flex gap-1">
                            <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Next.js</span>
                            <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded">Tailwind</span>
                            <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded">TypeScript</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
} 