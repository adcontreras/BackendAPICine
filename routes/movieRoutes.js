import express from 'express';
import { createMovie, getMovieById } from '../controllers/movieController.js';

const movieRoutes = express.Router();

movieRoutes.post('/movies', createMovie);
movieRoutes.route('/movies/:movieId').get(getMovieById);

export default movieRoutes;