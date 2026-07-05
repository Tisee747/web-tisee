'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type AccentTheme = 'cyberpunk' | 'matrix' | 'retro' | 'nebula';

interface ThemeContextType {
  theme: 'dark';
  accentTheme: AccentTheme;
  setAccentTheme: (theme: AccentTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [accentTheme, setAccentThemeState] = useState<AccentTheme>('cyberpunk');

  useEffect(() => {
    // Always force dark mode
    document.documentElement.classList.add('dark');
    
    // Load saved accent theme from local storage if available
    const saved = localStorage.getItem('accentTheme') as AccentTheme;
    if (saved && ['cyberpunk', 'matrix', 'retro', 'nebula'].includes(saved)) {
      setAccentThemeState(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      document.documentElement.setAttribute('data-theme', 'cyberpunk');
    }
  }, []);

  const setAccentTheme = (theme: AccentTheme) => {
    setAccentThemeState(theme);
    localStorage.setItem('accentTheme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <ThemeContext.Provider value={{ theme: 'dark', accentTheme, setAccentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
