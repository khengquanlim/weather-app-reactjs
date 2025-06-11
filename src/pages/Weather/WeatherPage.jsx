import { useEffect, useState } from 'react'
import { getCurrentWeather } from '../../services/WeatherService'
import WeatherSearchBar from '../../components/Weather/WeatherSearchBar';

const WeatherPage = () => {
    const [weather, setWeather] = useState(null);
    const [weatherHistoryList, setWeatherHistoryList] = useState(() => JSON.parse*localStorage.getItem('weatherHistory') || []);
    const [error, setError] = useState('');
    useEffect(() => {
    }, [])

    const handleSearch = async (city, country) => {
        setError('');
        try {
            const currentWeatherConditions = getCurrentWeather(city, country)
            setWeather(currentWeatherConditions);
            setWeatherHistoryList(prev => [currentWeatherConditions, ...prev]);
        } catch (error) {
            setWeather(null);
            setError(`Unable to retrieve weather for ${city} now, please try again later.`);
        }
    }
    return (
        <div className="flex flex-col items-center gap-6 max-w-md w-full mx-auto mt-12 p-4 bg-white/80 dark:bg-black/80 rounded-xl shadow-md">
        <WeatherSearchBar onSearch={handleSearch} onClear={() => setWeather(null)} />
        {/* <WeatherInformation weather={weather} error={error} />
        <WeatherSearchHistory weatherHistoryList={weatherHistoryList} onReSearch={setWeather} onDelete={id => setHistory(h => h.filter(x => x.id !== id))} /> */}
        </div>
    )

}

export default WeatherPage;