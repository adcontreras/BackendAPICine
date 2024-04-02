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

// const getAllMovies = async (req, res) => {
//     const movies = await Movie.find({
//       isDeleted: false,
//     });
//     res.json(movies);
//   };

 
// const getMovieById = async (req, res) => {
//   const movie = await Movie.findById(req.params.movieId);
//   res.json(movie);
// };

const getAllMovies = async (req, res) => {
  try {
      let query = {
          isDeleted: false,
      };

      if (req.query.title) {
          query.title = { $regex: new RegExp(req.query.title, 'i') };
      }
      if (req.query.releaseDate) {
          query.releaseDate = { $regex: new RegExp (req.query.releaseDate, 'i') };
      }
      if (req.query.raiting) {
        query.raiting = req.query.raiting;
    }
      if (req.query.genre) {
          query.genre = { $regex: new RegExp(req.query.genre, 'i') };
      }

      const movies = await Movie.find(query);
      res.json(movies);
  } catch (error) {
      res.status(500).json({
          msg: 'Error al obtener películas',
          error,
      });
  }
};

export {createMovie, getAllMovies}