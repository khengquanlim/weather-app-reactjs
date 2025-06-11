import { useEffect } from 'react';

const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded focus:outline-none focus:ring"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <span role="img" aria-label="Switch to light mode">☀️</span>
      ) : (
        <span role="img" aria-label="Switch to dark mode">🌙</span>
      )}
    </button>
  );
};

export default ThemeToggle;
