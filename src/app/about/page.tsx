import Link from 'next/link';
import { ArrowLeft, Users, Target, Zap } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors"
                >
                    <ArrowLeft size={20} />
                    Back to Home
                </Link>

                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Pullr</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        We&apos;re building the future of how talent and opportunities connect.
                        No more broken job boards, no more endless applications.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Users className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">For Job Seekers</h3>
                        <p className="text-gray-600">Build dynamic portfolios that showcase your real work and let opportunities find you.</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Target className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">For Recruiters</h3>
                        <p className="text-gray-600">Discover genuine talent through authentic portfolios, not keyword-stuffed resumes.</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Zap className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                        <p className="text-gray-600">Transform the hiring landscape by focusing on real skills and authentic connections.</p>
                    </div>
                </div>

                <div className="text-center bg-white rounded-3xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
                    <p className="text-gray-600 mb-6">
                        We&apos;re currently in development, building something amazing.
                        Want to be the first to know when we launch?
                    </p>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                        Join Waitlist
                    </button>
                </div>
            </div>
        </div>
    );
} 