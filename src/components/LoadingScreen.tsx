'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600); // 1.6 seconds loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] bg-[#030303] flex flex-col items-center justify-center select-none"
        >
          {/* Glowing central monogram */}
          <div className="relative flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-accent to-magenta-accent p-[1px] shadow-[0_0_40px_rgba(0,240,255,0.25)]"
            >
              <div className="w-full h-full rounded-2xl bg-[#030303] flex items-center justify-center">
                <span className="text-3xl font-heading font-black tracking-tighter bg-gradient-to-r from-cyan-accent to-magenta-accent bg-clip-text text-transparent">
                  T
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-sm font-heading font-extrabold tracking-[0.3em] uppercase text-foreground/80 mt-2"
            >
              Tisee Portfolio
            </motion.h2>

            {/* Smooth progress line */}
            <div className="w-36 h-[2px] bg-white/5 rounded-full overflow-hidden mt-4 relative">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-accent to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
