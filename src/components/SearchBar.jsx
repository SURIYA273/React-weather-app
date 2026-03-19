import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCitySuggestions } from '../services/weatherService';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.length > 2) {
        const data = await getCitySuggestions(query);
        setSuggestions(data);
      } else {
        setSuggestions([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSelect = (cityName) => {
    setQuery('');
    setSuggestions([]);
    navigate(`/weather/${cityName}`);
  };

  return (
    <div className="search-wrapper">
      <div className="search-input-box">
        <Search className="search-icon" size={20} aria-hidden="true" />
        <input
          type="text"
          placeholder="Search for a city"
          aria-label="Search city"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((city, index) => (
            <li key={`${city.name}-${city.country}-${index}`}>
              <button
                type="button"
                className="suggestion-item"
                onClick={() => handleSelect(city.name)}
              >
                {city.name}, {city.state && `${city.state}, `}{city.country}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;