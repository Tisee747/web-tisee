'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Project } from '@/types';
import TechIcon from '@/components/TechIcon';

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Drag handlers
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const onDragEnd = (event: any, { offset, velocity }: any) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      handleNext();
    } else if (swipe > swipeConfidenceThreshold) {
      handlePrev();
    }
  };

  // Variants for animations
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-0 md:px-12 py-8 flex flex-col items-center">
      {/* Side Navigation Buttons (Desktop & Tablet) */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-[45%] -translate-y-1/2 z-20 w-11 h-11 rounded-full glass hidden sm:flex items-center justify-center text-foreground/70 hover:text-cyan-accent hover:border-cyan-accent/30 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
        aria-label="Previous Project"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-[45%] -translate-y-1/2 z-20 w-11 h-11 rounded-full glass hidden sm:flex items-center justify-center text-foreground/70 hover:text-cyan-accent hover:border-cyan-accent/30 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
        aria-label="Next Project"
      >
        <ChevronRight size={22} />
      </button>

      {/* Slider Viewport */}
      <div className="relative w-full overflow-hidden min-h-[460px] flex items-center justify-center px-4">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={onDragEnd}
            className="w-full cursor-grab active:cursor-grabbing select-none"
          >
            <div className="glow-card glass p-8 rounded-3xl flex flex-col justify-between h-full min-h-[420px] border border-card-border hover:border-cyan-accent/30 hover:shadow-[0_0_25px_var(--color-glow)] transition-all duration-300 relative overflow-hidden group">
              {/* Glow Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-accent/5 rounded-full blur-3xl transition-opacity group-hover:opacity-100 opacity-60 pointer-events-none" />

              <div>
                {/* Project Screenshot */}
                {(() => {
                  const imgs = projects[currentIndex].images || (projects[currentIndex].image ? [projects[currentIndex].image] : []);
                  if (imgs.length === 0) {
                    return (
                      <div className="relative w-full aspect-video md:h-[220px] rounded-xl border border-card-border/80 bg-black/10 dark:bg-white/5 overflow-hidden flex flex-col mb-6 select-none pointer-events-none group-hover:border-cyan-accent/20 transition-colors duration-300 shadow-sm">
                        <div className="flex-grow flex flex-col items-center justify-center bg-black/15 dark:bg-black/25 text-center p-4">
                          <span className="text-[11px] font-mono font-bold text-foreground/45 mb-0.5 uppercase tracking-wider">
                            [ Screenshot Preview ]
                          </span>
                          <span className="text-[10px] font-mono text-foreground/30">
                            {projects[currentIndex].title} homepage
                          </span>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div className="relative w-full aspect-video md:h-[220px] rounded-xl border border-card-border/80 overflow-hidden mb-6 select-none pointer-events-none group-hover:border-cyan-accent/20 transition-colors duration-300 shadow-sm bg-black/40">
                      <img 
                        src={imgs[0]} 
                        alt={`${projects[currentIndex].title} Preview`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })()}

                {/* Tags row */}
                <div className="flex flex-wrap gap-1.5 mb-3 pointer-events-none">
                  {projects[currentIndex].tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-cyan-accent/20 bg-cyan-accent/10 dark:bg-cyan-accent/5 text-cyan-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold font-heading text-foreground mb-3 group-hover:text-cyan-accent transition-colors duration-300 pointer-events-none">
                  {projects[currentIndex].title}
                </h3>

                {/* Description */}
                <p className="text-foreground/75 text-sm leading-relaxed mb-4 pointer-events-none">
                  {projects[currentIndex].description}
                </p>

                {/* Technologies stack row */}
                {projects[currentIndex].technologies && (
                  <div className="flex items-center gap-2.5 mb-5 select-none pointer-events-none">
                    <span className="text-[9px] font-bold text-foreground/40 uppercase tracking-wider">Stack:</span>
                    <div className="flex items-center gap-1.5">
                      {projects[currentIndex].technologies.map((tech) => (
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
              </div>

              {/* Action Footer */}
              <div className="flex items-center justify-end pt-4 border-t border-card-border/60 mt-auto">
                {projects[currentIndex].demoUrl && (
                  <Link
                    href={projects[currentIndex].demoUrl || '#'}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-bold text-cyan-accent hover:text-magenta-accent transition-colors duration-300 select-all"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink size={16} />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicators & Mobile Arrows */}
      <div className="flex items-center justify-between w-full mt-6 px-4">
        {/* Indicators */}
        <div className="flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-6 bg-cyan-accent' : 'w-2 bg-foreground/20'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Small Mobile-only Arrow Controls */}
        <div className="flex gap-2 sm:hidden">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-cyan-accent hover:border-cyan-accent/30 transition-all duration-300 shadow-sm"
            aria-label="Previous Project"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-cyan-accent hover:border-cyan-accent/30 transition-all duration-300 shadow-sm"
            aria-label="Next Project"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
