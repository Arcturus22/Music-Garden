//Authentication routes will be in this file like signup, login

const express = require("express");
const User = require("../models/User");
const { getToken } = require("../utils/helper");

const bcrypt = require("bcrypt");
const router = express.Router(); // Could have been express() only and not ROuter but Router provides specific functions which are only required here like get, post wheras express() would have provided for other unnecessary functions like listen, use , etc. Here we are only gonna have routes so that's why Router.

router.post("/register", async (req, res) => {
    //Assuming the req.body will be of the format {email, username, firstname, lastname, password} as the user model has these fields and to define a unique user we at least need to have all these input informations
    // console.log(req.body);
    const { email, password, firstname, lastname, username } = req.body;
    //Here we are expecting the req.body to be in JSON format so we need to tell node through express that we want the request in json format 

    //Step 2: existing user or not, If yes throw error
    const user = await User.findOne({ email: email });
    if (user) {
        return res.status(403).json({ err: "A user with this email already exists" })
    }
    //This means no user there, create a new user in DB
    // CONVERT THE PLAIN TEXT PASSWORD TO A HASH
    const hashedPass = await bcrypt.hash(password, 10);
    const newUserData = { email, password: hashedPass, firstname, lastname, username };
    
    const newUser = await User.create(newUserData);

    const newUserID=newUser._id;
    // console.log(newUserID);

    //Creating a unique token for each user
    const token = await getToken(newUserID, newUser);

    const userToReturn = { ...newUser.toJSON(), token };
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
});


router.post("/login", async (req,res) =>{
    // Step 1 : Get email and pass sent by user from req.body
    const {email , password} =req.body;

    //Step 2: Check if user with given email already exist, if not invalid 
    const user = await User.findOne({email:email});
    if(!user){
        return res.status(403).json({err:"Invalid Credentials"});
    }

    //Step 3: If exists, match the password. If not correct, incorrect credentials
    //bcrypt.compare enableas us to compare in password to hashed pass securely- returns either true or false
    const isPassValid = await bcrypt.compare(password, user.password);
    if(!isPassValid){
        return res.status(403).json({err:"Invalid Credentials"});
    }

    //Step 4: If correct credentials, return a token a token to user
    const userID = user._id;
    const token = await getToken(userID, user);

    const userToReturn = { ...user.toJSON(), token };
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
    

})

module.exports = router;