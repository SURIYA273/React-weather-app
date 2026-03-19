import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { MoonStar, SunMedium } from 'lucide-react';
import Home from './pages/Home';
import WeatherDetail from './pages/WeatherDetail';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('weatherhub-theme');
    if (savedTheme) {
      return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('weatherhub-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <div className="app-shell">
        <header className="app-header">
          <Link to="/" className="brand-link" aria-label="Go to home page">
            <span className="brand-mark" aria-hidden="true">WeatherHub</span>
            <span className="brand-subtitle">Real-time forecasts in a beautiful view</span>
          </Link>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            title={theme === 'light' ? 'Dark mode' : 'Light mode'}
          >
            {theme === 'light' ? <MoonStar size={18} /> : <SunMedium size={18} />}
            <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather/:cityName" element={<WeatherDetail />} />
            <Route path="*" element={<div className="error-page">Sorry, this page does not exist.</div>} />
          </Routes>
        </main>

        <footer className="app-footer">Plan your day with confidence.</footer>
      </div>
    </Router>
  );
}

export default App;