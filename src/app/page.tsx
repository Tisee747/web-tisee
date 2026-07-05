'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Hero3DWrapper from '@/components/Hero3DWrapper';
import ProjectCarousel from '@/components/ProjectCarousel';
import SkillsSection from '@/components/SkillsSection';
import { journeyData, projectsData } from '@/data/portfolioData';

export default function Home() {
  // Filter featured projects (only those with demo URLs)
  const featuredProjects = projectsData.filter(project => project.demoUrl);

  const getPolaroidCaption = (stage: string) => {
    switch (stage) {
      case 'SMP':
        return 'Lensza digital marketing ops, 2022 🌐';
      case 'SMK':
        return 'PT. Indonesia Indicator scraping logs, 2023 📊';
      case 'University':
        return 'Telkom Campus & Medusa Tech, 2026 ⚡';
      default:
        return 'Memory checkpoint';
    }
  };

  return (
    <div className="relative w-full overflow-x-hidden max-w-full min-h-screen dot-grid">
      {/* Background Glowing Blobs - Seamless & Continuous */}
      <div className="blob bg-cyan-accent w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] top-[5%] left-[-15%] opacity-35 pointer-events-none" />
      <div className="blob bg-magenta-accent w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] top-[30%] right-[-10%] opacity-20 [animation-delay:4s] pointer-events-none" />
      <div className="blob bg-cyan-accent w-[350px] h-[350px] sm:w-[700px] sm:h-[700px] bottom-[15%] left-[5%] opacity-25 [animation-delay:2s] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden" id="hero">
        <Hero3DWrapper />
        
        {/* Cyberpunk 3D perspective grid floor at the bottom of hero */}
        <div className="absolute bottom-0 left-0 w-full h-[350px] grid-perspective pointer-events-none overflow-hidden">
          <div className="grid-floor absolute inset-0 w-full h-[500px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="container mx-auto px-4 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-120px)] pt-12 max-w-6xl">
          {/* Left Column: Bio, Stats, Action buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-accent/20 bg-cyan-accent/10 text-cyan-accent text-xs font-semibold tracking-wider uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent animate-ping" />
              Welcome to my portfolio
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-foreground leading-[1.15]">
                Hello, I'm <br />
                <span className="text-gradient">Tisee.</span>
              </h1>
              <p className="text-lg sm:text-xl font-heading font-bold text-foreground/80 tracking-wide uppercase">
                Backend Engineer &amp; AI Specialist
              </p>
              <p className="text-sm sm:text-base text-foreground/60 leading-relaxed max-w-lg pt-2 font-medium">
                Versatile systems architect focusing on backend optimization, database engineering, and machine learning models integration. Informatics undergraduate student at Telkom University.
              </p>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-md border-t border-b border-card-border/40 py-5 my-2"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-xl sm:text-2xl font-heading font-black text-cyan-accent">3.66</span>
                <span className="text-[10px] sm:text-xs font-semibold text-foreground/45 uppercase tracking-wider">Current GPA</span>
              </div>
              <div className="flex flex-col gap-0.5 border-l border-r border-card-border/40 px-4 sm:px-6">
                <span className="text-xl sm:text-2xl font-heading font-black text-magenta-accent">10+</span>
                <span className="text-[10px] sm:text-xs font-semibold text-foreground/45 uppercase tracking-wider">Projects Done</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xl sm:text-2xl font-heading font-black text-emerald-500">3+ Yrs</span>
                <span className="text-[10px] sm:text-xs font-semibold text-foreground/45 uppercase tracking-wider">Coding Exp</span>
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mt-2"
            >
              <a
                href="/resume.pdf"
                download="Tisee_Resume.pdf"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full glass border border-card-border hover:border-cyan-accent/30 text-sm font-semibold text-foreground/80 hover:text-foreground hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Download size={16} className="group-hover:translate-y-[1px] transition-transform duration-300 text-cyan-accent" />
                <span>Download Resume</span>
              </a>
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-card-border hover:border-cyan-accent/40 text-sm font-semibold text-foreground/80 hover:text-foreground transition-all duration-300"
              >
                <span>Let's Talk</span>
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Cyberpunk profile photo frame */}
          <div className="lg:col-span-5 flex justify-center items-center relative w-full h-full max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full aspect-square rounded-3xl overflow-hidden glass p-4 border border-card-border hover:border-cyan-accent/20 transition-all duration-500 group shadow-2xl hover:shadow-[0_0_40px_rgba(0,240,255,0.15)]"
            >
              {/* Decorative Tech frame corners */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-accent/50 group-hover:border-cyan-accent transition-colors duration-300" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-accent/50 group-hover:border-cyan-accent transition-colors duration-300" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-accent/50 group-hover:border-cyan-accent transition-colors duration-300" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-accent/50 group-hover:border-cyan-accent transition-colors duration-300" />
              
              {/* Background gradient grid effect behind image */}
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-tr from-cyan-accent/10 via-transparent to-magenta-accent/10 opacity-70" />

              <div className="w-full h-full rounded-2xl overflow-hidden relative border border-card-border bg-black/40">
                <img
                  src="/profile.png"
                  alt="Tisee Portrait"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Melted Journey Section (About + Experience Combined chronologically) */}
      <section className="py-32 relative overflow-hidden" id="about">
        {/* Animated Background Tech Alignments Drawing */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.09] dark:opacity-[0.14] flex items-center justify-center overflow-hidden">
          <svg className="w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] animate-[spin_100s_linear_infinite] text-foreground" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="42" strokeWidth="0.3" strokeDasharray="2 4" />
            <circle cx="50" cy="50" r="30" strokeWidth="0.3" strokeDasharray="1 3" />
            <circle cx="50" cy="50" r="18" strokeWidth="0.2" />
            <line x1="50" y1="5" x2="50" y2="95" strokeWidth="0.15" strokeDasharray="2 2" />
            <line x1="5" y1="50" x2="95" y2="50" strokeWidth="0.15" strokeDasharray="2 2" />
            <path d="M 20 20 L 80 80 M 20 80 L 80 20" strokeWidth="0.1" strokeDasharray="1 5" />
          </svg>
        </div>

        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeading 
            title="My Journey" 
            subtitle="A chronological path of my studies and work since Junior High School." 
          />
          
          <div className="space-y-20 mt-16 relative">
            {/* Center connector line for desktop */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[2px] bg-card-border/60" />

            {journeyData.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={step.id} 
                  className={`flex flex-col md:flex-row items-stretch gap-10 relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 w-3.5 h-3.5 rounded-full bg-cyan-accent shadow-[0_0_10px_var(--cyan-accent)] z-10 animate-pulse" />

                  {/* Left Side: Journey Text Card (Animated on scroll) */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full md:w-1/2 pl-10 md:pl-0"
                  >
                    <div className="glow-card glass p-8 rounded-3xl h-full border border-card-border hover:border-cyan-accent/20 hover:shadow-[0_0_25px_var(--color-glow)] transition-all duration-300 relative group overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-accent/5 rounded-full blur-2xl transition-opacity group-hover:opacity-100 opacity-60 pointer-events-none" />
                      
                      <div className="flex items-center gap-3 mb-3 pointer-events-none">
                        <span className="text-[10px] font-bold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-magenta-accent/15 text-magenta-accent border border-magenta-accent/20">
                          {step.stage}
                        </span>
                        <span className="text-xs text-foreground/50 font-bold tracking-wider">
                          {step.period}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-foreground mb-1 leading-snug pointer-events-none">
                        {step.title}
                      </h3>
                      <p className="text-cyan-accent font-bold text-sm mb-4 pointer-events-none">
                        {step.company}
                      </p>
                      
                      <p className="text-foreground/75 text-sm sm:text-base leading-relaxed mb-6 font-medium pointer-events-none">
                        {step.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pointer-events-none">
                        {step.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-md bg-foreground/5 text-foreground/80 border border-card-border font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Side: Polaroid Photo Frame (Animated on scroll) */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50, rotate: isEven ? -5 : 5 }}
                    whileInView={{ opacity: 1, x: 0, rotate: isEven ? -1.5 : 1.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                    className="w-full md:w-1/2 flex items-center justify-center pl-10 md:pl-0"
                  >
                    <div className="relative w-full max-w-sm">
                      {/* Translucent Glass Tape Sticker */}
                      <div className="washi-tape" />
                      
                      {/* Polaroid Glass Box */}
                      <div 
                        className="glass p-4 pb-10 rounded-2xl flex flex-col items-center justify-center border border-card-border hover:shadow-lg transition-all duration-500 transform hover:scale-[1.03]"
                      >
                        {/* Inner photo container */}
                        <div className="w-full aspect-video md:aspect-[4/3] rounded-lg border border-dashed border-foreground/20 dark:border-white/10 hover:border-cyan-accent/30 bg-black/5 dark:bg-white/5 flex flex-col items-center justify-center text-center p-6 transition-colors duration-300">
                          <span className="text-xs font-mono font-bold text-foreground/40 mb-0.5">
                            [ Polaroid Frame ]
                          </span>
                          <span className="text-[10px] font-mono text-foreground/30">
                            {step.stage} Era Photograph
                          </span>
                        </div>
                        
                        {/* Handwritten Style Caption */}
                        <p className="text-xs sm:text-sm font-semibold text-foreground/60 italic tracking-wider text-center mt-5 font-mono select-none pointer-events-none">
                          * {getPolaroidCaption(step.stage)} *
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Featured Projects Slideshow Section */}
      <section className="py-32 relative border-t border-b border-card-border/30 overflow-hidden" id="projects">
        {/* Digital Rain / Vertical Code Lines Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.25] dark:opacity-[0.4] overflow-hidden select-none flex justify-around">
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

        <div className="container mx-auto px-4 max-w-5xl text-center">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="My interactive web systems with active live instances." 
          />

          <ProjectCarousel projects={featuredProjects} />

          {/* More Projects Action Button */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full glass border border-card-border hover:border-cyan-accent/40 hover:shadow-[0_0_15px_var(--color-glow)] text-sm font-semibold transition-all duration-300"
            >
              <span>Explore All Projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section - Bento Grid */}
      <section className="py-32 relative overflow-hidden" id="contact">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading title="Get in Touch" subtitle="Let's connect and build something innovative together." />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
            {/* WhatsApp - Large Card */}
            <motion.a
              href="https://wa.me/6285156717713"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0 }}
              className="group relative glow-card glass p-8 rounded-3xl border border-card-border overflow-hidden flex flex-col justify-between min-h-[200px] hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors duration-500 pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-1">WhatsApp</h3>
                <p className="text-sm text-foreground/50 font-medium">Quick chat for fast response</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-500 group-hover:gap-3 transition-all duration-300">
                <span>Send Message</span>
                <ArrowRight size={14} />
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:tisee656@gmail.com"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative glow-card glass p-8 rounded-3xl border border-card-border overflow-hidden flex flex-col justify-between min-h-[200px] hover:border-cyan-accent/30 hover:shadow-[0_0_30px_var(--color-glow)] transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-accent/5 rounded-full blur-3xl group-hover:bg-cyan-accent/10 transition-colors duration-500 pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-accent/10 border border-cyan-accent/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-[0_0_20px_var(--color-glow)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-accent"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-1">Email</h3>
                <p className="text-sm text-foreground/50 font-medium">tisee656@gmail.com</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-accent group-hover:gap-3 transition-all duration-300">
                <span>Send Email</span>
                <ArrowRight size={14} />
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/Tisee747"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative glow-card glass p-8 rounded-3xl border border-card-border overflow-hidden flex flex-col justify-between min-h-[200px] hover:border-foreground/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-foreground/3 rounded-full blur-3xl group-hover:bg-foreground/5 transition-colors duration-500 pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/80"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-1">GitHub</h3>
                <p className="text-sm text-foreground/50 font-medium">Check out my repositories</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-foreground/70 group-hover:text-foreground group-hover:gap-3 transition-all duration-300">
                <span>View Profile</span>
                <ArrowRight size={14} />
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/tisee/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative glow-card glass p-8 rounded-3xl border border-card-border overflow-hidden flex flex-col justify-between min-h-[200px] hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-500 pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-1">LinkedIn</h3>
                <p className="text-sm text-foreground/50 font-medium">Let's connect professionally</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-500 group-hover:gap-3 transition-all duration-300">
                <span>Connect</span>
                <ArrowRight size={14} />
              </div>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
