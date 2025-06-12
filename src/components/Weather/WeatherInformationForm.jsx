import { capitalizeFirstLetters } from "../../utils/utils";
import useIsMobile from '../../hooks/useIsMobile';

const WeatherInformationForm = ({ weather }) => {
    const hasWeather = !!weather;
    const isMobile = useIsMobile();

    const formattedTime = hasWeather ? new Date(weather.timestamp).toLocaleString('en-GB', {
        day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true
    }) : '';

    const weatherImagePath = hasWeather && weather.description?.toLowerCase().includes('cloud')
        ? '/cloud.png'
        : '/sun.png';

    const FormattedUpperCaseWeatherDescription = hasWeather ? capitalizeFirstLetters(weather.description) : '';

    return (
        <div className="w-full p-2 relative overflow-visible">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h2 className="font-semibold text-black/90">
                        Today's Weather
                    </h2>
                    <div className="text-5xl font-bold mt-1 text-[#6A3ECF] dark:text-white">
                        {hasWeather ? `${weather.temp}°C` : '--'}
                    </div>
                </div>

                {hasWeather && (
                <div className="absolute -top-20 -right-6 md:right-4 w-48 h-48">
                    <img src={weatherImagePath} alt="weather icon" className="w-full h-full object-contain" />
                </div>
                )}
            </div>

        { isMobile ? (
            <div className="text-sm text-black">
                {/* Mobile View */}
                {hasWeather ? (
                    <>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <div>H: {weather.temp_min}°C L: {weather.temp_max}°C</div>
                            <div className="text-right text-black/50">{FormattedUpperCaseWeatherDescription}</div>
                        </div>

                        <div className="flex justify-between items-center mb-1">
                            <div className="text-black/70">{weather.city}, {weather.country}</div>
                            <div className="text-right text-black/50">{formattedTime}</div>
                        </div>

                        <div className="flex justify-end">
                            <div className="text-right text-black/50">Humidity: {weather.humidity}%</div>
                        </div>

                    </div>
                    </>
                ) : (
                    <div className="text-gray-400">Search a city to see the weather.</div>
                )}
            </div> ) : (
                <div className="text-sm text-black">
                    {/* Web View */}
                    <div className="text-left mb-2">{hasWeather ? `H: ${weather.temp_min}°C L: ${weather.temp_max}°C` : ''}</div> 
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-1 whitespace-nowrap overflow-x-auto text-black/90">
                        { hasWeather ? (
                            <>
                            <div className="text-black/70">{weather.city}, {weather.country}</div>
                            <div className="text-black/50">{formattedTime}</div>
                            <div className="text-black/50">Humidity: {weather.humidity}%</div>
                            <div className="text-black/50">{FormattedUpperCaseWeatherDescription}</div>
                            </>
                        ) : (
                            <div className="text-gray-400">Search a city to see the weather.</div>
                        )}
                    </div>
                </div>
            )}



        </div>
    );
};

export default WeatherInformationForm;