'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, Briefcase, TrendingUp } from 'lucide-react';

interface HeroSectionProps {
    mode: 'jobseeker' | 'recruiter';
}

export default function HeroSection({ mode }: HeroSectionProps) {
    const content = {
        jobseeker: {
            headline: 'Build Your Portfolio.\nGet Discovered.',
            subheadline: 'Pullr is the platform where talent creates portfolios and gets discovered by companies. No more endless applications.',
            cta: 'Create Your Portfolio',
            demo: 'See How It Works',
            stats: [
                { number: '50K+', label: 'Active Creators', icon: Users },
                { number: '2.3x', label: 'Faster Hiring', icon: TrendingUp },
                { number: '89%', label: 'Success Rate', icon: Briefcase }
            ]
        },
        recruiter: {
            headline: 'Discover Hidden Talent.\nHire Faster.',
            subheadline: 'Find authentic portfolios, see real skills, and connect with talent that matches your needs. Skip the resume pile.',
            cta: 'Start Discovering',
            demo: 'View Demo',
            stats: [
                { number: '10K+', label: 'Companies', icon: Briefcase },
                { number: '3.5x', label: 'Better Matches', icon: TrendingUp },
                { number: '76%', label: 'Time Saved', icon: Users }
            ]
        }
    };

    const currentContent = content[mode];
    const primaryColor = mode === 'jobseeker' ? '#1E40AF' : '#991B1B';
    const backgroundColor = mode === 'jobseeker' ? '#F8FAFC' : '#FAFAFA';

    return (
        <section className="min-h-screen relative" style={{ backgroundColor }}>
            {/* Simple background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100"></div>

            <div className="max-w-7xl mx-auto px-6 pt-8 pb-16 relative z-10">
                {/* Simple Logo */}
                <motion.div
                    className="flex justify-center mb-16"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <svg
                        width="120"
                        height="107"
                        viewBox="0 0 244 218"
                        className="relative z-10"
                    >
                        <path d="M127 27 C132.9592648 27.95508307 137.76591592 30.71974876 143.0625 33.5 C144.60925415 34.31150513 144.60925415 34.31150513 146.18725586 35.1394043 C157.71506152 41.30036285 171.46469249 48.89800053 176 62 C177.11393413 69.93368641 175.69900253 75.56062616 171 82 C167.69031352 86.23684823 164.24161449 89.74213543 160 93.0625 C159.44644333 93.51736282 158.89288666 93.97222565 158.32255554 94.44087219 C154.59457048 97.38161587 151.09465727 99.48578899 146.67114258 101.23486328 C140.53615343 103.85492047 135.09953985 106.58830464 131 112 C127.72371348 122.0095537 128.91943047 133.12443278 129.55804443 143.48773193 C129.77482538 147.38069253 129.86917096 151.2765444 129.97460938 155.17382812 C130.19836249 162.79042465 130.55544575 170.3927508 131 178 C131.8488401 177.04457809 131.8488401 177.04457809 132.71482849 176.06985474 C137.42295945 170.79971556 142.20408473 165.65419913 147.22265625 160.6796875 C148.16908241 159.73538376 148.16908241 159.73538376 149.1346283 158.77200317 C151.10820492 156.80392842 153.08526598 154.83939955 155.0625 152.875 C156.4188546 151.52367314 157.7749761 150.17211228 159.13085938 148.8203125 C162.41789555 145.54417473 165.70805696 142.27120689 169 139 C170.65 140.32 172.3 141.64 174 143 C173.4234559 146.40013186 172.39002339 147.92670485 169.875 150.25 C167.37635319 152.57592929 165.11455566 155.00512712 162.89648438 157.59472656 C158.93689302 162.13558052 154.74115009 166.40320027 150.4765625 170.65625 C149.68978119 171.44398804 148.90299988 172.23172607 148.09237671 173.04333496 C146.4448109 174.69157645 144.79600097 176.33857519 143.14599609 177.984375 C140.60787707 180.51708645 138.07520459 183.0551579 135.54296875 185.59375 C133.93782099 187.19823785 132.33236354 188.80241596 130.7265625 190.40625 C129.96622711 191.16860962 129.20589172 191.93096924 128.42251587 192.71643066 C127.72443817 193.4113562 127.02636047 194.10628174 126.30712891 194.82226562 C125.69092682 195.43767212 125.07472473 196.05307861 124.43984985 196.68713379 C123 198 123 198 122 198 C121.53506084 186.34404893 121.18051517 174.69032473 120.96375656 163.02696609 C120.85966902 157.6095199 120.71877962 152.19844486 120.49121094 146.78466797 C119.05529275 111.73889801 119.05529275 111.73889801 123.92889404 103.89584351 C128.51105024 99.46625471 133.56008221 97.3473859 139.6493988 95.71795654 C143.05376331 94.6781435 145.32665486 92.98804677 148.125 90.8125 C148.94355469 90.19117188 149.76210937 89.56984375 150.60546875 88.9296875 C162.15592961 80.0228391 162.15592961 80.0228391 167.6875 67.0625 C167.39640929 61.68771803 163.76085541 58.48890643 160 55 C159.51861572 54.5447998 159.03723145 54.08959961 158.54125977 53.62060547 C153.81629215 49.33525022 148.67747642 46.35729806 143.0625 43.375 C142.20720703 42.9109375 141.35191406 42.446875 140.47070312 41.96875 C135.3627 39.21019453 130.20541929 36.5695349 125 34 C125.875 29.25 125.875 29.25 127 27 Z" fill={primaryColor} />
                        <path d="M115 21 C115.33 21 115.66 21 116 21 C116 79.74 116 138.48 116 199 C113.36 199 110.72 199 108 199 C107.67 148.84 107.34 98.68 107 47 C100.55611832 56.01971775 100.55611832 56.01971775 94.1171875 65.04296875 C89.11603829 72.05677557 84.08188889 79.04434202 79 86 C75.34683329 84.75023244 74.21934164 84.32901247 72 81 C77.41341798 73.39921899 82.84717855 65.81356298 88.3125 58.25 C88.85495361 57.49928223 89.39740723 56.74856445 89.95629883 55.97509766 C92.79345604 52.04992664 95.63253286 48.12615018 98.47265625 44.203125 C99.60685403 42.63547686 100.74097013 41.06776961 101.875 39.5 C102.41777588 38.75024902 102.96055176 38.00049805 103.51977539 37.22802734 C107.02241508 32.38088003 110.46476797 27.49982135 113.828125 22.5546875 C114.21484375 22.04164062 114.6015625 21.52859375 115 21 Z" fill={primaryColor} />
                    </svg>
                </motion.div>

                {/* Main Content */}
                <div className="text-center mb-20">
                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-huge font-bold mb-8 leading-tight"
                        style={{ color: primaryColor }}
                    >
                        {currentContent.headline.split('\n').map((line, index) => (
                            <div key={index}>{line}</div>
                        ))}
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-slate-700"
                    >
                        {currentContent.subheadline}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
                    >
                        <button
                            className="px-8 py-4 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
                            style={{ backgroundColor: primaryColor }}
                        >
                            {currentContent.cta}
                            <ArrowRight size={20} />
                        </button>

                        <button
                            className="px-8 py-4 font-semibold rounded-2xl transition-all duration-300 hover:scale-105 border-2 bg-white flex items-center gap-2"
                            style={{ color: primaryColor, borderColor: primaryColor }}
                        >
                            <Play size={18} />
                            {currentContent.demo}
                        </button>
                    </motion.div>
                </div>

                {/* Demo Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mb-24"
                >
                    <div className="card max-w-4xl mx-auto">
                        <div className="rounded-xl h-80 flex items-center justify-center bg-white border border-slate-200">
                            <div className="text-center">
                                <div
                                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                                    style={{ backgroundColor: `${primaryColor}15` }}
                                >
                                    <Play className="w-10 h-10" style={{ color: primaryColor }} />
                                </div>
                                <p className="font-semibold text-lg mb-2" style={{ color: primaryColor }}>
                                    Interactive Demo Coming Soon
                                </p>
                                <p className="text-sm text-slate-600">
                                    See how {mode === 'jobseeker' ? 'talent builds portfolios' : 'recruiters discover talent'}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto"
                >
                    {currentContent.stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                            className="text-center group"
                        >
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all hover:scale-110"
                                style={{ backgroundColor: `${primaryColor}15` }}
                            >
                                <stat.icon size={28} style={{ color: primaryColor }} />
                            </div>
                            <div className="text-4xl font-bold mb-3" style={{ color: primaryColor }}>
                                {stat.number}
                            </div>
                            <div className="font-medium text-slate-600">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
} 