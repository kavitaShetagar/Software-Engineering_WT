import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/role-selection'); // Navigate to the role selection page
  };

  return (
    <div className="home-container">
      <header className="home-header"></header>
      <main className="home-main">
        <section className="hero-section">
          <div className="hero-content">
            <h2>Welcome to KLE Campus Connect</h2>
            <p>
              KLE Campus Connect is an initiative to connect students to various clubs and events on our campus.
              Join clubs, explore events, and grow your skills!
            </p>
            <button className="next-btn" onClick={handleNext}>Next</button>
          </div>
        </section>
      </main>
      <footer className="home-footer">
        <p>&copy; 2024 KLE Tech. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
