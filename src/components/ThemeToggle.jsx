import { useEffect } from 'react';

const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };
  
  useEffect(() => {
    localStorage.setItem('theme', theme);
    console.log(localStorage.getItem('theme'))
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded focus:outline-none focus:ring"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <span role="img" aria-label="Switch to dark mode">🌙</span>
      ) : (
        <span role="img" aria-label="Switch to light mode">☀️</span>
      )}
    </button>
  );
};

export default ThemeToggle;