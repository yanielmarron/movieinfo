import React, { useState } from 'react';
import './MovieSearch.css'

function MovieSearch({ onSearch }) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [actorName, setActorName] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ title, genre, actorName });
  };

  return (
<form onSubmit={handleSearch} className="d-flex justify-content-center align-items-center">
    <div className="d-flex">
        <div className="mb-3 me-2">
            <label htmlFor="title" className="form-label">
                Título de la película:
            </label>
            <input
                type="text"
                id="title"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div className="mb-3 me-2">
            <label htmlFor="genre" className="form-label">
                Género:
            </label>
            <input
                type="text"
                id="genre"
                className="form-control"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
            />
        </div>
        <div className="mb-3 me-2">
            <label htmlFor="actorName" className="form-label">
                Nombre del actor:
            </label>
            <input
                type="text"
                id="actorName"
                className="form-control"
                value={actorName}
                onChange={(e) => setActorName(e.target.value)}
            />
        </div>
    </div>
    <button type="submit" className="btn btn-primary">
        Buscar
    </button>
</form>
  );
}

export default MovieSearch;
