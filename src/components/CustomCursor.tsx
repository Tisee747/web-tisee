'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 28, stiffness: 300, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const outerSpringConfig = { damping: 40, stiffness: 180, mass: 0.9 };
  const cursorXOuterSpring = useSpring(cursorX, outerSpringConfig);
  const cursorYOuterSpring = useSpring(cursorY, outerSpringConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: fine)').matches) {
      setEnabled(true);
    } else {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      {/* Outer glowing border ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-accent/30 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          x: cursorXOuterSpring,
          y: cursorYOuterSpring,
        }}
      />
      {/* Inner solid dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-accent to-magenta-accent pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_var(--cyan-accent)] pointer-events-none select-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
    </>
  );
}
