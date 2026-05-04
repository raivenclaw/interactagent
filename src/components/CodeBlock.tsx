'use client';

import { useState } from 'react';

export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-charcoal rounded-xl p-4 my-2.5 overflow-x-auto">
      <button
        onClick={handleCopy}
        className={`absolute top-2.5 right-2.5 text-white text-[0.7rem] font-bold px-3 py-1 rounded-lg transition-all ${
          copied ? 'bg-emerald-500' : 'bg-deep-red hover:opacity-90'
        }`}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <pre className="text-cream text-[0.82rem] leading-relaxed whitespace-pre-wrap break-words font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
}
