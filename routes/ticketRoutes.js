import express from 'express'; //express importa rutas
import { createTicket } from "../controllers/ticketController.js";

const ticketRoutes = express.Router();

ticketRoutes.post('/tickets',  (req, res) => {
    console.log('Hola soy tickets');
    res.send('Hola soy tickets');
}
);
// userRoutes.get('/users/', getAllUsers);

export default ticketRoutes;