import express from 'express';
import { createMovie, getAllMovies} from '../controllers/movieController.js';

const movieRoutes = express.Router();

movieRoutes.post('/movies', createMovie);
movieRoutes.get('/getAllMovies', getAllMovies)
// movieRoutes.get('/movies/:movieId', getMovieById);
// carRoutes.get('/:carId', getCarById);

export default movieRoutes;