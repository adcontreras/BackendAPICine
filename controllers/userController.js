// import User from "../models/User.js"

// //create
// const createUser = async(req, res) => { //para usar await debe de estar en una funsión asíncrona
//     try{
//     const newUser = await User.create(req.body); //esta constante es la que espera la respuesta por eso lleva el await
//     res.json(newUser);
// }catch (error){
//   res.status(500).json({
//     msg:'Error al crear user',
//     error,
//   });
// }
// };

// const getAllUsers = async (req, res) => {
//     const users = await User.find({
//       isDeleted: false,
//     });
//     res.json(users);
//   };
  
//   //Get car by id ✅
// //   const getCarById = async (req, res) => {
// //     const car = await Car.findById(req.params.carId);
// //     res.json(car);
// //   };

// //read

// //update

// //delete

// export {createUser, getAllUsers}