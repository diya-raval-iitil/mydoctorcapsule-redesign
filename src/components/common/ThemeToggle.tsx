import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="focus-ring"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
