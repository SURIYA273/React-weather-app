import React from 'react';
import { Wind, Droplets, Thermometer } from 'lucide-react';

const WeatherCard = ({ current }) => {
  return (
    <article className="main-weather-card">
      <div className="weather-info">
        <p className="label">Current weather</p>
        <h2>{current.name}, {current.sys.country}</h2>
        <h1>{Math.round(current.main.temp)}<span>°C</span></h1>
        <p className="description">{current.weather[0].description}</p>
      </div>
      
      <div className="weather-icon-large">
        <img 
          src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`} 
          alt="weather" 
        />
      </div>

      <div className="weather-stats">
        <div className="stat">
          <Thermometer size={20} />
          <div>
            <p>Feels Like</p>
            <span>{Math.round(current.main.feels_like)}°C</span>
          </div>
        </div>
        <div className="stat">
          <Droplets size={20} />
          <div>
            <p>Humidity</p>
            <span>{current.main.humidity}%</span>
          </div>
        </div>
        <div className="stat">
          <Wind size={20} />
          <div>
            <p>Wind</p>
            <span>{current.wind.speed} m/s</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default WeatherCard;