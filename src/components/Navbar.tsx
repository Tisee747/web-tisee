'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';
import { useTheme, AccentTheme } from './ThemeProvider';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Skills', path: '/#skills' },
  { name: 'Projects', path: '/#projects' },
  { name: 'Contact', path: '/#contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState('');
  const [mounted, setMounted] = useState(false);
  const { accentTheme, setAccentTheme } = useTheme();

  const themes: AccentTheme[] = ['cyberpunk', 'matrix', 'retro', 'nebula'];

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(accentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setAccentTheme(themes[nextIndex]);
  };

  // Monitor the hash change on scroll
  useEffect(() => {
    setMounted(true);
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Also handle scroll to update active hash based on viewport
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      let currentSection = '';

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = `#${sectionId}`;
            break;
          }
        }
      }

      if (currentSection) {
        setActiveHash(currentSection);
      } else if (window.scrollY < 100 && pathname === '/') {
        setActiveHash('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  if (!mounted) return null;

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto">
      <nav className="glass px-3 sm:px-6 py-2 rounded-full flex items-center justify-center gap-2 sm:gap-4 shadow-lg backdrop-blur-md">
        {navLinks.map((link) => {
          // Check if link is active
          // For Home: must be path '/' and no hash
          // For Projects: path '/projects'
          // For hash links: path '/' and matching hash
          let isActive = false;
          if (link.path === '/') {
            isActive = pathname === '/' && activeHash === '';
          } else if (link.path.startsWith('/#')) {
            const hash = link.path.substring(1); // e.g. "#about"
            isActive = pathname === '/' && activeHash === hash;
          } else {
            isActive = pathname === link.path;
          }

          return (
            <Link
              key={link.name}
              href={link.path}
              className={`relative py-1.5 px-2 sm:px-3 rounded-full text-[10px] sm:text-sm font-medium transition-colors duration-300 hover:text-cyan-accent ${
                isActive ? 'text-cyan-accent' : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-full -z-10 shadow-sm"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {link.name}
            </Link>
          );
        })}

        {/* Paint Palette Cycle Theme Button */}
        <button
          onClick={cycleTheme}
          className="relative p-1.5 rounded-full hover:bg-foreground/5 text-foreground/75 hover:text-cyan-accent transition-colors cursor-pointer select-none ml-1 flex items-center justify-center shrink-0"
          title={`Cycle Accent Theme (Active: ${accentTheme})`}
        >
          <Palette size={14} className="sm:w-[16px] sm:h-[16px]" />
          <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-cyan-accent" />
        </button>
      </nav>
    </div>
  );
}
