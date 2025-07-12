'use client';

import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FAQSectionProps {
    mode: 'jobseeker' | 'recruiter';
}

export default function FAQSection({ mode }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const primaryColor = mode === 'jobseeker' ? '#1E40AF' : '#991B1B';
    const backgroundColor = mode === 'jobseeker' ? '#F8FAFC' : '#FAFAFA';

    const faqs = {
        jobseeker: [
            {
                question: 'How does Pullr work for job seekers?',
                answer: 'Pullr helps you create a dynamic portfolio that showcases your skills and achievements. Once your profile is complete, our AI matches you with relevant opportunities and allows recruiters to discover your work organically.'
            },
            {
                question: 'Is my data secure on Pullr?',
                answer: 'Absolutely. We use industry-standard encryption and security measures to protect your personal information. You have full control over what information you share and with whom.'
            },
            {
                question: 'How much does it cost?',
                answer: 'Pullr offers a free tier with basic features. Premium plans start at $9.99/month and include advanced portfolio customization, priority matching, and detailed analytics.'
            },
            {
                question: 'Can I customize my portfolio?',
                answer: 'Yes! Our portfolio builder offers extensive customization options. You can choose from various templates, add your own branding, and showcase your work in the way that best represents you.'
            },
            {
                question: 'How do I get matched with opportunities?',
                answer: 'Our AI analyzes your skills, experience, and preferences to match you with relevant job openings. You can also set up alerts for specific types of positions or companies.'
            }
        ],
        recruiter: [
            {
                question: 'How does Pullr help recruiters find better candidates?',
                answer: 'Pullr provides access to a curated pool of professionals with verified portfolios. Our AI-powered matching system helps you find candidates based on actual skills and achievements, not just keywords.'
            },
            {
                question: 'What makes Pullr different from other recruiting platforms?',
                answer: 'Unlike traditional job boards, Pullr focuses on portfolios and proven work rather than resumes. This gives you a more authentic view of candidates\' capabilities and reduces hiring mistakes.'
            },
            {
                question: 'Can I integrate Pullr with my existing hiring tools?',
                answer: 'Yes, Pullr offers integrations with popular ATS systems and hiring tools. Our API allows for seamless data synchronization and workflow automation.'
            },
            {
                question: 'How much does it cost for recruiters?',
                answer: 'We offer flexible pricing plans starting at $49/month per recruiter. Enterprise plans with custom features and unlimited searches are available for larger teams.'
            },
            {
                question: 'How do I contact candidates?',
                answer: 'Once you find interesting candidates, you can send direct messages through our platform. Premium plans include advanced communication tools and contact information access.'
            }
        ]
    };

    const currentFaqs = faqs[mode];

    return (
        <section className="py-24 relative" style={{ backgroundColor }}>
            {/* Simple background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: primaryColor }}>
                        Frequently Asked <span className="text-slate-900">Questions</span>
                    </h2>
                    <p className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
                        Find answers to common questions about Pullr and how it can help you {mode === 'jobseeker' ? 'advance your career' : 'find better talent'}.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {currentFaqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
                                {/* Left accent border */}
                                <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl" style={{ backgroundColor: `${primaryColor}50` }} />

                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full text-left focus:outline-none"
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold pr-4" style={{ color: primaryColor }}>
                                            {faq.question}
                                        </h3>
                                        <motion.div
                                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="w-5 h-5 text-slate-500" />
                                        </motion.div>
                                    </div>
                                </button>

                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: openIndex === index ? 'auto' : 0,
                                        opacity: openIndex === index ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-4 text-slate-700 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 