'use client';

import { motion } from 'framer-motion';
import { User, Building } from 'lucide-react';

interface ModeToggleProps {
    mode: 'jobseeker' | 'recruiter';
    onModeChange: (mode: 'jobseeker' | 'recruiter') => void;
}

export default function ModeToggle({ mode, onModeChange }: ModeToggleProps) {
    return (
        <div className="glass-card p-1">
            <div className="relative flex items-center">
                <motion.div
                    className={`absolute inset-y-0 w-1/2 rounded-full shadow-lg ${mode === 'jobseeker'
                            ? 'bg-gradient-to-r from-green-600 to-green-400'
                            : 'bg-gradient-to-r from-amber-600 to-amber-400'
                        }`}
                    animate={{
                        x: mode === 'jobseeker' ? 0 : '100%',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />

                <button
                    onClick={() => onModeChange('jobseeker')}
                    className={`relative z-10 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-colors ${mode === 'jobseeker' ? 'text-white' : 'text-gray-300 hover:text-white'
                        }`}
                >
                    <User size={16} />
                    Job Seeker
                </button>

                <button
                    onClick={() => onModeChange('recruiter')}
                    className={`relative z-10 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-colors ${mode === 'recruiter' ? 'text-white' : 'text-gray-300 hover:text-white'
                        }`}
                >
                    <Building size={16} />
                    Recruiter
                </button>
            </div>
        </div>
    );
} 