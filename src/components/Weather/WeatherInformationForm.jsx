const WeatherInformationForm = ({ weather }) => {
    console.log(weather)
    if (!weather) return null;

    const formattedTime = new Date(weather.timestamp).toLocaleTimeString();

    return (
        <div className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 shadow">
        <h2 className="text-xl font-bold mb-2 text-center">
            {weather.city}, {weather.country}
        </h2>
        <p className="text-center text-lg">
            <span className="font-semibold">{weather.temp}°C</span> — {weather.description}
        </p>
        <div className="flex justify-between text-sm mt-4">
            <div>
            <div>Min: {weather.temp_min}°C</div>
            <div>Max: {weather.temp_max}°C</div>
            </div>
            <div>
            <div>Humidity: {weather.humidity}%</div>
            <div>Time: {formattedTime}</div>
            </div>
        </div>
        </div>
    );
};

export default WeatherInformationForm;