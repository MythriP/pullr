'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface FeedbackDialogProps {
    mode: 'jobseeker' | 'recruiter';
}

export default function FeedbackDialog({ mode }: FeedbackDialogProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push('/contact');
    };

    return (
        <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 overflow-hidden ${mode === 'jobseeker'
                ? 'bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 hover:from-blue-800 hover:via-blue-950 hover:to-slate-900 shadow-lg shadow-blue-700/25 hover:shadow-blue-700/40'
                : 'bg-gradient-to-r from-red-700 via-red-900 to-slate-900 hover:from-red-800 hover:via-red-950 hover:to-slate-900 shadow-lg shadow-red-700/25 hover:shadow-red-700/40'
                }`}
        >
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${mode === 'jobseeker'
                ? 'bg-gradient-to-r from-blue-800/20 via-blue-950/20 to-slate-900/20'
                : 'bg-gradient-to-r from-red-800/20 via-red-950/20 to-slate-900/20'
                }`}></div>

            {/* Content */}
            <div className="relative z-10 flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/90">
                    Send Feedback
                </span>
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
        </motion.button>
    );
} 