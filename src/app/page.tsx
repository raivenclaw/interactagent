'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PersonaCard } from '@/components/PersonaCard';
import { Button } from '@/components/ui/button';
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
    <div className="min-h-dvh flex flex-col justify-center px-6 py-16 max-w-[440px] mx-auto">
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8">
        Free Micro-Course
      </span>

      <h1 className="text-[2.5rem] sm:text-[3.2rem] font-bold tracking-tight leading-[1.05] mb-2 text-foreground">
        Claude Code<br />for Dummies
      </h1>
      <p className="text-base text-muted-foreground mb-14">But Actually Useful</p>

      <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Who are you?</p>

      <div className="flex flex-col gap-3 w-full mb-8">
        <PersonaCard
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>}
          label="D2C Ecom Founder"
          selected={persona === 'd2c'}
          onClick={() => setPersona('d2c')}
        />
        <PersonaCard
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M3 9h6"/></svg>}
          label="Agency Founder"
          disabled
        />
        <PersonaCard
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></svg>}
          label="Sales Leader"
          disabled
        />
      </div>

      <div className="border-t border-border pt-6 mb-8 animate-fade-up">
        <p className="text-sm leading-relaxed text-muted-foreground">
          We&apos;ll teach you to automate your store, research competitors, write product copy, and build your AI toolkit — one bite at a time.
        </p>
      </div>

      <Button
        onClick={handleStart}
        className="w-full h-12 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 active:translate-y-0 transition-colors"
      >
        Start Learning
      </Button>
    </div>
  );
}
