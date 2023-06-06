import mongoose from "mongoose";

const adverbSchema = new mongoose.Schema({

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

const adverb = mongoose.model("adverb", adverbSchema);

export default adverb;