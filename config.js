import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connect = () =>{
    mongoose.connect(process.env.DB_URI); // esta funcion ejecuta la conexción a mongo 
}

export {connect}

