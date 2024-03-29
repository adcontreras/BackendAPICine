import Car from "../models/Car.js"

// prueba
  // plate: '90876AS1' ,
    // model: 'Tsuru',
    // brand: 'Nissan',
    // version: 'Normla',
    // color: 'red', 
    // carTpe: 'Sedan', 
    // vin: 'uyboqb8961yjz', 
//create

const createCar = async (req, res) => {
  try {
    const newCar = await Car.create(req.body);
    res.json(newCar);
  } catch (error) {
    res.status(500).json({
      msg: 'Error al crear car',
      error,
    });
  }
};


const getAllCars = async (req, res) => {
    const cars = await Car.find({
      isDeleted: false,
    });
    res.json(cars);
  };


//read

//update

//delete

export {createCar, getAllCars}