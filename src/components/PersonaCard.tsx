'use client';

interface PersonaCardProps {
  icon: React.ReactNode;
  label: string;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function PersonaCard({ icon, label, selected, disabled, onClick }: PersonaCardProps) {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`flex items-center gap-3.5 px-5 py-4 border rounded-md transition-colors text-sm font-medium ${
        selected
          ? 'border-primary text-foreground'
          : disabled
          ? 'border-border opacity-40 cursor-not-allowed'
          : 'border-border hover:border-primary cursor-pointer'
      }`}
    >
      <span className="flex-shrink-0 text-muted-foreground">{icon}</span>
      <span className="leading-tight">{label}</span>
      {disabled && (
        <span className="ml-auto text-[0.65rem] font-medium text-muted-foreground uppercase tracking-widest">
          Soon
        </span>
      )}
    </div>
  );
}
