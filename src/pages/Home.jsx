import React from 'react';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <section className="home-page">
      <div className="hero-card">
        <p className="eyebrow">Weather intelligence</p>
        <h1>See your city in a calm, clear forecast view.</h1>
        <p className="hero-copy">
          Search any city to check current weather, comfort insights, and a quick 5-day outlook.
        </p>

        <div className="search-section">
          <SearchBar />
        </div>

        <div className="hero-chips" aria-hidden="true">
          <span>Live conditions</span>
          <span>5-day trend</span>
          <span>Easy to scan</span>
        </div>
      </div>
    </section>
  );
};

export default Home;