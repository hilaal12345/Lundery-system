const mongoose = require("mongoose")

const profileSchema=mongoose.Schema({
    pImage:{
        type:String,
        
    },

    name:{
        type:String,
        required:true
    },

    bio:{
        type:String,
        required:true
    }

},{timestamps:true})



module.exports = mongoose.model("profile", profileSchema)


