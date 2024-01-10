const express = require("express");
const router = express.Router();
const passport = require("passport");
const Song = require("../models/Song");
const User = require("../models/User");

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    //req.user gets the user because of passport.authenticate(MIDDLEWARE)
    const { name, thumbnail, track } = req.body;
    console.log(req.user);
    if (!name || !thumbnail || !track) {
      return res
        .status(301)
        .json({ err: "Insufficient details to create song." });
    }
    const artist = req.user._id;
    const songDetails = { name, thumbnail, track, artist };

    const createdSong = await Song.create(songDetails);
    return res.status(200).json(createdSong);
  }
);

router.get(
  "/get/mysongs",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currUser = req.user;
    const songs = await Song.find({ artist: req.user._id });
    return res.status(200).json({ data: songs });
  }
);

router.get(
  "/get/artist/:artistId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { artistId } = req.params;
    const artist = await User.findOne({ _id: artistId });
    console.log(artist);
    
    //artist.length==0
    if (!artist ) {
      return res.status(301).json({ err: "Artist does not exist" });
    }

    const songs = await Song.find({ artist: artistId });
    return res.status(200).json({ data: songs });
  }
);

router.get(
  "/get/songname/:songName",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    // console.log(req.params);
    const { songName } = req.params;
    //  Think about MONGODB QUERY- How to get nearest search result
    const songs = await Song.find({ name: songName });
    return res.status(200).json({ data: songs });
  }
);

module.exports = router;
