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
    <div className="relative bg-[#0A0A0A] rounded-md p-4 my-2.5 overflow-x-auto">
      <button
        onClick={handleCopy}
        className={`absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-md border transition-colors ${
          copied
            ? 'border-green-500/40 text-green-400'
            : 'border-white/10 text-white/60 hover:text-white/90 hover:border-white/20'
        }`}
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
      <pre className="text-[#E5E5E5] text-[0.82rem] leading-relaxed whitespace-pre-wrap break-words font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
}
