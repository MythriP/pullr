'use client';

import { useRouter } from 'next/navigation';

interface FeedbackDialogProps {
    mode: 'jobseeker' | 'recruiter';
}

export default function FeedbackDialog({ mode }: FeedbackDialogProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push('/contact');
    };

    return (
        <button
            onClick={handleClick}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105 ${mode === 'jobseeker'
                ? 'bg-yellow-600 hover:bg-yellow-700'
                : 'bg-blue-600 hover:bg-blue-700'
                }`}
        >
            Send Feedback
        </button>
    );
} 