import mongoose from "mongoose";

// prueba
// {
// "title": "Muerte fatal",
// "director": "John B",
// "releaseDate":"15 de marzo 2005",
// "raiting": "3",
// "genre": "Dramma",
// "duration": "120 min"
// }

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
    director: {
        type: String,
        required: true,
      },
    releaseDate: {
        type: String,
        required: true,
      },
    raiting: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    genre: {
        type: String,
        required: true,
      },
    duration: {
        type: String,
        required: true,
      },
    isDeleted: {
        type: Boolean,
        default: false,
      },
});

export default mongoose.model('Movie', movieSchema);