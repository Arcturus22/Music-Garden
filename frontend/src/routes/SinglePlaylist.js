import { useParams } from "react-router-dom";
import LoggedInContainer from "../Containers/LoggedInContainer";
import { useEffect, useState } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";
import SingleSongCard from "../components/shared/SingleSongCard";

const SinglePlaylistView = () => {
  const [playlistDetails, setPlaylistDetails] = useState({});
  const { playlistId } = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await makeAuthenticatedGETRequest(
        "/playlist/get/playlist/" + playlistId
      );
      setPlaylistDetails(response);
    };
    getData();
  });

  return (
    <LoggedInContainer currActiveScreen={"library"}>
      {playlistDetails._id && (
        <div>
          <div className="text-white font-semibold pt-8">{playlistDetails.name}</div>
          
          <div className="pt-8 space-y-2">
            {playlistDetails.songs.map((item) => {
            return (
                <SingleSongCard
                info={item}
                key={JSON.stringify}
                playSound={() => {}}
                />
                );
            })}
          </div>
        </div>
      )}
    </LoggedInContainer>
  );
};
export default SinglePlaylistView;
