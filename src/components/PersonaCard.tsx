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
    <button
      onClick={disabled ? undefined : onClick}
      className={`flex items-center gap-3.5 px-5 py-4 rounded-2xl border-2 bg-white text-left transition-all text-[0.95rem] font-semibold ${
        selected
          ? 'border-deep-red bg-red-50 shadow-[0_0_0_3px_rgba(139,26,16,0.15)]'
          : disabled
          ? 'border-card-border opacity-45 cursor-not-allowed'
          : 'border-card-border hover:border-deep-red/40'
      }`}
    >
      <span className="text-2xl">{icon}</span>
      <span>{label}</span>
      {disabled && (
        <span className="text-[0.7rem] font-bold text-muted bg-[#F0EFEC] px-2 py-0.5 rounded-lg ml-auto uppercase tracking-wider">
          Soon
        </span>
      )}
    </button>
  );
}
