// src/Screen/NoMatch.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.scss'; // Import the styles

function NoMatch() {
  return (
    <div className="no-match">
      <h1 className="no-match-title">404</h1>
      <h2 className="no-match-subtitle">Page Not Found</h2>
      <p className="no-match-description">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="no-match-button">
        Go to Landing Page
      </Link>
    </div>
  );
}

export default NoMatch;
