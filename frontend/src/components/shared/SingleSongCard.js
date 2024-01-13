import { useContext } from "react";
import songContext from "../../contexts/songContext";

const SingleSongCard = ({ info, playSound }) => {

  const {currentSong, setCurrrentSong}=useContext(songContext);
  // console.log(info);

  return (
    <div
      className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-sm cursor-pointer"
      onClick={() => {
        setCurrrentSong(info);
      }}
    >
      <div
        className="w-12 h-12 bg-cover bg-center"
        style={{
          backgroundImage: `url("${info.thumbnail}")`,
        }}
      >
        {/* Thumbnail- giving background of the div as the image thumbnail */}
      </div>
      <div className="flex w-full">
        <div className="text-white flex flex-col justify-center items-start pl-3 w-5/6">
          <div className="cursor-pointer hover:underline">{info.name}</div>
          <div className="text-xs text-gray-400 cursor-pointer hover:underline">
            {info.artist.firstname + " " + info.artist.lastname}
          </div>
        </div>
        <div className="w-1/6 flex  items-center justify-center text-gray-400 text-sm">
          <div>3:44</div>
          {/* <div className="text-gray-400  text-lg flex items-center justify-center pl-3">...</div> */}
        </div>
      </div>
    </div>
  );
};

export default SingleSongCard;
