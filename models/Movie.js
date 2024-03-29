import mongoose from "mongoose";

// prueba
// {
// "name": "Muerte fatal",
// "director":"tarantino",
// "genre": "dramma",
// "duration": "120 min"
// }

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
    director: {
        type: String,
        required: true,
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