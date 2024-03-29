import mongoose from "mongoose";

// prueba
// {
//     "plate":"456-XYZ",
//     "model":"Sport",
//     "brand":"Mazda",
//     "version":"E3",
//     "color":"purple",
//     "carType":"Sedan",
//     "vin":"890YHU870"
//     }

//1.crear squema

const carSchema = new mongoose.Schema({
    //campo ---> tipo de dato
    plate: {
        type: String,
        required: true,
        // default: cliente
    },
    model: String,
    brand: String,
    version: String,
    color: String, 
    carTpe: String, 
    vin: String,
    isDeleted: {
        type: Boolean,
        default: false,
      }, 
})


//2.crear modelo, asignando un nombre, 
export default mongoose.model('Car', carSchema); // al exportar por default, cuando importe este archivo en otro puedo usar el nombre que yo quiera para importarlo 