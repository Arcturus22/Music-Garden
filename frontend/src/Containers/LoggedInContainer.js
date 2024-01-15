import Logo from "../Logo.png";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextwithHover from "../components/shared/TextwithHover";
import { useLayoutEffect, useRef, useState } from "react";
import { Howl, Howler } from "howler";
import songContext from "../contexts/songContext";
import { useContext } from "react";
import CreatePlaylistModal from "../modals/createPlaylistModal";

const LoggedInContainer = ({ children, currActiveScreen }) => {

  const [createPlaylistModalOpen, setCreatePlaylistModalOpen] =useState(false);
  const {
    currentSong,
    setCurrrentSong,
    isPaused,
    setIsPaused,
    soundPlayed,
    setSoundPlayed,
  } = useContext(songContext);
  // console.log(currentSong);

  //PlaySound func
  const playSound = () => {
    console.log(soundPlayed);
    if (!soundPlayed) {
      return;
    }
    soundPlayed.play();
  };

  //changes song when different song is clicked
  const changeSong = (songSrc) => {
    if (soundPlayed) {
      soundPlayed.stop();
    }
    let sound = new Howl({
      src: [songSrc],
      html5: true,
    });
    setSoundPlayed(sound);
    sound.play();
    setIsPaused(false);
    console.log(soundPlayed);
  };

  //Pauses a song
  const pauseSound = () => {
    soundPlayed.pause();
  };

  const firstUpdate = useRef(true);
  //triggered when currentSong is changed
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (!currentSong) {
      return;
    }
    console.log("HERE");
    changeSong(currentSong.track);
  }, [currentSong && currentSong.track]);

  const togglePlayPause = () => {
    if (isPaused) {
      playSound();
      setIsPaused(false);
    } else {
      pauseSound();
      setIsPaused(true);
    }
  };

  return (
    <div className="h-full w-full bg-appBlack">
    {
      createPlaylistModalOpen &&
      <CreatePlaylistModal closeModal={()=>{setCreatePlaylistModalOpen(false)}}/>
    }
      <div className={`${currentSong ? "h-9/10" : "h-full"} w-full  flex`}>
        {/* This is the screen size div due to w-full and h-full */}
        <div className="LeftPart h-full w-1/5 bg-black flex flex-col justify-between pb-10">
          <div>
            {/* THis is the Left part of the div covering 1/5th of the total part of the screen  */}
            <div className="logo p-4 flex justify-center">
              <img src={Logo} alt="Logo-MusicGarden" width={125} className="" />
            </div>
            <div className="py-5">
              <IconText
                iconName={"ion:home-sharp"}
                displayText={"Home"}
                active={currActiveScreen === "home"}
                targetLink={"/home"}
                />
              <IconText
                iconName={"ion:search-sharp"}
                displayText={"Search"}
                active={currActiveScreen === "search"}
                targetLink={"/search"}
                />
              <IconText
                iconName={"clarity:library-solid"}
                displayText={"Library"}
                active={currActiveScreen === "Library"}
                />
              <IconText
                iconName={"ic:sharp-library-music"}
                displayText={"My Music"}
                active={currActiveScreen === "myMusic"}
                //   active
                targetLink={"/myMusic"}
              />
            </div>
            <div className="py-4">
              <IconText
                iconName={"ic:baseline-add-box"}
                displayText={"Create Playlist"}
                onClick={()=>{setCreatePlaylistModalOpen(true)}}
                // active={currActiveScreen==="CreatePlaylist"}
              />
              <IconText
                iconName={"mdi:heart-box"}
                displayText={"Liked Songs"}
                // active
              />
            </div>
          </div>

          <div className="px-5 ">
            <div className="border border-bold rounded-full border-gray-400 text-white w-2/5 flex items-center px-2 py-1 justify-center cursor-pointer hover:border-white">
              <Icon icon="octicon:globe-24" />
              <div className="ml-2 text-sm font-bold  ">English</div>
            </div>
          </div>
        </div>

        <div className="RightPart h-full w-4/5 bg-appBlack overflow-auto ">
          <div className="navbar h-1/10 bg-black bg-opacity-30 flex  items-center justify-end">
            {/* This div is for navbar */}
            <div className="w-1/2 flex h-full items-center">
              <div className="w-3/5 flex justify-around">
                <TextwithHover displayText={"Premium"} />
                <TextwithHover displayText={"Support"} />
                <TextwithHover displayText={"Download"} />
              </div>
              {/* This is for straight | separating Download from Signup */}
              <div className="h-1/2 border-r border-white"></div>
              <div className="w-2/5 flex justify-around h-full items-center">
                <TextwithHover displayText={"Upload Song"} />

                <div className="bg-white rounded-full font-semibold w-10 h-10 flex items-center justify-center cursor-pointer">
                  AK
                </div>
              </div>
            </div>
          </div>
          <div className="content p-8 pt-0 overflow-auto">
            {/* This div is for content */}
            {children}
          </div>
        </div>
      </div>
      {/* This div is the current playing song */}
      {currentSong && (
        <div className="bg-black bg-opacity-30 w-full h-1/10 text-white flex  items-center px-4">
          <div className="w-1/4 h-full flex items-start ">
            <div className="flex  h-full px-1 py-2">
              <img
                src={currentSong.thumbnail}
                alt="SongThumbnail"
                className="h-14 w-14 rounded-full"
              />
              <div className=" pl-3 h-full flex-row justify-center ">
                <div className="text-sm  cursor-pointer h-1/2 flex justify-center items-end hover:underline">
                  {currentSong.name}
                </div>
                <div className="text-xs  text-gray-500 cursor-pointer items-start flex h-1/2 hover:underline">
                  {currentSong.artist.firstname +
                    " " +
                    currentSong.artist.lastname}
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center items-center ">
            <div className="flex w-1/3 justify-between items-center ">
              {/* Controls for playing song */}
              <Icon
                icon="ion:shuffle-sharp"
                fontSize={28}
                className="cursor-pointer text-gray-500 hover:text-white"
              />
              <Icon
                icon="fluent:previous-16-filled"
                fontSize={28}
                className="cursor-pointer text-gray-500 hover:text-white"
              />
              <Icon
                icon={
                  isPaused
                    ? "ic:baseline-play-circle"
                    : "ic:baseline-pause-circle"
                }
                fontSize={50}
                className="cursor-pointer text-gray-500 hover:text-white"
                onClick={() => {
                  togglePlayPause();
                }}
              />
              <Icon
                icon="fluent:next-16-filled"
                fontSize={28}
                className="cursor-pointer text-gray-500 hover:text-white"
              />
              <Icon
                icon="ic:twotone-repeat"
                fontSize={28}
                className="cursor-pointer text-gray-500 hover:text-white"
              />
            </div>
            {/* <div className="bg-red-800">Progress BAR HERE</div> */}
          </div>
          <div className="w-1/4 flex justify-end">Hello</div>
        </div>
      )}
    </div>
  );
};

export default LoggedInContainer;
