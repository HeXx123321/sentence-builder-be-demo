import mongoose from "mongoose";

const nounSchema = new mongoose.Schema({
    
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

const noun = mongoose.model("noun", nounSchema);

export default noun;