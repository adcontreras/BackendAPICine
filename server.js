import {connect} from './config.js'
import express from 'express';
import carRoutes from './routes/carRoutes.js';
import authRoutes from './routes/authRoutes.js';
import ticketRoutes from './models/Ticket.js';
import movieRoutes from './routes/movieRoutes.js';

connect();

const api = express();

api.use(express.json());

api.listen(8000, () => {
    console.log('API corriendo en el puerto 8000');
});

//String : nombre de la ruta
api.get('/test', (req, res) => {
    res.send('Hola esto es una prueba');
});



api.use(carRoutes);
api.use('/auth', authRoutes);
api.use(ticketRoutes);
api.use(movieRoutes);
