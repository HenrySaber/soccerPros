// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './header.css';
import Logo from '../pictures/logo.webp'; // Adjust the path as necessary

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><HashLink smooth to="/#home">Home</HashLink></li>
          <li><HashLink smooth to="/#our-process">Our Process</HashLink></li>
          <li><HashLink smooth to="/#our-coaches">Our Coaches</HashLink></li>
          <li><HashLink smooth to="/#pricing">Pricing</HashLink></li>
          <li><HashLink smooth to="/#reviews">Reviews</HashLink></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><Link to="/join" className="join-btn">Join</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
