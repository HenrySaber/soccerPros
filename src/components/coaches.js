import React, { useState } from 'react';
import './coaches.css';

import BeckhamImage from '../pictures/beckham.webp';
import RonaldoImage from '../pictures/Soccer-forward-Cristiano-Ronaldo-2018.webp';
import MessiImage from '../pictures/Rosen-Messi-Miami.webp';

const coachesData = [
  {
    name: "David Beckham",
    achievements: [
      "Owner of Miami FC",
      "1x Champions League winner",
      "6x Premier League Winner"
    ],
    image: BeckhamImage
  },
  {
    name: "Cristiano Ronaldo",
    achievements: [
      "5x Ballon D'or Winner",
      "1x Euro Winner",
      "5x Champions League Winner"
    ],
    image: RonaldoImage
  },
  {
    name: "Lionel Messi",
    achievements: [
      "8x Ballon D'or Winner",
      "1x World Cup Winner",
      "4x Champions League Winner"
    ],
    image: MessiImage
  }
];

const Coaches = () => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filterCoaches = (coaches) => {
    switch (filter) {
      case 'ballonDor':
        return coaches.filter(coach => coach.achievements.some(ach => ach.includes("Ballon D'or Winner")));
      case 'euroWinner':
        return coaches.filter(coach => coach.achievements.some(ach => ach.includes("Euro Winner")));
      case 'mostWorldCups':
        return coaches.filter(coach => coach.achievements.some(ach => ach.includes("World Cup Winner")));
      default:
        return coaches;
    }
  };

  const sortedCoaches = filterCoaches(coachesData);

  return (
    <div className="coaches-page">
      <h1>Get to know your head coaches</h1>
      <div className="sort-container">
        <label htmlFor="filter">Filter By</label>
        <select id="filter" name="filter" onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="ballonDor">Ballon D'or Winner</option>
          <option value="euroWinner">Euro Winner</option>
          <option value="mostWorldCups">Most World Cups</option>
        </select>
      </div>
      <div className="coaches-container">
        {sortedCoaches.map((coach, index) => (
          <div key={index} className="coach-card">
            <img src={coach.image} alt={coach.name} />
            <h2>{coach.name}</h2>
            <ul>
              {coach.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coaches;
