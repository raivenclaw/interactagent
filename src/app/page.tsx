'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PersonaCard } from '@/components/PersonaCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
    <div className="min-h-dvh flex flex-col justify-center px-6 py-10 max-w-[440px] mx-auto">
      <Badge variant="secondary" className="w-fit text-primary text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider">
        Free Micro-Course
      </Badge>

      <h1 className="text-[2.4rem] sm:text-[3rem] font-extrabold tracking-tighter leading-none mb-2">
        Claude Code<br />for Dummies
      </h1>
      <p className="text-[1.1rem] text-muted-foreground font-medium mb-10">But Actually Useful</p>

      <p className="text-[0.85rem] font-semibold text-muted-foreground uppercase tracking-wider mb-4">Who are you?</p>

      <div className="flex flex-col gap-3 w-full mb-6">
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

      <Card className="bg-emerald-50/50 border-emerald-200/60 mb-8 animate-fade-up">
        <CardContent>
          <p className="text-[0.88rem] leading-relaxed text-emerald-800">
            Perfect. We&apos;ll teach you to automate your store, research competitors, write product copy, and build your AI toolkit — one bite at a time.
          </p>
        </CardContent>
      </Card>

      <Button
        onClick={handleStart}
        className="w-full h-14 text-base font-bold rounded-xl bg-primary text-primary-foreground shadow-[0_4px_14px_rgba(139,26,16,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(139,26,16,0.35)] hover:bg-primary/90 active:translate-y-0 transition-all"
      >
        Start Learning
      </Button>
    </div>
  );
}
