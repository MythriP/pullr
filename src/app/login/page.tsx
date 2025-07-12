import Link from 'next/link';
import { ArrowLeft, Mail, Lock, Github, Linkedin } from 'lucide-react';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 relative overflow-hidden">
            {/* Blue Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-10 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-blue-300 to-blue-500 opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 hover:from-blue-800 hover:via-blue-950 hover:to-slate-900 font-medium mb-8 transition-all duration-300"
                >
                    <ArrowLeft size={20} className="text-blue-700" />
                    Back to Home
                </Link>

                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-blue-200/50 relative overflow-hidden">
                    {/* Card glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-blue-100/80 rounded-3xl"></div>
                    <div className="relative z-10">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 mb-2">
                                Welcome Back 💙
                            </h1>
                            <p className="text-blue-800/80">
                                Sign in to your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 font-semibold">Pullr</span> account
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 mb-2">
                                    Email
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-700" size={20} />
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full pl-12 pr-4 py-3 bg-white/80 border border-blue-200/50 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition-all text-blue-900 placeholder-blue-500/60"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-700" size={20} />
                                    <input
                                        type="password"
                                        id="password"
                                        className="w-full pl-12 pr-4 py-3 bg-white/80 border border-blue-200/50 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition-all text-blue-900 placeholder-blue-500/60"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-blue-700 focus:ring-blue-700 border-blue-200/50 rounded bg-white/80"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-blue-800/80">
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 hover:from-blue-800 hover:via-blue-950 hover:to-slate-900 transition-all duration-300">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 hover:from-blue-800 hover:via-blue-950 hover:to-slate-900 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-700/50 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Sign In ✨
                            </button>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-blue-200/50" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white/80 text-blue-600/70">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <button className="w-full inline-flex justify-center items-center gap-2 py-3 px-4 border border-blue-200/50 rounded-xl shadow-sm bg-white/80 text-sm font-medium text-blue-800 hover:bg-blue-50/80 hover:border-blue-300/50 transition-colors">
                                    <Github size={20} />
                                    GitHub
                                </button>
                                <button className="w-full inline-flex justify-center items-center gap-2 py-3 px-4 border border-blue-200/50 rounded-xl shadow-sm bg-white/80 text-sm font-medium text-blue-800 hover:bg-blue-50/80 hover:border-blue-300/50 transition-colors">
                                    <Linkedin size={20} />
                                    LinkedIn
                                </button>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-sm text-blue-600/70">
                                Don&apos;t have an account?{' '}
                                <a href="#" className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 hover:from-blue-800 hover:via-blue-950 hover:to-slate-900 transition-all duration-300">
                                    Sign up for free
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-xs text-blue-500/60">
                        🚧 This is a demo page - authentication coming soon!
                    </p>
                </div>
            </div>
        </div>
    );
} 