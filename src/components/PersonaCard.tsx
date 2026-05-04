'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PersonaCardProps {
  icon: React.ReactNode;
  label: string;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function PersonaCard({ icon, label, selected, disabled, onClick }: PersonaCardProps) {
  return (
    <Card
      onClick={disabled ? undefined : onClick}
      className={`flex-row items-center gap-3.5 px-5 py-4 border-2 transition-all text-[0.95rem] font-semibold ${
        selected
          ? 'border-primary bg-primary/5 shadow-[0_0_0_3px_rgba(139,26,16,0.12)] cursor-pointer'
          : disabled
          ? 'opacity-45 cursor-not-allowed'
          : 'hover:border-primary/40 cursor-pointer'
      }`}
    >
      <span className="text-2xl flex-shrink-0">{icon}</span>
      <span className="leading-tight">{label}</span>
      {disabled && (
        <Badge variant="secondary" className="text-[0.65rem] font-bold ml-auto uppercase tracking-wider">
          Soon
        </Badge>
      )}
    </Card>
  );
}
