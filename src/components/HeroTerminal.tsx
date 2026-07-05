'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalLine {
  text: string;
  type: 'command' | 'output';
  delay: number;
}

export default function HeroTerminal() {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);
  
  const terminalLines: TerminalLine[] = [
    { text: 'whoami', type: 'command', delay: 500 },
    { text: 'tisee (Backend & AI Specialist)', type: 'output', delay: 1200 },
    { text: 'cat focus.txt', type: 'command', delay: 1800 },
    { text: 'Architecting REST APIs, AI chatbots (Llama 3/RAG), and metaverse systems.', type: 'output', delay: 2500 },
    { text: 'npm run dev --portfolio', type: 'command', delay: 3500 },
    { text: '✓ Compiled successfully. Ready to build something epic together!', type: 'output', delay: 4200 },
  ];

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    terminalLines.forEach((line) => {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, line.delay);
      timers.push(timer);
    });
    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="glass w-full max-w-xl mx-auto rounded-xl overflow-hidden border border-card-border/80 shadow-2xl text-left font-mono text-sm"
    >
      {/* Terminal Title Bar */}
      <div className="bg-foreground/5 border-b border-card-border/60 px-4 py-3 flex items-center justify-between select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-xs text-foreground/50 select-none">tisee@terminal:~</span>
        <div className="w-12" /> {/* spacer */}
      </div>

      {/* Terminal Content */}
      <div className="p-5 space-y-3 min-h-[220px] max-h-[300px] overflow-y-auto bg-black/20 dark:bg-black/40 text-foreground/90 leading-relaxed">
        {visibleLines.map((line, index) => (
          <div key={index} className="flex flex-col">
            {line.type === 'command' ? (
              <div className="flex items-center gap-2 text-cyan-accent">
                <span className="text-magenta-accent font-bold">$</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 'auto' }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  {line.text}
                </motion.span>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="pl-4 text-foreground/80"
              >
                {line.text}
              </motion.div>
            )}
          </div>
        ))}
        
        {/* Blinking cursor at the end */}
        <div className="flex items-center gap-2 text-cyan-accent pt-1">
          <span className="text-magenta-accent font-bold">$</span>
          <span className="w-2 h-4 bg-cyan-accent animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
}
