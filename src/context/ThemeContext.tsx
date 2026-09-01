import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const STORAGE_KEY = 'my-doctor-capsule-theme';
const SHARED_STORAGE_KEY = 'theme';
const DEFAULT_THEME: Theme = 'dark';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getThemeFromUrl(): Theme | null {
  try {
    const params = new URLSearchParams(window.location.search);
    const theme = params.get('theme');

    if (theme === 'light' || theme === 'dark') {
      return theme;
    }
  } catch {
    // Ignore URL parsing errors
  }

  return null;
}

function getStoredTheme(): Theme {
  try {
    // First check the shared theme used for cross-brand theme sharing
    const sharedTheme = localStorage.getItem(SHARED_STORAGE_KEY);

    if (sharedTheme === 'light' || sharedTheme === 'dark') {
      return sharedTheme;
    }

    // Fall back to MDC's existing theme preference
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
  } catch {
    // Ignore localStorage errors
  }

  return DEFAULT_THEME;
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  root.classList.remove('light', 'dark');
  root.classList.add(theme);
}

function removeThemeFromUrl() {
  try {
    const url = new URL(window.location.href);

    url.searchParams.delete('theme');

    window.history.replaceState(
      {},
      '',
      `${url.pathname}${url.search ? `?${url.searchParams}` : ''}${url.hash}`,
    );
  } catch {
    // Ignore URL errors
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    const urlTheme = getThemeFromUrl();
    const initialTheme = urlTheme ?? getStoredTheme();

    setThemeState(initialTheme);
    applyTheme(initialTheme);

    try {
      localStorage.setItem(STORAGE_KEY, initialTheme);

      localStorage.setItem(SHARED_STORAGE_KEY, initialTheme);
    } catch {
      // Ignore localStorage errors
    }

    if (urlTheme) {
      removeThemeFromUrl();
    }
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    applyTheme(newTheme);

    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
      localStorage.setItem(SHARED_STORAGE_KEY, newTheme);
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((currentTheme) => {
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      applyTheme(newTheme);

      try {
        localStorage.setItem(STORAGE_KEY, newTheme);
        localStorage.setItem(SHARED_STORAGE_KEY, newTheme);
      } catch {
        // Ignore localStorage errors
      }

      return newTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark: theme === 'dark',
        toggleTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }

  return context;
}
