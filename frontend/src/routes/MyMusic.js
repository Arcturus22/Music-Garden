import SingleSongCard from "../components/shared/SingleSongCard";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";
import { useState, useEffect } from "react";
import { Howl, Howler } from "howler";
import LoggedInContainer from "../Containers/LoggedInContainer";

const MyMusic = () => {
  const [songData, setSongData] = useState([]);

  useEffect(() => {
    const getSongs = async () => {
      const response = await makeAuthenticatedGETRequest("/song/get/mysongs");
      setSongData(response.data);
    };
    getSongs();
    //fetch data array
  }, []);

  return (
    <LoggedInContainer>
      <div className="text-white text-xl font-semibold pb-4 pl-2 pt-6">
        My Songs
      </div>
      <div className="space-y-3 overflow-auto">
        {songData.map((item) => {
          return <SingleSongCard info={item} playSound={() => {}} />;
        })}
      </div>
    </LoggedInContainer>
  );
};

export default MyMusic;
