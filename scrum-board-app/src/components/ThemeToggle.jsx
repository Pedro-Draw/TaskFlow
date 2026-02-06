import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700"
    >
      {darkMode ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
