'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface NavigationProps {
    mode?: 'jobseeker' | 'recruiter' | 'about' | 'contact';
}

export default function Navigation({ mode = 'jobseeker' }: NavigationProps) {
    const pathname = usePathname();
    const isRecruiter = mode === 'recruiter';

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-white/85 backdrop-blur-lg border-b border-black/5 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <motion.div
                            whileHover={{ scale: 1.08, rotate: 3 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className="relative"
                        >
                            <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${isRecruiter ? 'bg-gradient-to-br from-red-500 to-red-600' : 'bg-gradient-to-br from-blue-500 to-blue-600'
                                }`}></div>
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 120 120"
                                fill="none"
                                className="relative z-10"
                            >
                                <defs>
                                    <linearGradient id={`logoGradient-${mode}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor={isRecruiter ? "#B91C1C" : "#1E40AF"} />
                                        <stop offset="50%" stopColor={isRecruiter ? "#991B1B" : "#1E3A8A"} />
                                        <stop offset="100%" stopColor={isRecruiter ? "#0F172A" : "#0F172A"} />
                                    </linearGradient>
                                </defs>
                                <rect x="20" y="20" width="25" height="80" fill={`url(#logoGradient-${mode})`} />
                                <rect x="20" y="20" width="50" height="25" fill={`url(#logoGradient-${mode})`} />
                                <rect x="20" y="50" width="35" height="20" fill={`url(#logoGradient-${mode})`} />
                                <rect x="70" y="20" width="30" height="30" fill={`url(#logoGradient-${mode})`} />
                                <rect x="70" y="55" width="30" height="25" fill={`url(#logoGradient-${mode})`} />
                            </svg>
                        </motion.div>
                        <span className={`text-xl font-bold text-transparent bg-clip-text transition-all duration-300 ${isRecruiter
                            ? 'bg-gradient-to-r from-red-700 via-red-900 to-slate-900 group-hover:from-red-800 group-hover:via-red-950 group-hover:to-slate-900'
                            : 'bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 group-hover:from-blue-800 group-hover:via-blue-950 group-hover:to-slate-900'
                            }`}>
                            Pullr
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-8">
                        {navItems.map((item) => (
                            <motion.div key={item.name} className="relative">
                                <Link
                                    href={item.href}
                                    className={`relative font-medium transition-all duration-300 group ${pathname === item.href
                                        ? 'opacity-100 text-transparent bg-clip-text' + (isRecruiter
                                            ? ' bg-gradient-to-r from-red-700 via-red-900 to-slate-900'
                                            : ' bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900')
                                        : 'opacity-70 hover:opacity-100 text-transparent bg-clip-text' + (isRecruiter
                                            ? ' bg-gradient-to-r from-red-600 via-red-800 to-red-900 hover:from-red-700 hover:via-red-900 hover:to-slate-900'
                                            : ' bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 hover:from-blue-700 hover:via-blue-900 hover:to-slate-900')
                                        }`}
                                >
                                    {item.name}

                                    {/* Hover glow effect */}
                                    <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${isRecruiter ? 'bg-gradient-to-r from-red-700 via-red-900 to-slate-900' : 'bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900'
                                        }`}></div>
                                </Link>

                                {/* Active indicator */}
                                {pathname === item.href && (
                                    <motion.div
                                        className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${isRecruiter ? 'bg-gradient-to-r from-red-700 via-red-900 to-slate-900' : 'bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900'
                                            }`}
                                        layoutId={`activeNav-${mode}`}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
} 