import express from "express";
import {register, login, getAllUsers} from '../controllers/authController.js'

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.get('/getAllUsers', getAllUsers);

export default authRouter; 