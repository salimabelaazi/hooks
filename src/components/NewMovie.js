import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Rating, TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function AddMovie({ movies, setMovies }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [addTitle, setAddTitle] = useState("")
    const [addDescription, setAddDescription] = useState("")
    const [addPosterUrl, setAddPosterUrl] = useState("")
    const [addTrailer, setAddTrailer] = useState("")
    const [addRating, setAddRating] = useState(0)

    const AddMovieFunction = () => {
        setMovies([...movies,
        {
            id: Math.random(),
            title: addTitle,
            description: addDescription,
            posterUrl: addPosterUrl,
            trailer: addTrailer,
            rating: addRating
        }
        ])
        setAddTitle("")
        setAddDescription("")
        setAddPosterUrl("")
        setAddTrailer("")
        setAddRating(0)
        handleClose()


    }


    return (
        <div>
            
            
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add a new movie
                    </Typography>
                    <TextField label="Movie Title"
                        variant="outlined"
                        fullWidth
                        onChange={(e) => setAddTitle(e.target.value)} />
                    <TextField label="Movie Description"
                        variant="outlined"
                        fullWidth
                        onChange={(e) => setAddDescription(e.target.value)} />
                    <TextField label="Movie poster URL"
                        variant="outlined"
                        fullWidth
                        onChange={(e) => setAddPosterUrl(e.target.value)} />
                    <TextField label="Movie trailer"
                        variant="outlined"
                        fullWidth
                        onChange={(e) => setAddTrailer(e.target.value)} />

                    <Rating
                        name="simple-controlled"
                        value={addRating}
                        onChange={(event, newValue) => {
                            setAddRating(newValue);
                        }}
                    />
                    <br />
                    <Button variant="contained" onClick={AddMovieFunction} >Add movie</Button>
                </Box>
            
        </div>
    );
}
