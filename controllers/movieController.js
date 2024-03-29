import Movie from "../models/Movie.js";

const createMovie = async (req, res) => {
    try{
        const newMovie = await Movie.create(req.body);
        res.json(newMovie);
    }catch(error){
        res.status(500).json({
            msg: 'Error al crear movie',
            error,
        });
    };
};

const getAllMovies = async (req, res) => {
    const movies = await Movie.find({
      isDeleted: false,
    });
    res.json(movies);
  };

  const getMovieById = async (req, res) => {
    const movie = await Movie.findById(req.params.movieId);
    res.json(movie);
  };

  //usar este ejemplo para traer los nombres de las pelis 

//   //Get car by id ✅
// const getCarById = async (req, res) => {
//   const car = await Car.findById(req.params.carId);
//   res.json(car);
// };

// //Update ✅
// const updateCar = async (req, res) => {
//   //Deconstrucción objetos JS
//   //const carId = req.params.carID; ==  const { cardId } = req.params;

//   const { carId } = req.params;
//   //1.- Filtro 2.- Nuevos campos
//   const updatedCar = await Car.updateOne(
//     {
//       _id: carId,
//     },
//     req.body
//   );
//   res.json(updatedCar);
// };

  // const getBookById = async (req, res) => {
  //   try {
  //     //buscar un libro por id
  //     const book = await Book.findById(req.params.bookId).populate('authors'); //polutae es una función que me regresa todos los campos de lo que le pida, en este caso de authors
  
  //     if (!book) {
  //       return res.status(404).json({
  //         msg: 'Libro no encontrado',
  //       });
  //     }
  
  //     //responder ese libro
  //     return res.json(book);
  //   } catch (error) {
  //     res.status(500).json({
  //       msg: 'Error al buscar libro por id',
  //       error,
  //     });
  //   }
  // };
  

export {createMovie, getAllMovies , getMovieById}