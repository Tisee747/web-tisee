'use client';

import { useRef, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Project, ProjectTag } from '@/types';
import TechIcon from '@/components/TechIcon';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const getTagColor = (tag: ProjectTag) => {
  switch (tag) {
    case 'Backend':
      return 'text-cyan-accent border-cyan-accent/20 bg-cyan-accent/10 dark:bg-cyan-accent/5';
    case 'AI':
      return 'text-magenta-accent border-magenta-accent/20 bg-magenta-accent/10 dark:bg-magenta-accent/5';
    case 'Fullstack':
      return 'text-foreground/90 border-foreground/15 bg-gradient-to-r from-cyan-accent/10 to-magenta-accent/10 dark:from-cyan-accent/5 dark:to-magenta-accent/5';
    default:
      return 'text-foreground/80 border-card-border bg-white/5';
  }
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glow-card glass rounded-3xl p-6 flex flex-col h-full group transition-all duration-300 relative overflow-hidden"
    >
      {/* Dynamic Spotlight Glow */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(255,255,255,0.06), transparent 40%)`
        }}
      />

      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-accent/5 to-magenta-accent/5 rounded-full blur-2xl -mr-16 -mt-16 opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Browser Screenshot Mockup Window */}
      <div className="relative w-full aspect-video rounded-xl border border-card-border/80 bg-black/10 dark:bg-white/5 overflow-hidden flex flex-col mb-5 select-none pointer-events-none group-hover:border-cyan-accent/20 transition-colors duration-300 shadow-sm">
        {/* Browser Top Bar Controls */}
        <div className="bg-foreground/5 border-b border-card-border/60 px-3 py-2 flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>
        
        {/* Screenshot / Placeholder Area */}
        <div className="flex-grow flex flex-col items-center justify-center bg-black/15 dark:bg-black/25 text-center p-4">
          {project.image ? (
            <img 
              src={project.image} 
              alt={`${project.title} Preview`}
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <div className="flex flex-col items-center justify-center">
              <span className="text-[11px] font-mono font-bold text-foreground/45 mb-0.5 uppercase tracking-wider">
                [ Screenshot Preview ]
              </span>
              <span className="text-[10px] font-mono text-foreground/30">
                {project.title} homepage
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Tags row */}
      <div className="flex flex-wrap gap-1.5 mb-3.5 pointer-events-none">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`text-[9px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${getTagColor(tag)}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Project Title */}
      <h3 className="text-lg font-heading font-extrabold text-foreground mb-2 group-hover:text-cyan-accent transition-colors duration-300 pointer-events-none">
        {project.title}
      </h3>
      
      {/* Project Description */}
      <p className="text-foreground/75 text-xs sm:text-sm leading-relaxed mb-4 flex-grow pointer-events-none">
        {project.description}
      </p>

      {/* Technologies stack row */}
      {project.technologies && (
        <div className="flex items-center gap-2.5 mb-5">
          <span className="text-[9px] font-bold text-foreground/40 uppercase tracking-wider">Stack:</span>
          <div className="flex items-center gap-1.5">
            {project.technologies.map((tech) => (
              <div 
                key={tech} 
                className="w-6.5 h-6.5 rounded-full border border-card-border/80 bg-foreground/5 flex items-center justify-center text-foreground/60 hover:text-cyan-accent hover:border-cyan-accent/30 transition-all duration-300 hover:scale-105"
                title={tech}
              >
                <TechIcon tech={tech} className="w-3.5 h-3.5" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Footer */}
      <div className="flex items-center justify-end gap-4 pt-4 border-t border-card-border/60 mt-auto">
        {project.repoUrl && (
          <Link
            href={project.repoUrl}
            target="_blank"
            className="text-foreground/50 hover:text-foreground transition-colors flex items-center gap-1.5 text-xs font-bold"
          >
            <GithubIcon />
            <span>Code</span>
          </Link>
        )}
        {project.demoUrl && (
          <Link
            href={project.demoUrl}
            target="_blank"
            className="text-foreground/50 hover:text-cyan-accent transition-colors flex items-center gap-1 text-xs font-bold"
          >
            <ExternalLink size={14} />
            <span>Live</span>
          </Link>
        )}
      </div>
      </div>
    </motion.div>
  );
}
