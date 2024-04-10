import React from 'react';
import './navbar.scss';
//import navLogo from '../../assets/logo.svg';

export function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo-cfg">
          <img src="https://vitejs.dev/logo.svg" alt='viteLogo' className="nav-logo" />
          <span>Vitejs</span>
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Services</a>
          <a href="#" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
}