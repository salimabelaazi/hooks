import React from 'react'
import MovieCard from "./MovieCard"
import AddMovie from './AddMovie'

const MovieList = ({movies,filterTitle, filterRating, setMovies}) => {
  return (
    <div>
        <div style={{margin:"2rem"}}>
              <AddMovie movies={movies} setMovies={setMovies} />  
        </div>
    <div className='movie-list'>
      {movies
      .filter(
        movie =>movie.title.toLowerCase().trim().includes(filterTitle.toLowerCase().trim()) &&
        movie.rating >= filterRating
      )
      .map(movie=>
      {return <MovieCard key={movie.id} movie={movie}/>
       } ) 
      }
    </div>
    </div>
  )
}

export default MovieList