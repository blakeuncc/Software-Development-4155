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
          <li><Link to="/Contact">Crime Map</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 