import Ticket from "../models/Ticket.js"
import Client from "../models/Client.js";

// const createTicket = async(req, res) => { //para usar await debe de estar en una funsión asíncrona
//     try{
//       const newTicket = await Ticket.create(req.body); //esta constante es la que espera la respuesta por eso lleva el await
//       res.json(newTicket);
//     }catch (error){
//       res.status(500).json({
//         msg:'Error al crear ticket',
//         error,
//       });
//     }    
// };

const getAllTickets = async (req, res) => {
    const tickets = await Ticket.find({
      isDeleted: false,
    });
    res.json(tickets);
  };
  


export { createTicket, getAllTickets }