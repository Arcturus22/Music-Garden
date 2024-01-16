import { useState, useEffect } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";

const AddToPlaylistModal = ({ closeModal, addSongToPlaylist }) => {
  const [myPlaylist, setMyPlaylist] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await makeAuthenticatedGETRequest("/playlist/get/me");
      setMyPlaylist(response.data);
      console.log(response.data);
    };
    getData();
  }, []);
  return (
    <div
      className="absolute  bg-black w-screen h-screen bg-opacity-50  flex justify-center items-center "
      onClick={closeModal}
    >
      <div
        className="bg-appBlack w-1/3 rounded p-4"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="text-white mb-5 font-semibold text-lg">
          Select Playlist
        </div>
        <div className="space-y-3 flex flex-col justify-center items-center">
          {myPlaylist.map((item) => {
            return (
              <PlaylistListComponent
                info={item}
                addSongToPlaylist={addSongToPlaylist}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const PlaylistListComponent = ({ info, addSongToPlaylist }) => {
  return (
    <div
      className="bg-appBlack flex w-full items-center space-x-4 hover:bg-gray-400 hover:bg-opacity-20 cursor-pointer p-3 "
      onClick={() => {
        addSongToPlaylist(info._id);
      }}
    >
      <div>
        <img
          src={info.thumbnail}
          className="rounded w-10 h-10 "
          alt="Thumbnail"
        />
      </div>
      <div className="text-white font-semibold text-sm">{info.name}</div>
    </div>
  );
};
export default AddToPlaylistModal;
