'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

interface Skill {
  name: string;
}

interface SkillGroup {
  category: string;
  description: string;
  skills: Skill[];
  color: 'cyan' | 'magenta' | 'green';
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Backend Architecture',
    description: 'Building high-performance, robust, and scalable systems integrations.',
    color: 'cyan',
    skills: [
      { name: 'Golang' },
      { name: 'Python' },
      { name: 'FastAPI' },
      { name: 'NestJS' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'Redis' },
      { name: 'WebSockets' },
    ],
  },
  {
    category: 'AI & Machine Learning',
    description: 'Designing neural networks, data systems, and integration pipelines.',
    color: 'magenta',
    skills: [
      { name: 'TensorFlow' },
      { name: 'PyTorch' },
      { name: 'LangChain' },
      { name: 'Scikit-Learn' },
      { name: 'OpenCV' },
      { name: 'LLM Agents' },
      { name: 'Data Pipeline' },
      { name: 'Model Opt.' },
    ],
  },
  {
    category: 'DevOps & Tooling',
    description: 'Ensuring seamless workflow automation, containerization, and execution.',
    color: 'green',
    skills: [
      { name: 'Docker' },
      { name: 'Microservices' },
      { name: 'Linux SysAdmin' },
      { name: 'Git & Workflows' },
      { name: 'CI/CD Pipelines' },
      { name: 'Next.js / React' },
      { name: 'TypeScript' },
      { name: 'LSL (Metaverse)' },
    ],
  },
];

// Helper to render custom inline SVG brand logos
function TechIcon({ name }: { name: string }) {
  const size = "w-5 h-5";
  
  switch (name) {
    case 'Golang':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 1.25c-5.96 0-10.79 4.83-10.79 10.79s4.83 10.79 10.79 10.79 10.79-4.83 10.79-10.79S18 1.25 12.04 1.25zm.04 3.7c1.78 0 3.23 1.45 3.23 3.23s-1.45 3.23-3.23 3.23-3.23-1.45-3.23-3.23 1.45-3.23 3.23-3.23zm-5.18 10.15c0-.98.8-1.78 1.78-1.78s1.78.8 1.78 1.78c0 .98-.8 1.78-1.78 1.78s-1.78-.8-1.78-1.78zm10.37 0c0-.98.8-1.78 1.78-1.78s1.78.8 1.78 1.78c0 .98-.8 1.78-1.78 1.78s-1.78-.8-1.78-1.78z" fill="#00ADD8" />
        </svg>
      );
    case 'Python':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C7.03 2 6.5 4.14 6.5 5.5v2.25h5.5v1H6.5c-2.48 0-4.5 1.52-4.5 4s2.02 4 4.5 4h1.25v-2.25c0-2.48 2.02-4.5 4.5-4.5h3.25V7.75h-5.5V6.5C10 4.14 10.5 2 12.5 2h3.25v2.25h-3.25c-.69 0-1.25.56-1.25 1.25v1H16.5c2.48 0 4.5-1.52 4.5-4s-2.02-4-4.5-4h-4.5z" fill="#3776AB" stroke="none" />
          <path d="M12 22c4.97 0 5.5-2.14 5.5-3.5v-2.25h-5.5v-1h5.5c2.48 0 4.5-1.52 4.5-4s-2.02-4-4.5-4h-1.25v2.25c0 2.48-2.02 4.5-4.5 4.5H9v2.25h5.5v1.25c0 2.36-.5 4.5-2.5 4.5H8.75V19.75h3.25c.69 0 1.25-.56 1.25-1.25v-1H7.5c-2.48 0-4.5 1.52-4.5 4s2.02 4 4.5 4h4.5z" fill="#FFE873" stroke="none" />
        </svg>
      );
    case 'FastAPI':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#059669" stroke="none" />
        </svg>
      );
    case 'NestJS':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm6 13l-6 3-6-3V9l6-3 6 3v6z" fill="#E0234E" />
          <path d="M12 7.5L7.5 10v4l4.5 2.5 4.5-2.5v-4L12 7.5z" fill="#ffffff" />
        </svg>
      );
    case 'PostgreSQL':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" fill="#336791" />
        </svg>
      );
    case 'MongoDB':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C9 5 8 9 8 13c0 3.31 2.69 6 6 6s6-2.69 6-6c0-4-1-8-4-11zm-1 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" fill="#47A248" />
        </svg>
      );
    case 'Redis':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="#DC382D" stroke="currentColor" strokeWidth="1" />
        </svg>
      );
    case 'WebSockets':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 2v20M17 5a8.5 8.5 0 0 0-10 0M21 9a14 14 0 0 0-18 0" stroke="#00F0FF" />
        </svg>
      );
    case 'TensorFlow':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7.5v11L12 24l10-5.5v-11L12 2zm0 4.4L18.5 10v7.6L12 21.2 5.5 17.6V10L12 6.4z" fill="#FF6F00" />
        </svg>
      );
    case 'PyTorch':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#EE4C2C" />
        </svg>
      );
    case 'LangChain':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="8" height="8" rx="2" fill="#38BDF8" stroke="none" />
          <rect x="13" y="5" width="8" height="8" rx="2" fill="#38BDF8" stroke="none" />
          <path d="M9 13h6" stroke="#38BDF8" strokeWidth="3" />
        </svg>
      );
    case 'Scikit-Learn':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="currentColor">
          <circle cx="6" cy="6" r="3" fill="#F7931E" />
          <circle cx="18" cy="18" r="4" fill="#0071BC" />
          <circle cx="14" cy="8" r="2.5" fill="#4E8C2F" />
        </svg>
      );
    case 'OpenCV':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <circle cx="12" cy="7" r="4" stroke="#e11d48" />
          <circle cx="7" cy="16" r="4" stroke="#16a34a" />
          <circle cx="17" cy="16" r="4" stroke="#2563eb" />
        </svg>
      );
    case 'LLM Agents':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="4" stroke="#FF00E5" />
          <circle cx="9" cy="10" r="1.5" fill="#FF00E5" stroke="none" />
          <circle cx="15" cy="10" r="1.5" fill="#FF00E5" stroke="none" />
          <path d="M8 15h8" stroke="#FF00E5" />
        </svg>
      );
    case 'Data Pipeline':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="#FF00E5" />
          <polygon points="19 4 21 6 19 8" fill="#FF00E5" stroke="none" />
          <polygon points="19 10 21 12 19 14" fill="#FF00E5" stroke="none" />
          <polygon points="19 16 21 18 19 20" fill="#FF00E5" stroke="none" />
        </svg>
      );
    case 'Model Opt.':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#FF00E5" />
          <line x1="12" y1="12" x2="16" y2="8" stroke="#FF00E5" strokeWidth="2.5" />
        </svg>
      );
    case 'Docker':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.9 11.23h-2.12v2.12h2.12v-2.12zm3.18 0h-2.12v2.12h2.12v-2.12zm-6.36 0H8.6v2.12h2.12v-2.12zm3.18-3.18h-2.12v2.12h2.12V8.05zm3.18 0h-2.12v2.12h2.12V8.05zm-6.36 0H8.6v2.12h2.12V8.05zm3.18-3.18h-2.12v2.12h2.12V4.87zm-6.36 6.36H5.42v2.12h2.12v-2.12zM23.95 13c-.45-.3-.95-.45-1.45-.45h-.22c-.65.05-1.3.3-1.8.75-.4-.45-1-.75-1.65-.75-.4 0-.8.1-1.15.3l-.3.15V9.45h-.22c-.5 0-1 .2-1.35.5-.3-.35-.75-.5-1.25-.5h-.22v2.1c0 1.25 1 2.25 2.25 2.25h7.25c1 0 1.95-.65 2.25-1.6.05-.15.15-.45.15-.75 0-.45-.15-.9-.42-1.2z" fill="#2496ED" />
        </svg>
      );
    case 'Microservices':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" stroke="#10B981" />
          <line x1="12" y1="2" x2="12" y2="22" stroke="#10B981" />
          <line x1="2" y1="8.5" x2="22" y2="15.5" stroke="#10B981" />
          <line x1="2" y1="15.5" x2="22" y2="8.5" stroke="#10B981" />
        </svg>
      );
    case 'Linux SysAdmin':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a5 5 0 0 0-5 5c0 2 1 3.5 2.5 4.5C8 12.5 7 14 7 16c0 2.5 2.24 5 5 5s5-2.5 5-5c0-2-1-3.5-2.5-4.5C16 10.5 17 9 17 7a5 5 0 0 0-5-5zm0 13c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#FCC624" />
        </svg>
      );
    case 'Git & Workflows':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="18" cy="18" r="3" stroke="#10B981" />
          <circle cx="6" cy="6" r="3" stroke="#10B981" />
          <circle cx="6" cy="18" r="3" stroke="#10B981" />
          <line x1="6" y1="9" x2="6" y2="15" stroke="#10B981" />
          <path d="M6 15a6 6 0 0 0 6-6V9a6 6 0 0 1 6-6" fill="none" stroke="#10B981" />
        </svg>
      );
    case 'CI/CD Pipelines':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 12a4.5 4.5 0 1 0-3 3.87M12 12a4.5 4.5 0 1 1 3 3.87" stroke="#10B981" />
        </svg>
      );
    case 'Next.js / React':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" fill="#000000" stroke="#ffffff" strokeWidth="1" />
          <path d="M16.5 16.5L11.5 9h-1v6h1V11.5l5 5z" fill="#ffffff" />
        </svg>
      );
    case 'TypeScript':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="currentColor">
          <rect width="20" height="20" x="2" y="2" rx="3" fill="#3178C6" />
          <text x="12" y="16" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="monospace">TS</text>
        </svg>
      );
    case 'LSL (Metaverse)':
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" stroke="#10B981" />
          <line x1="3" y1="12" x2="21" y2="12" stroke="#10B981" />
          <line x1="12" y1="3" x2="12" y2="21" stroke="#10B981" />
        </svg>
      );
    default:
      return (
        <div className="w-5 h-5 rounded bg-foreground/10 flex items-center justify-center text-[9px] font-bold font-mono">
          {name.substring(0, 2).toUpperCase()}
        </div>
      );
  }
}

export default function SkillsSection() {
  const getColorClasses = (color: 'cyan' | 'magenta' | 'green') => {
    switch (color) {
      case 'cyan':
        return {
          border: 'hover:border-cyan-accent/30',
          shadow: 'hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]',
          badgeBg: 'bg-cyan-accent/10 border-cyan-accent/20 text-cyan-accent',
          iconBg: 'bg-cyan-accent/5 border-cyan-accent/10 text-cyan-accent group-hover/skill:border-cyan-accent/40 group-hover/skill:shadow-[0_0_15px_rgba(0,240,255,0.2)]',
          glow: 'bg-cyan-accent/5',
        };
      case 'magenta':
        return {
          border: 'hover:border-magenta-accent/30',
          shadow: 'hover:shadow-[0_0_30px_rgba(255,0,229,0.15)]',
          badgeBg: 'bg-magenta-accent/10 border-magenta-accent/20 text-magenta-accent',
          iconBg: 'bg-magenta-accent/5 border-magenta-accent/10 text-magenta-accent group-hover/skill:border-magenta-accent/40 group-hover/skill:shadow-[0_0_15px_rgba(255,0,229,0.2)]',
          glow: 'bg-magenta-accent/5',
        };
      case 'green':
        return {
          border: 'hover:border-emerald-500/30',
          shadow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
          badgeBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500',
          iconBg: 'bg-emerald-500/5 border-emerald-500/10 text-emerald-500 group-hover/skill:border-emerald-500/40 group-hover/skill:shadow-[0_0_15px_rgba(16,185,129,0.2)]',
          glow: 'bg-emerald-500/5',
        };
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } }
  };

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" id="skills">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <SectionHeading
          title="Skills & Tech Stack"
          subtitle="Core technologies and specialized toolkits in my development stack."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 sm:mt-16">
          {skillGroups.map((group, groupIndex) => {
            const classes = getColorClasses(group.color);
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                className={`group relative glow-card glass p-6 sm:p-8 rounded-3xl border border-card-border overflow-hidden flex flex-col justify-between transition-all duration-500 ${classes.border} ${classes.shadow}`}
              >
                {/* Accent glow background bubble */}
                <div className={`absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl transition-opacity group-hover:opacity-100 opacity-60 pointer-events-none ${classes.glow}`} />

                <div className="relative z-10 w-full">
                  {/* Category Badge */}
                  <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${classes.badgeBg}`}>
                    {group.category}
                  </span>
                  
                  <p className="text-xs sm:text-sm text-foreground/50 mt-4 mb-6 sm:mb-8 font-medium">
                    {group.description}
                  </p>

                  {/* Skills Grid */}
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-2.5"
                  >
                    {group.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        className="group/skill flex items-center gap-2 p-2 rounded-xl bg-foreground/[0.02] border border-card-border hover:bg-foreground/[0.04] transition-all duration-300 select-none cursor-default"
                      >
                        {/* Custom Brand Logo */}
                        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-300 shrink-0 ${classes.iconBg}`}>
                          <TechIcon name={skill.name} />
                        </div>
                        <span className="text-[11px] sm:text-xs font-semibold text-foreground/80 group-hover/skill:text-foreground transition-colors truncate">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
