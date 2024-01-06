const express = require("express");
const passport = require("passport");
const Playlist = require("../models/Playlist");
const User = require("../models/User");
const Song = require("../models/Song");

const router = express.Router();

//Route 1 Create playlist
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currUser = req.user;
    const { name, thumbnail, songs } = req.body;

    if (!name || !thumbnail || !songs) {
      return res.status(301).json({ err: "Insufficient Data" });
    }
    const playlistData = {
      name,
      thumbnail,
      songs,
      owner: currUser._id,
      collaborators: [],
    };

    const playlist = await Playlist.create(playlistData);
    return res.status(200).json(playlist);
  }
);

router.get(
  "/get/playlist/:playlistid",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    console.log(req.params);
    const playlistId = req.params.playlistid;
    //REQ.PARAMS
    //Find the playlist with the playlist id got from req.params
    const playlist = await Playlist.findOne({ _id: playlistId });
    if (!playlist) {
      return res.status(301).json({ err: "Invalid ID" });
    }
    return res.status(200).json(playlist);
  }
);

//Get all playlist made by an artist
router.get(
  "/get/artist/:artistid",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const artistId = req.params.artistid;

    const artist = await User.findOne({ _id: artistId });
    if (!artist) {
      return res.status(304).json({ err: "Artist doesn't exist" });
    }
    const playlists = await Playlist.find({ owner: artistId });
    res.status(200).json({ data: playlists });
  }
);

//Add a song to a playlist
router.post(
  "/add/song",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currUser = req.user;
    const { playlistId, songId } = req.body;

    const playlist = await Playlist.findOne({ _id: playlistId });
    if (!playlist) {
      return res.status(304).json({ err: "Playlist does not exist" });
    }
    //Step 1: Check if currUser owns the playlist or is a collaborator
    //CAN'T COMPARE OBJECTS SO WE HAVE TO USE .equals() function 
    if (
      !playlist.owner.equals(currUser._id) &&
      !playlist.collaborators.includes(currUser._id)
    ) {
        return res.status(400).json({err:"Not allowed"});
    }
    //Step 2 : Check if song is valid
    const song = await Song.findOne({_id: songId});
    if(!song){
        return res.status(304).json({err:"Song does not exist"});
    } 

    //Step 3: Add the song to the playlist
    playlist.songs.push(songId);
    await playlist.save();

    return res.status(200).json(playlist);
  }
);

module.exports = router;
