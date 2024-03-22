import {connect} from './config.js'
import express from 'express';

connect();

const api = express();

api.listen(8000, () => {
    console.log('API corriendo en el puerto 8000');
});

