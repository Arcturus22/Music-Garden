const mongoose = require("mongoose");
// Step 1 : require mongoose
// Step 2 : Create a mongoose schema (structure of a user)
// Step 3 : Create a model


//Schema takes as input a JSON
const  Song = new mongoose.Schema({
    name:{
        type: String,
        required : true,
    }  ,
    thumbnail:{
        type: String,
        required:true,
    },
    track:{
        type:String,
        required: true,
    },
    artist:{
        type:mongoose.Types.ObjectId,
        ref:"user",
        required: true,
    },
})


// Arg1= Name of DB name, Arg2 = Schema
const SongModel = mongoose.model("Song",Song);


module.exports = SongModel; 