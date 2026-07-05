'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-accent to-magenta-accent origin-left z-[100] shadow-[0_1px_10px_rgba(0,240,255,0.3)] pointer-events-none"
      style={{ scaleX }}
    />
  );
}
