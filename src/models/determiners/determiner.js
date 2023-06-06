import mongoose from "mongoose";

const determinerSchema = new mongoose.Schema({

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

const determiner = mongoose.model("determiner", determinerSchema);

export default determiner;