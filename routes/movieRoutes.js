import express from 'express';
import { createMovie, getAllMovies} from '../controllers/movieController.js';
import { get } from 'mongoose';

const movieRoutes = express.Router();

movieRoutes.post('/movies', createMovie);
movieRoutes.get('/getAllMovies', getAllMovies)
// movieRoutes.route('/movies/:movieId').get(getMovieById);

export default movieRoutes;