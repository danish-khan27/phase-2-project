// App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import GameList from './components/GameList';
import GameForm from './components/GameForm';


function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/games')
      .then(res => res.json())
      .then(data => setGames(data));
  }, []);

  function addGame(newGame) {
    setGames([...games, newGame]);
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GameList games={games} />} />
        <Route path="/add-game" element={<GameForm addGame={addGame} />} />
      </Routes>
    </div>
  );
}

export default App;