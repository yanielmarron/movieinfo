import React, { useState, useEffect } from 'react';
import MovieSearch from './components/MovieSearch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import movieService from './services/MovieService';
import PaginatedTable from './components/PaginatedTable';

function App() {
  // const [pageNumber, setPageNumber] = useState(1);
  // const [pageSize, setPageSize] = useState(10);
  const [movies, setMovies] = useState([]);

  const handleSearch = async (searchCriteria) => {
    try {
      searchCriteria.pageNumber = 1;
      searchCriteria.pageSize = 10;
      const results = await movieService.getAll(searchCriteria);
      setMovies(results.data);
      console.log('Peticion realizada correctamente', results);
    } catch (error) {
      console.error('Error al buscar películas:', error);
    }
  };

  useEffect(() => {
    let searchCriteria = {
      pageNumber: 1,
      pageSize: 10
    };
    movieService.getAll(searchCriteria).then((response) => {
      setMovies(response.data);
    })
  }, []);


  return (
    <>
      <h1 className="mainText my-4">Buscador de Películas</h1>
      <MovieSearch onSearch={handleSearch} />
      <PaginatedTable data={movies} itemsPerPage={2} />
    </>
  );
}

export default App;
