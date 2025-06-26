'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import FeedbackDialog from './FeedbackDialog';

interface FAQSectionProps {
    mode: 'jobseeker' | 'recruiter';
}

export default function FAQSection({ mode }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = {
        jobseeker: [
            {
                question: 'How do I create my portfolio?',
                answer: 'Creating your portfolio is simple. Sign up, choose a template, and start adding your projects, skills, and experience. Our guided setup helps you showcase your work effectively.'
            },
            {
                question: 'Do I need design skills to create a portfolio?',
                answer: 'Not at all! Our platform provides beautiful, professional templates that automatically format your content. Just focus on showcasing your work - we handle the design.'
            },
            {
                question: 'How do companies find me?',
                answer: 'Our AI matching system analyzes your skills and projects, then shows your portfolio to relevant companies. You can also apply directly to specific opportunities.'
            },
            {
                question: 'Is my portfolio private?',
                answer: 'You have full control over your privacy. You can make your portfolio public, private, or visible only to companies you choose. Share selectively or broadly - it\'s up to you.'
            },
            {
                question: 'What types of projects should I include?',
                answer: 'Include your best work that demonstrates your skills. This could be code projects, design work, writing samples, case studies, or any professional work relevant to your field.'
            },
            {
                question: 'Is Pullr free to use?',
                answer: 'Yes! Creating your portfolio and basic features are completely free. We offer premium features for advanced customization and enhanced visibility.'
            }
        ],
        recruiter: [
            {
                question: 'How does the AI matching work?',
                answer: 'Our AI analyzes job requirements against candidate portfolios, skills, and project history to suggest the best matches. It considers technical skills, experience level, and project relevance.'
            },
            {
                question: 'Can I see actual work samples?',
                answer: 'Yes! Unlike traditional resumes, our platform showcases real portfolios with live projects, code samples, case studies, and documented work experience.'
            },
            {
                question: 'How are profiles verified?',
                answer: 'We verify profiles through multiple methods including GitHub integration, LinkedIn verification, project validation, and skill assessments to ensure authenticity.'
            },
            {
                question: 'What\'s the pricing structure?',
                answer: 'We offer flexible plans based on your hiring needs. Start with our free plan to explore profiles, then upgrade for advanced search, direct messaging, and priority access to new talent.'
            },
            {
                question: 'Can I search for specific skills?',
                answer: 'Absolutely! Use our advanced filters to search by specific skills, technologies, experience level, location, availability, and more. Find exactly what you need.'
            },
            {
                question: 'How do I contact candidates?',
                answer: 'Once you find interesting candidates, you can send direct messages through our platform. Premium plans include advanced communication tools and contact information access.'
            }
        ]
    };

    const currentFaqs = faqs[mode];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600">
                        {mode === 'jobseeker'
                            ? 'Everything you need to know about building your portfolio'
                            : 'Common questions about finding and hiring talent'
                        }
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {currentFaqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </h3>
                                <div className={`transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''
                                    }`}>
                                    {openIndex === index ? (
                                        <Minus className={`w-5 h-5 ${mode === 'jobseeker' ? 'text-yellow-600' : 'text-blue-600'
                                            }`} />
                                    ) : (
                                        <Plus className="w-5 h-5 text-gray-400" />
                                    )}
                                </div>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: openIndex === index ? 'auto' : 0,
                                    opacity: openIndex === index ? 1 : 0
                                }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-6">
                                    <p className="text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Feedback CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600 mb-4">Still have questions?</p>
                    <FeedbackDialog mode={mode} />
                </motion.div>
            </div>
        </section>
    );
} 