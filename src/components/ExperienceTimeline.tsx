'use client';

import { motion } from 'framer-motion';
import { TimelineItem } from '@/types';

interface ExperienceTimelineProps {
  items: TimelineItem[];
}

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="relative border-l border-card-border ml-3 md:ml-6 space-y-12">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8 md:pl-12"
        >
          {/* Dot indicator */}
          <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-accent shadow-[0_0_10px_var(--cyan-accent)]" />
          
          <div className="glass p-6 rounded-2xl relative overflow-hidden group hover:border-cyan-accent/30 hover:shadow-[0_0_20px_var(--color-glow)] transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-accent/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-cyan-accent/10" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-magenta-accent font-medium">{item.company}</p>
              </div>
              <span className="text-sm text-foreground/50 mt-1 md:mt-0 px-3 py-1 bg-foreground/5 rounded-full border border-card-border w-fit font-medium">
                {item.period}
              </span>
            </div>
            
            <p className="text-foreground/75 leading-relaxed mb-6">
              {item.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-md bg-foreground/5 text-foreground/80 border border-card-border font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
