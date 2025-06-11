import { useState } from "react";

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
        <div>
            <form
                onSubmit={handleSubmit}
                className="flex h-12 w-full max-w-lg rounded-full overflow-hidden bg-white/30 dark:bg-black/30 backdrop-blur ring-1 ring-white/40 focus-within:ring-2 focus-within:ring-indigo-400"
            >
                <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="flex-1 pl-4 bg-transparent text-white placeholder-white/60 focus:outline-none"
                />
                <input
                    type="text"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-24 bg-transparent text-white placeholder-white/60 focus:outline-none"
                />
                <button
                    type="submit"
                    className="h-12 w-12 flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
                    disabled={!city && !country || isLoading}
                    aria-label="Search"
                >
                    {isLoading ? '⏳' : '🔍'}
                </button>
            </form>
        </div>
        
    );
}

export default WeatherSearchBar;