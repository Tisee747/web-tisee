import React from 'react';

interface TechIconProps {
  tech: string;
  className?: string;
}

export default function TechIcon({ tech, className = "w-4 h-4" }: TechIconProps) {
  const normTech = tech.toLowerCase().replace(/[\s\.\-\(\)]/g, '');

  // Custom SVG brand icons
  switch (normTech) {
    case 'nextjs':
      return (
        <svg viewBox="0 0 180 180" fill="currentColor" className={className}>
          <title>Next.js</title>
          <circle cx="90" cy="90" r="90" fill="none" stroke="currentColor" strokeWidth="6" />
          <path d="M149 150 L84 65 H72 V115 H83 V82 L137 151 A90 90 0 0 0 149 150 Z" />
          <rect x="110" y="65" width="11" height="50" />
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="#00d8ff" strokeWidth="1.5" className={className}>
          <title>React</title>
          <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
          <g stroke="#00d8ff">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'typescript':
      return (
        <svg viewBox="0 0 100 100" fill="#3178c6" className={className}>
          <title>TypeScript</title>
          <rect width="100" height="100" rx="10" />
          <path d="M70 70 V50 H80 V70 H70 Z M50 70 V40 H40 V30 H70 V40 H60 V70 H50 Z" fill="#ffffff" />
          <text x="65" y="85" fill="#ffffff" fontSize="40" fontWeight="bold" fontFamily="sans-serif">TS</text>
        </svg>
      );
    case 'tailwindcss':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <title>Tailwind CSS</title>
          <path d="M12 3c-1.2 0-2.4.6-3 1.7A12.8 12.8 0 0 0 7 12c0 3.3 1 6.3 3 7.3.6 1.1 1.8 1.7 3 1.7 1.2 0 2.4-.6 3-1.7 2-1 3-4 3-7.3 0-3.3-1-6.3-3-7.3-.6-1.1-1.8-1.7-3-1.7Z" />
          <path d="M12 9c-1.2 0-2.4.6-3 1.7a12.8 12.8 0 0 0-2 6.3" />
        </svg>
      );
    case 'laravel':
      return (
        <svg viewBox="0 0 24 24" fill="#ff2d20" className={className}>
          <title>Laravel</title>
          <path d="M8.25 1.5v4.5H3.75V22.5h16.5v-4.5h3.75V1.5H8.25zm1.5 1.5H22.5v15h-2.25v-12H9.75V3zm-6 4.5h15V21H3.75V7.5z" />
        </svg>
      );
    case 'flutter':
      return (
        <svg viewBox="0 0 24 24" fill="#02569b" className={className}>
          <title>Flutter</title>
          <path d="M14.314 0L2.3 12L6 15.7L21.684 0H14.314ZM14.314 24L7.3 17L12 12.3L21.684 24H14.314Z" />
        </svg>
      );
    case 'php':
      return (
        <svg viewBox="0 0 24 24" fill="#777bb4" className={className}>
          <title>PHP</title>
          <ellipse cx="12" cy="12" rx="11" ry="8" stroke="#ffffff" strokeWidth="1" />
          <text x="12" y="15" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">PHP</text>
        </svg>
      );
    case 'dart':
      return (
        <svg viewBox="0 0 24 24" fill="#00b4ab" className={className}>
          <title>Dart</title>
          <path d="M2.24 10.37h5.9L5.2 2.24H2.24v8.13zm15.86-8.13H10.5v8.13h8.13V2.24h-.53zM2.24 21.76h5.9v-8.13h-5.9v8.13zm15.86-8.13H10.5v8.13h8.13v-8.13h-.53z" />
        </svg>
      );
    case 'java':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ea2d2e" strokeWidth="2" className={className}>
          <title>Java</title>
          <path d="M6 22h12M9 19c-1.5-1.5-3-3-3-5.5s1.5-3.5 3-5M15 19c1.5-1.5 3-3 3-5.5s-1.5-3.5-3-5" />
          <path d="M12 2c1 3-1 4 0 7" />
        </svg>
      );
    case 'springboot':
      return (
        <svg viewBox="0 0 24 24" fill="#6db33f" className={className}>
          <title>Spring Boot</title>
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.67 15.65c-.75.6-1.6.9-2.52.9-1.85 0-3.34-1.2-3.34-3.35 0-2.15 1.5-3.35 3.34-3.35.92 0 1.77.3 2.52.9l-1.07 1.25c-.4-.35-.85-.5-1.35-.5-.95 0-1.6.65-1.6 1.7s.65 1.7 1.6 1.7c.5 0 .95-.15 1.35-.5l1.07 1.25z" />
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 24 24" fill="#3776ab" className={className}>
          <title>Python</title>
          <path d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3v1.8h5.9V6h-5.9S6.9 5.8 6.9 9c0 3.2 2.1 3 2.1 3h1.2v-1.7c0-1.8 1.5-3.3 3.3-3.3h3.5s2.1-.2 2.1-3c0-2.8-2-3-2-3H11.9zm.2 20c3.1 0 2.9-1.3 2.9-1.3V19H9.1V18h5.9s2.1.2 2.1-3c0-3.2-2.1-3-2.1-3H13.8c0 1.8-1.5 3.3-3.3 3.3H7S4.9 15.5 4.9 18.3c0 2.8 2 3 2 3h5.2z" />
        </svg>
      );
    case 'streamlit':
      return (
        <svg viewBox="0 0 24 24" fill="#ff4b4b" className={className}>
          <title>Streamlit</title>
          <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13H5.5L12 6.5z" />
        </svg>
      );
    case 'llama3':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" className={className}>
          <title>Llama 3</title>
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5-2 4-2 4 2 4 2" strokeLinecap="round" />
          <circle cx="9" cy="9" r="1" fill="currentColor" />
          <circle cx="15" cy="9" r="1" fill="currentColor" />
        </svg>
      );
    case 'opencv':
      return (
        <svg viewBox="0 0 24 24" fill="#5c3f8e" className={className}>
          <title>OpenCV</title>
          <circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="4" fill="#ffffff" />
        </svg>
      );
    case 'fastapi':
      return (
        <svg viewBox="0 0 24 24" fill="#009688" className={className}>
          <title>FastAPI</title>
          <path d="M12 2L2 14h9v8l10-12h-9z" />
        </svg>
      );
    case 'aws':
    case 'awsec2':
      return (
        <svg viewBox="0 0 24 24" fill="#ff9900" className={className}>
          <title>AWS</title>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-5h2v5zm0-6.5h-2v-2h2v2z" />
        </svg>
      );
    case 'mariadb':
      return (
        <svg viewBox="0 0 24 24" fill="#003545" className={className}>
          <title>MariaDB</title>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 13.5c-.5.5-1.5.5-2 0s-.5-1.5 0-2 1.5-.5 2 0 .5 1.5 0 2z" />
        </svg>
      );
    case 'lsl':
    case 'lindenscriptinglanguagelsl':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" className={className}>
          <title>LSL</title>
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      );
    default:
      // Generic tags fallback icon
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <title>{tech}</title>
          <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l5.58-5.58c.94-.94.94-2.48 0-3.42L12 2z" />
          <path d="M7 7h.01" />
        </svg>
      );
  }
}
