import Link from 'next/link';
import { ArrowLeft, Users, Target, Zap, Heart, MessageCircle, Lightbulb, Code, Rocket } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function AboutPage() {
    return (
        <div className="min-h-screen theme-about relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-white to-blue-50/30"></div>

            <Navigation mode="about" />



            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24 relative z-10">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 font-medium mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 hover:from-blue-800 hover:via-blue-950 hover:to-slate-900 transition-all duration-300"
                >
                    <ArrowLeft size={20} className="text-blue-700" />
                    Back to Home
                </Link>

                <div className="text-center mb-20">
                    <h1 className="text-big font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900">
                        About <span className="font-black bg-gradient-to-r from-blue-800 via-blue-950 to-slate-900 bg-clip-text text-transparent">Pullr</span>
                    </h1>
                    <p className="text-xl leading-relaxed max-w-3xl mx-auto text-blue-800/80">
                        We're not just building a platform – we're revolutionizing how talent and opportunities connect.
                        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 font-medium">
                            This is our story.
                        </span>
                    </p>
                </div>

                {/* Our Story Section */}
                <div className="mb-20">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue-100/50 shadow-xl shadow-blue-900/20 relative overflow-hidden">
                        {/* Gradient accent */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900"></div>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-700 via-blue-900 to-slate-900 shadow-lg shadow-blue-700/25">
                                <Lightbulb className="w-7 h-7 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900">
                                Our Story
                            </h2>
                        </div>

                        <div className="prose prose-lg max-w-none leading-relaxed space-y-6">
                            <p className="text-blue-800/80 text-lg">
                                Pullr was born out of frustration. Three people, each with different backgrounds but the same experience –
                                endless applications sent into the void, generic job descriptions that didn't match reality, and the constant
                                feeling that their actual skills and creativity weren't being seen.
                            </p>

                            <p className="text-blue-800/80 text-lg">
                                We realized that both job seekers and recruiters were suffering from the same problem:
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 font-semibold">
                                    {" "}the inability to showcase and discover real talent
                                </span>.
                                Resumes can't capture creativity, passion, or problem-solving abilities. They're just formatted lists
                                that everyone tries to game.
                            </p>

                            <p className="text-blue-800/80 text-lg">
                                So we asked ourselves:
                                <em className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 font-semibold not-italic block mt-2 text-xl">
                                    "What if we could create a platform where talent could truly shine,
                                    and companies could see the real person behind the application?"
                                </em>
                                That question became our mission.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Meet the Founders */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900">
                        The Story Behind Pullr
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-blue-100/50 shadow-lg hover:shadow-xl hover:shadow-blue-900/30 transition-all duration-300 hover:scale-[1.02]">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-700 via-blue-900 to-slate-900 shadow-lg shadow-blue-700/25">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900">
                                        Three People
                                    </h3>
                                    <p className="font-medium text-blue-700/80">
                                        Different paths, same frustration
                                    </p>
                                </div>
                            </div>
                            <p className="leading-relaxed text-blue-800/70">
                                Three individuals from different backgrounds – tech, design, and business – who all faced the same
                                broken hiring process. Each with unique skills that couldn't be captured in a traditional resume.
                            </p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-blue-100/50 shadow-lg hover:shadow-xl hover:shadow-blue-900/30 transition-all duration-300 hover:scale-[1.02]">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-700/25">
                                    <Lightbulb className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900">
                                        A Shared Need
                                    </h3>
                                    <p className="text-blue-700/80 font-medium">Simple, relatable problem</p>
                                </div>
                            </div>
                            <p className="text-blue-800/70 leading-relaxed">
                                We weren't trying to revolutionize the world – we just wanted a better way to show who we really are
                                and what we can do. Something authentic, something real.
                            </p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-blue-100/50 shadow-lg hover:shadow-xl hover:shadow-blue-900/30 transition-all duration-300 hover:scale-[1.02]">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-700/25">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900">
                                        Built for Everyone
                                    </h3>
                                    <p className="text-blue-700/80 font-medium">By people like you</p>
                                </div>
                            </div>
                            <p className="text-blue-800/70 leading-relaxed">
                                We're not Silicon Valley insiders or hiring experts. We're just people who believe that everyone
                                deserves to be seen for their true potential, not just keywords on a page.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why We Built This */}
                <div className="mb-20">
                    <div className="bg-gradient-to-br from-blue-50/80 to-blue-100/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue-100/50 shadow-xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-700/25">
                                <Heart className="w-7 h-7 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900">
                                Why We Built This
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-blue-100/50">
                                    <Users className="w-8 h-8 text-blue-700" />
                                </div>
                                <h3 className="text-lg font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900">
                                    For Job Seekers
                                </h3>
                                <p className="text-blue-800/70 leading-relaxed">
                                    Show your real skills, personality, and potential beyond the limits of a traditional resume.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-blue-100/50">
                                    <Target className="w-8 h-8 text-blue-700" />
                                </div>
                                <h3 className="text-lg font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900">
                                    For Recruiters
                                </h3>
                                <p className="text-blue-800/70 leading-relaxed">
                                    Discover authentic talent and see the real person behind the application, not just keywords.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-blue-100/50">
                                    <Rocket className="w-8 h-8 text-blue-700" />
                                </div>
                                <h3 className="text-lg font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900">
                                    For Everyone
                                </h3>
                                <p className="text-blue-800/70 leading-relaxed">
                                    Create meaningful connections based on real skills, values, and potential for growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900">
                        Our Values
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Heart,
                                title: "Authenticity",
                                description: "Be yourself, showcase your real skills and personality."
                            },
                            {
                                icon: Zap,
                                title: "Innovation",
                                description: "Constantly improving how talent and opportunities connect."
                            },
                            {
                                icon: Users,
                                title: "Community",
                                description: "Building a supportive ecosystem for everyone to thrive."
                            },
                            {
                                icon: Target,
                                title: "Quality",
                                description: "Focus on meaningful connections, not just quantity."
                            }
                        ].map((value, index) => (
                            <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-center">
                                <div className="w-14 h-14 bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <value.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900">
                                    {value.title}
                                </h3>
                                <p className="text-blue-800/70 leading-relaxed text-sm">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-gradient-to-br from-blue-700 via-blue-900 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-xl shadow-blue-700/25">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Join Our Mission?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Help us revolutionize how talent and opportunities connect.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <Rocket className="w-5 h-5" />
                        Get Started Today
                    </Link>
                </div>
            </div>
        </div>
    );
} 