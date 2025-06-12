import { useState } from "react";
import { LuSearch } from "react-icons/lu";

const WeatherSearchBar = ({onSearch, loadCountryCityError}) => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!city && !country) {
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
                className="flex h-12 w-full rounded-full overflow-hidden bg-white/20 backdrop-blur"
            >
                <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="flex-1 pl-4 bg-transparent text-black placeholder-white/60 focus:outline-none"
                />
                <input
                    type="text"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-24 bg-transparent text-black placeholder-white/60 focus:outline-none"
                />
                <button
                    type="submit"
                    className="items-center justify-center bg-indigo-900 hover:bg-indigo-700 disabled:opacity-50"
                    disabled={!city && !country || isLoading}
                    aria-label="Search"
                >
                    {isLoading ? '⏳' : 
                        <LuSearch clsasName="text-black" size={18} />
                    }
                </button>
            </form>
            { loadCountryCityError !== '' && (
                <div className="mt-2 md:mt-5 bg-white/40 rounded-xl text-red-600">{loadCountryCityError}</div>
            )}
        </div>
        
    );
}

export default WeatherSearchBar;