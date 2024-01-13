const mongoose = require    ("mongoose");
// Step 1 : require mongoose
// Step 2 : Create a mongoose schema (structure of a user)
// Step 3 : Create a model


//Schema takes as input a JSON
const Playlist = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    songs: [
        {
        type: mongoose.Types.ObjectId,
        ref :"Song",
        
        }
    ],
    collaborators: [{
        type: mongoose.Types.ObjectId,
        ref:"User",
    }],
})


// Arg1= Name of DB name, Arg2 = Schema
const PlaylistModel = mongoose.model("Playlist", Playlist);


module.exports = PlaylistModel; 