import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connect = () =>{
    mongoose.connect(process.env.DB_URI); // esta funcion ejecuta la conexción a mongo 
    const connection = mongoose.connection;
    connection.once('open', () => {  //callback --> es una función que se va a ejecutar después 
        console.log('Conexión exitosa a la base de datos');
    });
    connection.once('error', () => {
        console.error('Error al conectarse a la DB')
    })
}

export {connect}

