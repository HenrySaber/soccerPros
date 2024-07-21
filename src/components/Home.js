// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import backgroundImage from '../pictures/home.webp'; // Import the image

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero">
        <h1>Become the Pro</h1>
        <h2>Train Efficiently</h2>
        <Link to="/join">
          <button className="cta-button">One Week Free Trial</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
