import { kelvinToCelsius } from "../utils/utils";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getCurrentWeather = async (city, country) => {
  const query = `${city.trim()},${country.trim()}`;
  const url = `${BASE_URL}/weather?q=${encodeURIComponent(query)}&appid=${API_KEY}`;
  const res = await fetch(url);

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || res.statusText);
  }

  const data = await res.json();
  console.log(data)
  console.log(data.weather?.[0]?.icon)
  return {
    id: Date.now(),
    city: data.name,
    country: data.sys.country,
    temp: kelvinToCelsius(data.main.temp),
    temp_min: kelvinToCelsius(data.main.temp_min),
    temp_max: kelvinToCelsius(data.main.temp_max),
    description: data.weather[0].description,
    humidity: data.main.humidity,
    timestamp: data.dt * 1000,
    coords: {
      lon: data.coord?.lon,
      lat: data.coord?.lat
    },
    icon: data.weather[0].icon,
    wind: {
      speed: data.wind?.speed,
      deg: data.wind?.deg,
      gust: data.wind?.gust
    },
    pressure: data.main?.pressure,
    visibility: data.visibility,
    cloudiness: data.clouds?.all,
    feels_like: kelvinToCelsius(data.main?.feels_like),
    sea_level: data.main?.sea_level,
    ground_level: data.main?.grnd_level,
    sunrise: data.sys?.sunrise ? data.sys.sunrise * 1000 : null,
    sunset: data.sys?.sunset ? data.sys.sunset * 1000 : null
  };
};