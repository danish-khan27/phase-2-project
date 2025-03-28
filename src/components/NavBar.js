// components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/games">Game List</Link> | <Link to="/add-game">Add Game</Link>
    </nav>
  );
}

export default NavBar;

