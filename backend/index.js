// Importing the Package
const express = require("express");

require("dotenv").config();
const app = express();

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport=require("passport");
const User=require("./models/User");
const port=8000;
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const playlistRoutes = require("./routes/playlist");
const cors=require("cors");



app.use(cors());
app.use(express.json());


// console.log(process.env)
//Now we have to link node to MonogDB
//ARG1: url to the ATLAS userdb (which db to connect)
//ARG2: Options to connect
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://"+process.env.MONGO_USERNAME+":"+process.env.MONGO_PASSWORD+"@cluster0.2xfob6p.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    
})
.then((x)=>{
    console.log("Connected to Mongo")
})
.catch((err)=>{
    console.log("Error while connnecting to Mongo"+err)
});

// SETUP PASSPORT-JWT
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'CHANGETHISTO.env';

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));


// API : GET type : / : return text "Hello World"
app.get("/", (req,res) => {
    //req contains all data for the request
    //res contains all data for the response
    res.send("Hello World")
});

app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);


//Now our serverr will run on localhost:8080 
// As soon as the port is working, the func will run when the server starts running
app.listen(port, ()=> {
    console.log("App is running on port" + port)
})

