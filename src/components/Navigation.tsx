'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

interface NavigationProps {
    mode?: 'jobseeker' | 'recruiter' | 'about' | 'contact';
}

export default function Navigation({ mode = 'jobseeker' }: NavigationProps) {
    const pathname = usePathname();
    const router = useRouter();
    const isRecruiter = mode === 'recruiter';

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const handleNavClick = (href: string, event: React.MouseEvent) => {
        event.preventDefault();
        console.log('🔗 Navigation clicked:', href, 'Current:', pathname);
        if (href !== pathname) {
            // Trigger the transition animation
            console.log('🚀 Triggering transition animation');
            window.dispatchEvent(new CustomEvent('startPageTransition'));
            setTimeout(() => {
                console.log('📍 Navigating to:', href);
                router.push(href);
            }, 500);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-white/85 backdrop-blur-lg border-b border-black/5 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" onClick={(e) => handleNavClick('/', e)} className="flex items-center gap-3 group">
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
                                height="36"
                                viewBox="0 0 244 218"
                                className="relative z-10"
                            >
                                <defs>
                                    <linearGradient id={`logoGradient-${mode}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor={isRecruiter ? "#B91C1C" : "#1E40AF"} />
                                        <stop offset="50%" stopColor={isRecruiter ? "#991B1B" : "#1E3A8A"} />
                                        <stop offset="100%" stopColor={isRecruiter ? "#0F172A" : "#0F172A"} />
                                    </linearGradient>
                                </defs>
                                <path d="M127 27 C132.9592648 27.95508307 137.76591592 30.71974876 143.0625 33.5 C144.60925415 34.31150513 144.60925415 34.31150513 146.18725586 35.1394043 C157.71506152 41.30036285 171.46469249 48.89800053 176 62 C177.11393413 69.93368641 175.69900253 75.56062616 171 82 C167.69031352 86.23684823 164.24161449 89.74213543 160 93.0625 C159.44644333 93.51736282 158.89288666 93.97222565 158.32255554 94.44087219 C154.59457048 97.38161587 151.09465727 99.48578899 146.67114258 101.23486328 C140.53615343 103.85492047 135.09953985 106.58830464 131 112 C127.72371348 122.0095537 128.91943047 133.12443278 129.55804443 143.48773193 C129.77482538 147.38069253 129.86917096 151.2765444 129.97460938 155.17382812 C130.19836249 162.79042465 130.55544575 170.3927508 131 178 C131.8488401 177.04457809 131.8488401 177.04457809 132.71482849 176.06985474 C137.42295945 170.79971556 142.20408473 165.65419913 147.22265625 160.6796875 C148.16908241 159.73538376 148.16908241 159.73538376 149.1346283 158.77200317 C151.10820492 156.80392842 153.08526598 154.83939955 155.0625 152.875 C156.4188546 151.52367314 157.7749761 150.17211228 159.13085938 148.8203125 C162.41789555 145.54417473 165.70805696 142.27120689 169 139 C170.65 140.32 172.3 141.64 174 143 C173.4234559 146.40013186 172.39002339 147.92670485 169.875 150.25 C167.37635319 152.57592929 165.11455566 155.00512712 162.89648438 157.59472656 C158.93689302 162.13558052 154.74115009 166.40320027 150.4765625 170.65625 C149.68978119 171.44398804 148.90299988 172.23172607 148.09237671 173.04333496 C146.4448109 174.69157645 144.79600097 176.33857519 143.14599609 177.984375 C140.60787707 180.51708645 138.07520459 183.0551579 135.54296875 185.59375 C133.93782099 187.19823785 132.33236354 188.80241596 130.7265625 190.40625 C129.96622711 191.16860962 129.20589172 191.93096924 128.42251587 192.71643066 C127.72443817 193.4113562 127.02636047 194.10628174 126.30712891 194.82226562 C125.69092682 195.43767212 125.07472473 196.05307861 124.43984985 196.68713379 C123 198 123 198 122 198 C121.53506084 186.34404893 121.18051517 174.69032473 120.96375656 163.02696609 C120.85966902 157.6095199 120.71877962 152.19844486 120.49121094 146.78466797 C119.05529275 111.73889801 119.05529275 111.73889801 123.92889404 103.89584351 C128.51105024 99.46625471 133.56008221 97.3473859 139.6493988 95.71795654 C143.05376331 94.6781435 145.32665486 92.98804677 148.125 90.8125 C148.94355469 90.19117188 149.76210937 89.56984375 150.60546875 88.9296875 C162.15592961 80.0228391 162.15592961 80.0228391 167.6875 67.0625 C167.39640929 61.68771803 163.76085541 58.48890643 160 55 C159.51861572 54.5447998 159.03723145 54.08959961 158.54125977 53.62060547 C153.81629215 49.33525022 148.67747642 46.35729806 143.0625 43.375 C142.20720703 42.9109375 141.35191406 42.446875 140.47070312 41.96875 C135.3627 39.21019453 130.20541929 36.5695349 125 34 C125.875 29.25 125.875 29.25 127 27 Z" fill={`url(#logoGradient-${mode})`} />
                                <path d="M115 21 C115.33 21 115.66 21 116 21 C116 79.74 116 138.48 116 199 C113.36 199 110.72 199 108 199 C107.67 148.84 107.34 98.68 107 47 C100.55611832 56.01971775 100.55611832 56.01971775 94.1171875 65.04296875 C89.11603829 72.05677557 84.08188889 79.04434202 79 86 C75.34683329 84.75023244 74.21934164 84.32901247 72 81 C77.41341798 73.39921899 82.84717855 65.81356298 88.3125 58.25 C88.85495361 57.49928223 89.39740723 56.74856445 89.95629883 55.97509766 C92.79345604 52.04992664 95.63253286 48.12615018 98.47265625 44.203125 C99.60685403 42.63547686 100.74097013 41.06776961 101.875 39.5 C102.41777588 38.75024902 102.96055176 38.00049805 103.51977539 37.22802734 C107.02241508 32.38088003 110.46476797 27.49982135 113.828125 22.5546875 C114.21484375 22.04164062 114.6015625 21.52859375 115 21 Z" fill={`url(#logoGradient-${mode})`} />
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
                                    onClick={(e) => handleNavClick(item.href, e)}
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