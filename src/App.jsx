import { useState } from 'react'
import './App.css'
import WeatherPage from './pages/Weather/WeatherPage'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light') 

  return (
    <>
      <div className={`flex items-center justify-center min-h-screen w-full bg-cover bg-center ${
        theme === 'light'
          ? "bg-[url('/bg-light.png')]"
          : "bg-[url('/bg-dark.png')]"}`}>
        <WeatherPage />
      </div>
    </>
  )
}

export default App
