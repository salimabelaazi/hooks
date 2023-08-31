import React from 'react'
import { Link,  useNavigate, useParams } from 'react-router-dom'

const MovieTrailer = ({ movies }) => {
  const Navigate = useNavigate();

  const { id } = useParams();
  console.log("params", id);
  console.log("params", typeof Number(id));
  console.log("params", typeof parseInt(id));

  const movie = movies.find(el => el.id === Number(id))
  console.log(movie)
  console.log(movie.title)
  return (
    <div>
      <Link to="/">
        <button variant="contained"  >Go back home</button>
      </Link>
      {/* <Button onClick={()=> Navigate("/")} variant="contained"  >Go back home</Button> */}
      <div>
        <h1>Title:beauty and the beast </h1>
        <img src={movie.posterUrl} alt="photo"/>
            <p>Description: "{movie.description}"
            </p> 
            {/* <iframe width="560" height="315" src={movie.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe> */}
    </div>
     </div >
   )
 }

export default MovieTrailer
