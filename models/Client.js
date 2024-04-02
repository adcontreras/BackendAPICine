import moongose from "mongoose";

const clientSchema = new moongose.Schema({
    name: {
        type: String,
        required: true,
      },

    lastName: {
        type: String,
        required: true,
      },
    
    email: {
        type: String,
        required: true,
      },
});

export default moongose.model('Client', clientSchema);
export {clientSchema}