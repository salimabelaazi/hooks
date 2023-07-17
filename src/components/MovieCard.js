import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

export default function MovieCard({ movie }) {
  return (
    // <Card sx={{
    //   width: 250, boxShadow: "0px 4px 7px rgba(0,0,0,.5)",
    //   cursor: "pointer",
    //   transition: "all .5s cubic-bezier(.8,.5,.2,1.4)",
    //   overflow: "hidden",
    //   position: "relative"
    // }}>
    //   <CardMedia
    //     sx={{ height: 500, transition: "all .5s cubic-bezier(.8,.5,.2,1.4)" }}
    //     image={movie.posterUrl}
    //     title="green iguana"
    //   />
    //   <div className='descriptions'>
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         {movie.title}
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         {movie.description}
    //       </Typography>
    //     </CardContent>
    //     <CardActions>
    //       <Rating name="read-only" value={movie.rating} readOnly />

    //     </CardActions>
    //   </div>
    // </Card>
    <div class="card">
        <img src={movie.posterUrl} alt={movie.title}/>
        <div class="descriptions">
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <Rating name="read-only" value={movie.rating} readOnly />
        </div>
    </div>
  )
  
};