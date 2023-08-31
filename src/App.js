
import './App.css';
import Filter from './components/Filter';
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import { movieData } from './data';
import { Route, Routes } from 'react-router-dom';
import MovieTrailer from './components/MovieTrailer';
import NewMovie from './components/NewMovie';
import Movie from './components/Movie';

function App() {
  const [movies, setMovies]=useState(movieData)
  const [filterTitle, setFilterTitle]=useState("")
  const [filterRating, setFilterRating]=useState(0)
  return (
    <div className="">
      <Filter filterRating={filterRating} setFilterRating={setFilterRating} setFilterTitle={setFilterTitle} />
      <Routes>
        <Route path="/" element={<MovieList movies={movies} filterTitle={filterTitle} filterRating={filterRating} setMovies={setMovies}/>} />
        <Route path="/:id" element={<MovieTrailer movies={movies}/>} />
        <Route path="/movie" element={<Movie  movies={movies}/>} >
        <Route path="new" element={<NewMovie />} />
        <Route path="info/:id" element={<MovieTrailer movies={movies}/>} /> 

        

           </Route>
      </Routes>
    </div>
  );
}

export default App;
