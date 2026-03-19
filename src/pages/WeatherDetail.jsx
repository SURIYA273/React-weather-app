import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getWeatherData } from '../services/weatherService';
import Forecast from '../components/Forecast';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import { ArrowLeft } from 'lucide-react';

const WeatherDetail = () => {
  const { cityName } = useParams();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getWeatherData(cityName);
        setWeather(data);
      } catch (err) {
        setError("City not found. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [cityName]);

  if (loading) {
    return <div className="loader">Loading weather details...</div>;
  }
  
  if (error) {
    return (
      <div className="error-container">
        <h2>We could not find that city</h2>
        <p>{error}</p>
        <Link to="/" className="back-btn"><ArrowLeft size={16} /> Go Back</Link>
      </div>
    );
  }

  if (!weather) return null;

  const { current, forecast } = weather;

  return (
    <section className="detail-page">
      <div className="header-actions">
        <Link to="/" className="back-btn">
          <ArrowLeft size={20} /> Back
        </Link>

        <div className="small-search">
          <SearchBar />
        </div>
      </div>

      <WeatherCard current={current} />
      <Forecast data={forecast} />
    </section>
  );
};

export default WeatherDetail;