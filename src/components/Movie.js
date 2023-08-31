import React from 'react'
import { Outlet } from 'react-router-dom'

const Movie = () => {
  return (
    <div>
        <h1> My Movie</h1>
        <Outlet/>
    </div>
  )
}

export default Movie