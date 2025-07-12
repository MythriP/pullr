'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

interface TransitionContextType {
    isTransitioning: boolean;
    animationStep: 'split' | 'merge' | 'zoom' | 'complete';
    triggerTransition: (mode?: 'jobseeker' | 'recruiter' | 'about' | 'contact') => void;
    transitionMode: 'jobseeker' | 'recruiter' | 'about' | 'contact';
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export function TransitionProvider({ children }: { children: React.ReactNode }) {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [animationStep, setAnimationStep] = useState<'split' | 'merge' | 'zoom' | 'complete'>('complete');
    const [transitionMode, setTransitionMode] = useState<'jobseeker' | 'recruiter' | 'about' | 'contact'>('jobseeker');

    const triggerTransition = useCallback((mode: 'jobseeker' | 'recruiter' | 'about' | 'contact' = 'jobseeker') => {
        setTransitionMode(mode);
        setIsTransitioning(true);
        setAnimationStep('split');

        // Animation sequence
        setTimeout(() => setAnimationStep('merge'), 300);
        setTimeout(() => setAnimationStep('zoom'), 800);
        setTimeout(() => {
            setAnimationStep('complete');
            setIsTransitioning(false);
        }, 1200);
    }, []);

    return (
        <TransitionContext.Provider value={{
            isTransitioning,
            animationStep,
            triggerTransition,
            transitionMode
        }}>
            {children}
        </TransitionContext.Provider>
    );
}

export function useTransition() {
    const context = useContext(TransitionContext);
    if (context === undefined) {
        throw new Error('useTransition must be used within a TransitionProvider');
    }
    return context;
} 