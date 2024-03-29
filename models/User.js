import mongoose from 'mongoose';

// prueba
// {
//   "name":"Miranda",
//   "lastName":"Garcia",
//   "birthDate":"7 mayo 2005",
//   "role":"Client",
//   "telephone": "2468101214",
//   "email":"miranda@correo.com",
//   "password":"00000",
//   "userName":"AMIGA"
//   }


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
  },
  birthDate: {
    type: String,
    required: true,
    unique: true,
  },  
  role: {
    type: String,
    // required: true,
    enum: ['ADMIN', 'CLIENT', 'STAFF'],
    default: 'CLIENT',
  },
  telephone: Number,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },  
});

export default mongoose.model('User', userSchema);