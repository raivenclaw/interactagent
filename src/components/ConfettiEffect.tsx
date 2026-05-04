'use client';

import { useEffect, useState } from 'react';

interface Piece {
  id: number;
  left: number;
  top: number;
  width: number;
  height: number;
  color: string;
  rounded: boolean;
  duration: number;
  delay: number;
}

const COLORS = ['#8B1A10', '#10B981', '#F59E0B', '#6366F1', '#EC4899'];

export function ConfettiEffect({ x, y, trigger }: { x: number; y: number; trigger: number }) {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    if (trigger === 0) return;
    const newPieces: Piece[] = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      left: x + Math.random() * 100 - 50,
      top: y - 20,
      width: Math.random() * 8 + 4,
      height: Math.random() * 8 + 4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rounded: Math.random() > 0.5,
      duration: Math.random() * 0.6 + 0.8,
      delay: Math.random() * 0.2,
    }));
    setPieces(newPieces);
    const timer = setTimeout(() => setPieces([]), 1500);
    return () => clearTimeout(timer);
  }, [trigger, x, y]);

  return (
    <>
      {pieces.map((p) => (
        <div
          key={p.id}
          className="fixed z-[800] pointer-events-none animate-confetti-fall"
          style={{
            left: p.left,
            top: p.top,
            width: p.width,
            height: p.height,
            backgroundColor: p.color,
            borderRadius: p.rounded ? '50%' : '2px',
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </>
  );
}

export function spawnConfettiAt(
  setConfetti: (val: { x: number; y: number; trigger: number }) => void,
  x: number,
  y: number
) {
  setConfetti({ x, y, trigger: Date.now() });
}
