import React from 'react';
import GameCard from './GameCard';

function GameList({ games }) {
  return (
    <div>
      <h2>Favorite Games</h2>
      <div className="game-list-container">
        {games.map(game => (
          <div key={game.id} className="game-card">
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameList;
