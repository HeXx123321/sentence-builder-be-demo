import mongoose from "mongoose";

const prepositionSchema = new mongoose.Schema({

    word: {
        type: String,
    },
    
    updatedAt: {
        type: Date,
    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },

})

const preposition = mongoose.model("preposition", prepositionSchema);

export default preposition;