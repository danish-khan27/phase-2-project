function GameCard({ game }) {
  return (
    <div className="game-card">
      <img 
        src={game.image} 
        alt={game.title}
        style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '6px' }}
      />
      <h3>{game.title}</h3>
      <p><strong>Genre:</strong> {game.genre}</p>
      <p><strong>Platform:</strong> {game.platform}</p>
    </div>
  );
}

export default GameCard;
