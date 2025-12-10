import mongoose from "mongoose";

const categoryschema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    slug : { // for SEO purpose
        
        type : String,
        unique : true,
        lowercase : true
    }
}, {timestamps : true})

export const Category = mongoose.model("Category", categoryschema)

//                      Category Model will be stored as categories in the Database Collection in Mongodb