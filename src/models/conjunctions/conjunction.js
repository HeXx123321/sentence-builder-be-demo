import mongoose from "mongoose";

const conjunctionSchema = new mongoose.Schema({

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

const conjunction = mongoose.model("conjunction", conjunctionSchema);

export default conjunction;