import mongoose from "mongoose";

const adjectiveSchema = new mongoose.Schema({
    
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

const adjective = mongoose.model("adjective", adjectiveSchema);

export default adjective;