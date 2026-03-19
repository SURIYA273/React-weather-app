import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherData = async (city) => {
  try {
    // 1. Fetch Current Weather
    const currentRes = await axios.get(`${BASE_URL}/weather`, {
      params: { q: city, units: 'metric', appid: API_KEY }
    });

    // 2. Fetch 5-Day Forecast
    const forecastRes = await axios.get(`${BASE_URL}/forecast`, {
      params: { q: city, units: 'metric', appid: API_KEY }
    });

    return {
      current: currentRes.data,
      forecast: forecastRes.data.list.filter((_, index) => index % 8 === 0), // Get 1 per day
    };
  } catch (error) {
    throw error;
  }
};

// For the "Smart Search" suggestions
export const getCitySuggestions = async (query) => {
  if (!query) return [];
  try {
    const res = await axios.get(`https://api.openweathermap.org/geo/1.0/direct`, {
      params: { q: query, limit: 5, appid: API_KEY }
    });
    return res.data;
  } catch (error) {
    return [];
  }
};