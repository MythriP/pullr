'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, MessageSquare, User, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error');
            setStatusMessage('Please fill in all required fields.');
            return;
        }

        setStatus('sending');
        setStatusMessage('Sending your message...');

        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setStatusMessage('Message sent successfully! We will get back to you soon.');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
                setStatusMessage(data.error || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setStatusMessage('Network error. Please check your connection and try again.');
            console.error('Contact form error:', error);
        }
    };

    return (
        <div className="min-h-screen theme-contact relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-white to-blue-50/30"></div>

            <Navigation mode="contact" />
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24 relative z-10">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 font-medium mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 hover:from-blue-800 hover:via-blue-950 hover:to-slate-900 transition-all duration-300"
                >
                    <ArrowLeft size={20} className="text-blue-700" />
                    Back to Home
                </Link>

                <div className="text-center mb-12">
                    <h1 className="text-big font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900">
                        Get in <span className="font-black">Touch</span>
                    </h1>
                    <p className="text-xl leading-relaxed text-blue-800/80">
                        Have questions? Feedback? Ideas?
                        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 font-medium">
                            We'd love to hear from you!
                        </span>
                    </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-blue-100/50 shadow-xl shadow-blue-900/20">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900">
                                Your Name *
                            </label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-700/60" size={20} />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-4 border border-blue-200/50 rounded-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm text-blue-900 placeholder-blue-500/60 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20 focus:bg-white/90"
                                    placeholder="Your full name"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900">
                                Email Address *
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-700/60" size={20} />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-4 border border-blue-200/50 rounded-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm text-blue-900 placeholder-blue-500/60 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20 focus:bg-white/90"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900">
                                Subject
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-4 border border-blue-200/50 rounded-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm text-blue-900 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20 focus:bg-white/90"
                            >
                                <option value="">Select a topic</option>
                                <option value="general">General Inquiry</option>
                                <option value="feedback">Feedback</option>
                                <option value="support">Support</option>
                                <option value="partnership">Partnership</option>
                                <option value="press">Press Inquiry</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900">
                                Message *
                            </label>
                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-4 text-blue-700/60" size={20} />
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-4 border border-blue-200/50 rounded-2xl transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm text-blue-900 placeholder-blue-500/60 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20 focus:bg-white/90"
                                    placeholder="Tell us what's on your mind..."
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full py-4 px-6 bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 hover:from-blue-800 hover:via-blue-950 hover:to-slate-900 text-white font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-700/25 hover:shadow-blue-700/40 hover:scale-[1.02]"
                        >
                            {status === 'sending' ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <Send size={20} />
                                    <span>Send Message</span>
                                </>
                            )}
                        </button>

                        {/* Status Message */}
                        {status !== 'idle' && (
                            <div className={`p-4 rounded-2xl flex items-center gap-3 backdrop-blur-sm ${status === 'success'
                                    ? 'bg-green-50/80 border border-green-200/50'
                                    : 'bg-red-50/80 border border-red-200/50'
                                }`}>
                                {status === 'success' ? (
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                ) : (
                                    <AlertCircle className="w-5 h-5 text-red-600" />
                                )}
                                <span className={`text-sm font-medium ${status === 'success' ? 'text-green-800' : 'text-red-800'
                                    }`}>
                                    {statusMessage}
                                </span>
                            </div>
                        )}
                    </form>
                </div>

                {/* Contact Info */}
                <div className="mt-16 grid md:grid-cols-2 gap-8">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/50 shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 rounded-xl flex items-center justify-center">
                                <Mail className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900">
                                Email Us
                            </h3>
                        </div>
                        <p className="text-blue-800/70 leading-relaxed">
                            Drop us a line anytime and we'll get back to you as soon as possible.
                        </p>
                    </div>

                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/50 shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 rounded-xl flex items-center justify-center">
                                <MessageSquare className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900">
                                Feedback
                            </h3>
                        </div>
                        <p className="text-blue-800/70 leading-relaxed">
                            Your feedback helps us improve. We're always listening!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 