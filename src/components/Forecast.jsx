import React from 'react';

const Forecast = ({ data }) => {
  return (
    <section className="forecast-container">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {data.map((item, index) => (
          <article key={`${item.dt}-${index}`} className="forecast-card">
            <p className="forecast-date">
              {new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
            </p>
            <img 
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} 
              alt="weather-icon" 
            />
            <p className="forecast-temp">{Math.round(item.main.temp)}°C</p>
            <p className="forecast-desc">{item.weather[0].description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Forecast;