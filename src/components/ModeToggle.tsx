'use client';

import { motion } from 'framer-motion';
import { User, Building } from 'lucide-react';

interface ModeToggleProps {
    mode: 'jobseeker' | 'recruiter';
    onModeChange: (mode: 'jobseeker' | 'recruiter') => void;
}

export default function ModeToggle({ mode, onModeChange }: ModeToggleProps) {
    return (
        <div className="p-1.5 rounded-2xl bg-white/90 backdrop-blur-lg border border-white/30 shadow-xl shadow-black/10">
            <div className="relative flex items-center">
                <motion.div
                    className={`absolute inset-y-0 w-1/2 rounded-xl shadow-lg ${mode === 'jobseeker'
                        ? 'bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 shadow-blue-700/30'
                        : 'bg-gradient-to-r from-red-700 via-red-900 to-slate-900 shadow-red-700/30'
                        }`}
                    animate={{
                        x: mode === 'jobseeker' ? 0 : '100%',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />

                <button
                    onClick={() => onModeChange('jobseeker')}
                    className={`relative z-10 flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${mode === 'jobseeker'
                        ? 'text-white'
                        : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-slate-900 hover:from-blue-800 hover:via-blue-950 hover:to-slate-900'
                        }`}
                >
                    <User size={16} />
                    <span>Job Seeker</span>
                </button>

                <button
                    onClick={() => onModeChange('recruiter')}
                    className={`relative z-10 flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${mode === 'recruiter'
                        ? 'text-white'
                        : 'text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-red-900 to-slate-900 hover:from-red-800 hover:via-red-950 hover:to-slate-900'
                        }`}
                >
                    <Building size={16} />
                    <span>Recruiter</span>
                </button>
            </div>
        </div>
    );
} 