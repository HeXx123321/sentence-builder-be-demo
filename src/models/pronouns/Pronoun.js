import mongoose from "mongoose";

const pronounSchema = new mongoose.Schema({

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

const pronoun = mongoose.model("pronoun", pronounSchema);

export default pronoun;