'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ContactCardProps {
  title: string;
  value: string;
  url: string;
  icon: ReactNode;
  delay?: number;
}

export default function ContactCard({ title, value, url, icon, delay = 0 }: ContactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <Link href={url} target="_blank" className="block h-full">
        <div className="glass p-6 rounded-2xl flex items-center gap-4 group hover:border-cyan-accent/40 hover:shadow-[0_0_20px_var(--color-glow)] transition-all duration-300 transform hover:-translate-y-1">
          <div className="w-12 h-12 rounded-full bg-foreground/5 border border-card-border flex items-center justify-center text-foreground/75 group-hover:text-cyan-accent group-hover:border-cyan-accent/30 transition-all duration-300">
            {icon}
          </div>
          <div>
            <h4 className="text-xs text-foreground/60 font-semibold uppercase tracking-wider mb-1">{title}</h4>
            <p className="text-foreground font-semibold text-sm sm:text-base group-hover:text-cyan-accent transition-colors duration-300 truncate max-w-[200px] sm:max-w-xs">
              {value}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
