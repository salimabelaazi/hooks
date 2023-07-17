
import './App.css';
import Filter from './components/Filter';
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import { movieData } from './data';

function App() {
  const [movies, setMovies]=useState(movieData)
  const [filterTitle, setFilterTitle]=useState("")
  const [filterRating, setFilterRating]=useState(0)
  return (
    <div className="">
      <Filter filterRating={filterRating} setFilterRating={setFilterRating} setFilterTitle={setFilterTitle} />
      <MovieList movies={movies} filterTitle={filterTitle} filterRating={filterRating} setMovies={setMovies}/>
    </div>
  );
}

export default App;
