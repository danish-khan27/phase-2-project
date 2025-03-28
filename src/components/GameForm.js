import React, { useState } from 'react';

function GameForm({ addGame }) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [platform, setPlatform] = useState('');
  const [image, setImage] = useState('');  // New state for image URL

  function handleSubmit(e) {
    e.preventDefault();
    const newGame = { title, genre, platform, image }; // include image here

    fetch('http://localhost:3001/games', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGame)
    })
      .then(res => res.json())
      .then(data => {
        addGame(data);
        setTitle('');
        setGenre('');
        setPlatform('');
        setImage(''); // reset after submit
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Game</h2>
      <input
        type="text"
        placeholder="Game Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={e => setGenre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Platform"
        value={platform}
        onChange={e => setPlatform(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={e => setImage(e.target.value)}
      />
      <button type="submit">Add Game</button>
    </form>
  );
}

export default GameForm;
