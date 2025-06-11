import { useState } from "react";
import { LuSearch } from 'react-icons/lu';

const WeatherSearchBar = ({onSearch}) => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!city && !country) {
            setError('Please ensure you have input either the city or country, thanks');
            return;
        }
        setIsLoading(true);
        await onSearch(city, country, () => {
        setCity('');
        setCountry('');
        });
        setIsLoading(false);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full rounded-full bg-white/30 dark:bg-black/30 backdrop-blur px-4 py-2 focus-within:ring-2 ring-indigo-400"
        >
            <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder-white focus:outline-none"
            />
            <input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-24 ml-2 bg-transparent text-white placeholder-white focus:outline-none"
            />
            <button
                type="submit"
                className="ml-2 text-white hover:text-indigo-300"
                aria-label="Search"
            >
            {isLoading ? '⏳' : <LuSearch className="text-white text-xl" />}
            </button>
            {error != "" && (
                <div className="text-sm text-red-500 text-center">{error}</div>
            )}
        </form>
    );
}

export default WeatherSearchBar;