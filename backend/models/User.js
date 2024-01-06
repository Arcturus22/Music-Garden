const mongoose = require("mongoose");
// Step 1 : require mongoose
// Step 2 : Create a mongoose schema (structure of a user)
// Step 3 : Create a model


//Schema takes as input a JSON
const  User = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: false, //Default false
    },
    email:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    likedSongs:{
        type:String, //Change later
        default:"",
    },
    likedPlaylists:{
        type:String, //Change later
        default:"",
    },    
})


// Arg1= Name of DB name, Arg2 = Schema
const UserModel = mongoose.model("User",User);


module.exports =UserModel;