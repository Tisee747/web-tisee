'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import { Project, ProjectTag } from '@/types';

type FilterType = 'All' | ProjectTag;

const filterCategories: FilterType[] = ['All', 'Backend', 'AI', 'Fullstack'];

interface ProjectsClientProps {
  projects: Project[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  // Filter projects based on selection
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <div className="relative w-full min-h-screen dot-grid overflow-hidden">
      {/* Animated Background Grid Horizon */}
      <div className="absolute top-0 left-0 w-full h-[300px] grid-perspective pointer-events-none overflow-hidden">
        <div className="grid-floor absolute inset-0 w-full h-[500px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>

      {/* Background Glowing Blobs - Seamless & Continuous */}
      <div className="blob bg-magenta-accent w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] top-[5%] left-[-10%] opacity-20 pointer-events-none" />
      <div className="blob bg-cyan-accent w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] bottom-[15%] right-[-5%] opacity-25 [animation-delay:3s] pointer-events-none" />
      <div className="blob bg-magenta-accent w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] top-[40%] right-[10%] opacity-15 [animation-delay:6s] pointer-events-none" />

      {/* Digital Rain / Vertical Code Lines Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.25] dark:opacity-[0.4] overflow-hidden select-none flex justify-around z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={`rain-${i}`} 
            className={`w-[1px] h-[200%] bg-gradient-to-b from-transparent ${i % 3 === 0 ? 'via-magenta-accent' : 'via-cyan-accent'} to-transparent animate-rain`}
            style={{
              animationDelay: `${(i % 5) * 1.5 + (i % 3) * 0.7}s`,
              animationDuration: `${10 + (i % 7) * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl relative z-10">
        <SectionHeading 
          title="Projects Showcase" 
          subtitle="Explore all my software integrations, from backend architectures to machine learning pipelines."
        />

        {/* Categories Filter Tabs */}
        <div className="flex flex-wrap justify-start items-center gap-2 mt-8 mb-12 border-b border-card-border pb-4">
          {filterCategories.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'text-cyan-accent' 
                    : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-filter-pill"
                    className="absolute inset-0 bg-cyan-accent/10 border border-cyan-accent/30 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {filter}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
