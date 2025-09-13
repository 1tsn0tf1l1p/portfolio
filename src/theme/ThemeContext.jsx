import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

const THEME_KEY = 'theme-preference';
const THEME_SOURCE_KEY = 'theme-preference-source';

function getSystemPrefersDark() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  try {
    const source = localStorage.getItem(THEME_SOURCE_KEY);
    const stored = localStorage.getItem(THEME_KEY);
    if (source === 'user' && (stored === 'light' || stored === 'dark')) {
      return stored;
    }
  } catch {}
  return getSystemPrefersDark() ? 'dark' : 'light';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const [source, setSource] = useState(() => {
    if (typeof window === 'undefined') return 'system';
    try {
      const s = localStorage.getItem(THEME_SOURCE_KEY);
      return s === 'user' ? 'user' : 'system';
    } catch {
      return 'system';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    try {
      const hasSource = localStorage.getItem(THEME_SOURCE_KEY);
      if (hasSource !== 'user') {
        localStorage.removeItem(THEME_KEY);
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (source === 'user') return;
    const mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
    if (!mq) return;

    const handler = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };
    mq.addEventListener ? mq.addEventListener('change', handler) : mq.addListener(handler);
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', handler) : mq.removeListener(handler);
    };
  }, [source]);

  const toggleTheme = () => {
    setSource('user');
    setTheme((t) => {
      const next = t === 'light' ? 'dark' : 'light';
      try {
        localStorage.setItem(THEME_KEY, next);
        localStorage.setItem(THEME_SOURCE_KEY, 'user');
      } catch {}
      return next;
    });
  };

  const value = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
