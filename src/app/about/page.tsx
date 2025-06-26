import Link from 'next/link';
import { ArrowLeft, Users, Target, Zap, Heart, MessageCircle, Lightbulb, Code, Rocket } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors"
                >
                    <ArrowLeft size={20} />
                    Back to Home
                </Link>

                <div className="text-center mb-20">
                    <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Pullr</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        We&apos;re not just building a platform – we&apos;re revolutionizing how talent and opportunities connect.
                        This is our story.
                    </p>
                </div>

                {/* Our Story Section */}
                <div className="mb-20">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                                <Lightbulb className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                            <p className="mb-6">
                                Pullr was born out of frustration. Three people, each with different backgrounds but the same experience –
                                endless applications sent into the void, generic job descriptions that didn't match reality, and the constant
                                feeling that their actual skills and creativity weren't being seen.
                            </p>

                            <p className="mb-6">
                                We realized that both job seekers and recruiters were suffering from the same problem:
                                <strong className="text-gray-900"> the inability to showcase and discover real talent</strong>.
                                Resumes can&apos;t capture creativity, passion, or problem-solving abilities. They&apos;re just formatted lists
                                that everyone tries to game.
                            </p>

                            <p>
                                So we asked ourselves: <em>"What if we could create a platform where talent could truly shine,
                                    and companies could see the real person behind the application?"</em> That question became our mission.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Meet the Founders */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">The Story Behind Pullr</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-3xl p-8 shadow-xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Three People</h3>
                                    <p className="text-blue-600 font-medium">Different paths, same frustration</p>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Three individuals from different backgrounds – tech, design, and business – who all faced the same
                                broken hiring process. Each with unique skills that couldn't be captured in a traditional resume.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                                    <Lightbulb className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">A Shared Need</h3>
                                    <p className="text-blue-600 font-medium">Simple, relatable problem</p>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                We weren&apos;t trying to revolutionize the world – we just wanted a better way to show who we really are
                                and what we can do. Something authentic, something real.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Built for Everyone</h3>
                                    <p className="text-blue-600 font-medium">By people like you</p>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                We&apos;re not Silicon Valley insiders or hiring experts. We&apos;re just people who believe that everyone
                                deserves to be seen for their true potential, not just keywords on a page.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why We Built This */}
                <div className="mb-20">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                                <Heart className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Why We Built This</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <Users className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">For Job Seekers</h3>
                                <p className="text-gray-600">
                                    Stop being reduced to a list of keywords. Show your real work, creativity, and passion.
                                    Let opportunities find you based on what you can actually do.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <Target className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">For Recruiters</h3>
                                <p className="text-gray-600">
                                    Stop sifting through thousands of identical resumes. See real portfolios, actual projects,
                                    and connect with talent that can deliver results.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <Rocket className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">For Everyone</h3>
                                <p className="text-gray-600">
                                    Create a world where talent is recognized, opportunities are accessible,
                                    and the best person for the job actually gets it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Values */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Authenticity</h3>
                            <p className="text-sm text-gray-600">Real people, real work, real connections.</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Users className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
                            <p className="text-sm text-gray-600">Building together, growing together.</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Target className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Impact</h3>
                            <p className="text-sm text-gray-600">Changing lives, one connection at a time.</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Rocket className="w-6 h-6 text-yellow-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                            <p className="text-sm text-gray-600">Always pushing boundaries, never settling.</p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="text-center">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                                <MessageCircle className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Let&apos;s Connect</h2>
                        </div>

                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Have questions about our journey? Want to share your story?
                            We'd love to hear from you. Every conversation helps us build something better.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <MessageCircle size={20} />
                            Message Us
                        </Link>

                        <p className="text-sm text-gray-500 mt-4">
                            We read every message and respond personally.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 