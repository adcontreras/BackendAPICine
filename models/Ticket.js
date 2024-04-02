import mongoose from 'mongoose';
import { clientSchema } from "./Client.js";

// prueba
// {
//   "clientName": "Rosa",
//   "numberOfTickets":"3",
//   "ticketPrice":"$90.00",
//   "totalPrice":"$270.00",
//   "playHour":"19:00 hrs", 
//   "seats": "E1,E2,E3",
//   "email":"rosa@correo.com"
// }


const ticketSchema = new mongoose.Schema({
  clients:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client', //modelo de referencia 
}],
  numberOfTickets: {
    type: Number,
    required: true,
  },
  ticketPrice: {
    type: Number,
    required: true,
  },  
  totalPrice: {
    type: Number,
    required: true,
  },
  playHour: {
    type: String,
  },
  seats: Number,

  isDeleted: {
    type: Boolean,
    default: false,
  },  
});

export default mongoose.model('Ticket', ticketSchema);