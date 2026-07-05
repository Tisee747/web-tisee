'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gradient inline-block">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-foreground/60 text-lg">
            {subtitle}
          </p>
        )}
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-accent to-magenta-accent mt-4 rounded-full" />
      </motion.div>
    </div>
  );
}
