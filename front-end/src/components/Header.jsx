import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Report">Report Incident</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Map">Crime Map</Link></li>
          <li><Link to="/Register">Register</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 