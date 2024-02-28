import { useState } from "react";
import LoggedInContainer from "../Containers/LoggedInContainer";
import { Icon } from "@iconify/react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";
import SingleSongCard from "../components/shared/SingleSongCard";

const SearchPage = () => {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [songData, setSongData] = useState([]);

  const searchSong = async () => {
    //This func calls the search API

    const response = await makeAuthenticatedGETRequest(
      "/song/get/songname/" + searchText
    );
    setSongData(response.data);
    // setSearchText("");
  };
  return (
    <LoggedInContainer currActiveScreen={"search"}>
      <div className="w-full py-6 ">
        <div
          className={`w-1/3 p-3 text-sm rounded-full bg-gray-800 px-5 flex text-white space-x-3 items-center ${
            isInputFocus ? "border border-white" : ""
          }`}
        >
          <Icon icon="mdi:magnify" className="text-lg bg-gray-800" />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            className="w-full bg-gray-800 focus:outline-none"
            onFocus={() => {
              setIsInputFocus(true);
            }}
            onBlur={() => {
              setIsInputFocus(false);
            }}
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchSong();
              }
            }}
          />
        </div>
        {songData.length > 0 ? (
          <div className="pt-8 space-y-2">
            <div className="text-white">
              Showing search results for
              <span className="font-bold">{searchText}</span> are:
            </div>
            {songData.map((item) => {
              return (
                <SingleSongCard
                  info={item}
                  key={JSON.stringify}
                  playSound={() => {}}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-white pt-8 ">Nothing to show here.</div>
        )}
      </div>
    </LoggedInContainer>
  );
};

export default SearchPage;
