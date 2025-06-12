import { useEffect, useState } from 'react'
import { getCurrentWeather } from '../../services/WeatherService'
import WeatherSearchBar from '../../components/Weather/WeatherSearchBar';
import WeatherInformationForm from '../../components/Weather/WeatherInformationForm';
import WeatherSearchHistory from '../../components/Weather/WeatherSearchHistory';

const WeatherPage = () => {
    const [weather, setWeather] = useState(null);
    const [weatherHistoryList, setWeatherHistoryList] = useState(() => JSON.parse*localStorage.getItem('weatherHistory') || []);
    const [error, setError] = useState('');

    useEffect(() => {
        localStorage.setItem('history', JSON.stringify(history));
    }, [history]);

    const handleSearch = async (city, country) => {
        setError('');
        try {
            const currentWeatherConditions = await getCurrentWeather(city, country);
            setWeather(currentWeatherConditions);
            setWeatherHistoryList(prev => [currentWeatherConditions, ...prev]);
        } catch (error) {
            let location = city && country ? `${city}, ${country}` : city || country;
            setWeather(null);
            if (location) {
                setError(`Unable to retrieve weather for ${location}, please try again later.`);
            }
        }
    }
    return (
        <div className="max-md:w-[80%] max-md:max-w-md max-md:mx-auto">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full max-w-lg max-md:max-w-sm px-4">
                <WeatherSearchBar onSearch={handleSearch} onClear={() => setWeather(null)} loadCountryCityError={error}/>
            </div>
            <div className="flex flex-col items-center max-w-2xl max-md:max-w-sm w-full mx-auto mt-32 px-4 p-4 bg-white/40 dark:bg-white/40 rounded-xl shadow-md">
                <WeatherInformationForm weather={weather}/>
                <WeatherSearchHistory weatherHistoryList={weatherHistoryList} 
                    onReSearch={(entry) => handleSearch(entry.city, entry.country)}
                    onDelete={id => setWeatherHistoryList(h => h.filter(x => x.id !== id))} />
            </div>
        </div>
    )

}

export default WeatherPage;