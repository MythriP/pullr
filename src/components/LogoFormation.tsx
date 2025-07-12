'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LogoFormationProps {
    mode?: 'jobseeker' | 'recruiter' | 'about' | 'contact';
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

export default function LogoFormation({
    mode = 'jobseeker',
    size = 'medium',
    className = ''
}: LogoFormationProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [animationPhase, setAnimationPhase] = useState<'forming' | 'complete'>('forming');

    const isRecruiter = mode === 'recruiter';

    const sizes = {
        small: { width: 60, height: 54, scale: 0.25 },
        medium: { width: 120, height: 107, scale: 0.5 },
        large: { width: 180, height: 160, scale: 0.75 }
    };

    const currentSize = sizes[size];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
            setAnimationPhase('forming');

            setTimeout(() => {
                setAnimationPhase('complete');
            }, 1000);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const logoPath1 = "M0 0 C80.52 0 161.04 0 244 0 C244 71.94 244 143.88 244 218 C163.48 218 82.96 218 0 218 C0 146.06 0 74.12 0 0 Z";
    const logoPath2 = "M0 0 C5.9592648 0.95508307 10.76591592 3.71974876 16.0625 6.5 C17.60925415 7.31150513 17.60925415 7.31150513 19.18725586 8.1394043 C30.71506152 14.30036285 44.46469249 21.89800053 49 35 C50.11393413 42.93368641 48.69900253 48.56062616 44 55 C40.69031352 59.23684823 37.24161449 62.74213543 33 66.0625 C32.44644333 66.51736282 31.89288666 66.97222565 31.32255554 67.44087219 C27.59457048 70.38161587 24.09465727 72.48578899 19.67114258 74.23486328 C13.53615343 76.85492047 8.09953985 79.58830464 4 85 C0.72371348 95.0095537 1.91943047 106.12443278 2.55804443 116.48773193 C2.77482538 120.38069253 2.86917096 124.2765444 2.97460938 128.17382812 C3.19836249 135.79042465 3.55544575 143.3927508 4 151 C4.8488401 150.04457809 4.8488401 150.04457809 5.71482849 149.06985474 C10.42295945 143.79971556 15.20408473 138.65419913 20.22265625 133.6796875 C21.16908241 132.73538376 21.16908241 132.73538376 22.1346283 131.77200317 C24.10820492 129.80392842 26.08526598 127.83939955 28.0625 125.875 C29.4188546 124.52367314 30.7749761 123.17211228 32.13085938 121.8203125 C35.41789555 118.54417473 38.70805696 115.27120689 42 112 C43.65 113.32 45.3 114.64 47 116 C46.4234559 119.40013186 45.39002339 120.92670485 42.875 123.25 C40.37635319 125.57592929 38.11455566 128.00512712 35.89648438 130.59472656 C31.93689302 135.13558052 27.74115009 139.40320027 23.4765625 143.65625 C22.68978119 144.44398804 21.90299988 145.23172607 21.09237671 146.04333496 C19.4448109 147.69157645 17.79600097 149.33857519 16.14599609 150.984375 C13.60787707 153.51708645 11.07520459 156.0551579 8.54296875 158.59375 C6.93782099 160.19823785 5.33236354 161.80241596 3.7265625 163.40625 C2.96622711 164.16860962 2.20589172 164.93096924 1.42251587 165.71643066 C0.72443817 166.4113562 0.02636047 167.10628174 -0.69287109 167.82226562 C-1.30907318 168.43767212 -1.92527527 169.05307861 -2.56015015 169.68713379 C-4 171 -4 171 -5 171 C-5.46493916 159.34404893 -5.81948483 147.69032473 -6.03624344 136.02696609 C-6.14033098 130.6095199 -6.28122038 125.19844486 -6.50878906 119.78466797 C-7.94470725 84.73889801 -7.94470725 84.73889801 -3.07110596 76.89584351 C1.51105024 72.46625471 6.56008221 70.3473859 12.6493988 68.71795654 C16.05376331 67.6781435 18.32665486 65.98804677 21.125 63.8125 C21.94355469 63.19117188 22.76210937 62.56984375 23.60546875 61.9296875 C35.15592961 53.0228391 35.15592961 53.0228391 40.6875 40.0625 C40.39640929 34.68771803 36.76085541 31.48890643 33 28 C32.51861572 27.5447998 32.03723145 27.08959961 31.54125977 26.62060547 C26.81629215 22.33525022 21.67747642 19.35729806 16.0625 16.375 C15.20720703 15.9109375 14.35191406 15.446875 13.47070312 14.96875 C8.3627 12.21019453 3.20541929 9.5695349 -2 7 C-1.125 2.25 -1.125 2.25 0 0 Z";
    const logoPath3 = "M0 0 C0.33 0 0.66 0 1 0 C1 58.74 1 117.48 1 178 C-1.64 178 -4.28 178 -7 178 C-7.33 127.84 -7.66 77.68 -8 26 C-14.44388168 35.01971775 -14.44388168 35.01971775 -20.8828125 44.04296875 C-25.88396171 51.05677557 -30.91811111 58.04434202 -36 65 C-39.65316671 63.75023244 -40.78065836 63.32901247 -43 60 C-37.58658202 52.39921899 -32.15282145 44.81356298 -26.6875 37.25 C-26.14504639 36.49928223 -25.60259277 35.74856445 -25.04370117 34.97509766 C-22.20654396 31.04992664 -19.36746714 27.12615018 -16.52734375 23.203125 C-15.39314597 21.63547686 -14.25902987 20.06776961 -13.125 18.5 C-12.58222412 17.75024902 -12.03944824 17.00049805 -11.48022461 16.22802734 C-7.97758492 11.38088003 -4.53523203 6.49982135 -1.171875 1.5546875 C-0.78515625 1.04164062 -0.3984375 0.52859375 0 0 Z";

    return (
        <div className={`flex items-center justify-center ${className}`}>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="relative"
                    >
                        <svg
                            width={currentSize.width}
                            height={currentSize.height}
                            viewBox="0 0 244 218"
                            className="overflow-visible"
                        >
                            <defs>
                                <linearGradient id={`formationGradient-${mode}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor={isRecruiter ? "#B91C1C" : "#1E40AF"} />
                                    <stop offset="50%" stopColor={isRecruiter ? "#991B1B" : "#1E3A8A"} />
                                    <stop offset="100%" stopColor={isRecruiter ? "#0F172A" : "#0F172A"} />
                                </linearGradient>
                            </defs>

                            {/* Background */}
                            <motion.path
                                d={logoPath1}
                                fill="#FEFEFE"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{
                                    pathLength: animationPhase === 'forming' ? 1 : 1,
                                    opacity: animationPhase === 'forming' ? 1 : 1
                                }}
                                transition={{
                                    pathLength: { duration: 0.5, ease: "easeInOut" },
                                    opacity: { duration: 0.3, ease: "easeInOut" }
                                }}
                            />

                            {/* Letter A */}
                            <motion.path
                                d={logoPath2}
                                fill={`url(#formationGradient-${mode})`}
                                transform="translate(127,27)"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{
                                    pathLength: animationPhase === 'forming' ? 1 : 1,
                                    opacity: animationPhase === 'forming' ? 1 : 1
                                }}
                                transition={{
                                    pathLength: { duration: 0.7, delay: 0.2, ease: "easeInOut" },
                                    opacity: { duration: 0.3, delay: 0.2, ease: "easeInOut" }
                                }}
                            />

                            {/* Letter P */}
                            <motion.path
                                d={logoPath3}
                                fill={`url(#formationGradient-${mode})`}
                                transform="translate(115,21)"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{
                                    pathLength: animationPhase === 'forming' ? 1 : 1,
                                    opacity: animationPhase === 'forming' ? 1 : 1
                                }}
                                transition={{
                                    pathLength: { duration: 0.7, delay: 0.5, ease: "easeInOut" },
                                    opacity: { duration: 0.3, delay: 0.5, ease: "easeInOut" }
                                }}
                            />
                        </svg>

                        {/* Completion glow effect */}
                        <AnimatePresence>
                            {animationPhase === 'complete' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 0.3, scale: 1.2 }}
                                    exit={{ opacity: 0, scale: 1.5 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className={`absolute inset-0 rounded-full blur-xl ${isRecruiter
                                            ? 'bg-gradient-to-br from-red-500 to-red-600'
                                            : 'bg-gradient-to-br from-blue-500 to-blue-600'
                                        }`}
                                />
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
} 