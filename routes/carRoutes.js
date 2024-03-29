import express from 'express'; //express importa rutas
import { createCar, getAllCars} from "../controllers/carController.js";

const carRoutes = express.Router();

carRoutes.post('/cars', createCar);
carRoutes.get('/cars', getAllCars);

export default carRoutes;