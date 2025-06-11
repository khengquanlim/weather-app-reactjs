import { capitalizeFirstLetters } from "../../utils/utils";

const WeatherInformationForm = ({ weather }) => {
    const hasWeather = !!weather;

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
                <div className="absolute -top-16 right-8 w-48 h-48">
                    <img src={weatherImagePath} alt="weather icon" className="w-full h-full object-contain" />
                </div>
                )}
            </div>

            <div className="text-sm text-black/70">
                <div className="text-left mb-2">{hasWeather ? `H: ${weather.temp_min}°C L: ${weather.temp_max}°C` : ''}</div> 
                <div className="flex items-center gap-10 whitespace-nowrap overflow-x-auto">
                    <div>{weather.city}, {weather.country}</div>
                    <div>{formattedTime}</div>
                    <div>Humidity: {weather.humidity}%</div>
                    <div>{FormattedUpperCaseWeatherDescription}</div>
                </div>
            </div>
        </div>
    );
};

export default WeatherInformationForm;