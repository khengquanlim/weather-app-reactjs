import { useEffect, useState } from 'react'
import './App.css'
import ThemeToggle from './components/ThemeToggle'
import WeatherPage from './pages/Weather/WeatherPage'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light') 

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <>
      <div className={`flex items-center justify-center min-h-screen w-full bg-cover bg-center ${
        theme !== 'dark'
          ? "bg-[url('/bg-light.png')]"
          : "bg-[url('/bg-dark.png')]"}`}>
          <div className="absolute top-4 right-4 z-50">
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>

        <WeatherPage />
      </div>
    </>
  )
}

export default App
