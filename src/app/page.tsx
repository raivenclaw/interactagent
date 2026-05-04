'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PersonaCard } from '@/components/PersonaCard';
import { loadState, saveState } from '@/lib/store';

export default function WelcomePage() {
  const router = useRouter();
  const [persona, setPersona] = useState('d2c');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const state = loadState();
    if (state.onboarded) {
      router.replace('/learn');
    }
  }, [router]);

  if (!mounted) return null;

  const handleStart = () => {
    const state = loadState();
    state.onboarded = true;
    state.persona = persona;
    saveState(state);
    router.push('/learn');
  };

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6 py-10 text-center">
      <div className="inline-flex items-center gap-1.5 bg-red-50 text-deep-red text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider">
        Free Micro-Course
      </div>

      <h1 className="text-[2rem] sm:text-[2.6rem] font-extrabold leading-[1.15] mb-2">
        Claude Code<br />for Dummies
      </h1>
      <p className="text-[1.1rem] text-muted font-medium mb-10">But Actually Useful</p>

      <p className="text-[0.85rem] font-semibold text-muted uppercase tracking-wider mb-4">Who are you?</p>

      <div className="flex flex-col gap-3 w-full max-w-[380px] mb-6">
        <PersonaCard
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>}
          label="D2C Ecom Founder"
          selected={persona === 'd2c'}
          onClick={() => setPersona('d2c')}
        />
        <PersonaCard
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M3 9h6"/></svg>}
          label="Agency Founder"
          disabled
        />
        <PersonaCard
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></svg>}
          label="Sales Leader"
          disabled
        />
      </div>

      <div className="max-w-[380px] bg-emerald-50 rounded-[14px] px-5 py-4 text-[0.88rem] leading-relaxed text-emerald-800 text-left mb-8 animate-fade-up">
        Perfect. We&apos;ll teach you to automate your store, research competitors, write product copy, and build your AI toolkit — one bite at a time.
      </div>

      <button
        onClick={handleStart}
        className="bg-deep-red text-white text-base font-bold py-4 px-12 rounded-[14px] shadow-[0_4px_14px_rgba(139,26,16,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(139,26,16,0.35)] active:translate-y-0 transition-all w-full max-w-[380px]"
      >
        Start Learning
      </button>
    </div>
  );
}
