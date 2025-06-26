import Link from 'next/link';
import { ArrowLeft, Mail, Lock, Github, Linkedin } from 'lucide-react';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
            {/* Gen Z Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-gradient-to-r from-yellow-400 to-green-400 opacity-10 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium mb-8 transition-colors"
                >
                    <ArrowLeft size={20} />
                    Back to Home
                </Link>

                <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-yellow-400/20 relative overflow-hidden">
                    {/* Card glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-green-400/5 rounded-3xl"></div>
                    <div className="relative z-10">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-white mb-2">
                                Welcome Back 💛
                            </h1>
                            <p className="text-gray-300">
                                Sign in to your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400 font-semibold">Pullr</span> account
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                                    Email
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400" size={20} />
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-yellow-400/30 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-white placeholder-gray-400"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400" size={20} />
                                    <input
                                        type="password"
                                        id="password"
                                        className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-yellow-400/30 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-white placeholder-gray-400"
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
                                        className="h-4 w-4 text-yellow-400 focus:ring-yellow-400 border-yellow-400/30 rounded bg-gray-800/50"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-yellow-400 hover:text-yellow-300">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-yellow-400 to-green-400 text-black py-3 px-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Sign In ✨
                            </button>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-yellow-400/30" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-gray-900/50 text-gray-400">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <button className="w-full inline-flex justify-center items-center gap-2 py-3 px-4 border border-yellow-400/30 rounded-xl shadow-sm bg-gray-800/50 text-sm font-medium text-white hover:bg-gray-700/50 hover:border-yellow-400/50 transition-colors">
                                    <Github size={20} />
                                    GitHub
                                </button>
                                <button className="w-full inline-flex justify-center items-center gap-2 py-3 px-4 border border-yellow-400/30 rounded-xl shadow-sm bg-gray-800/50 text-sm font-medium text-white hover:bg-gray-700/50 hover:border-yellow-400/50 transition-colors">
                                    <Linkedin size={20} />
                                    LinkedIn
                                </button>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-sm text-gray-400">
                                Don&apos;t have an account?{' '}
                                <a href="#" className="font-medium text-yellow-400 hover:text-yellow-300">
                                    Sign up for free
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-xs text-gray-500">
                        🚧 This is a demo page - authentication coming soon!
                    </p>
                </div>
            </div>
        </div>
    );
} 