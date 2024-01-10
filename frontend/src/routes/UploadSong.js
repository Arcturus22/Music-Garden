import Logo from "../Logo.png";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextwithHover from "../components/shared/TextwithHover";
import TextInput from "../components/shared/TextInput";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import { useState } from "react";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelper";

const UploadSong = () => {
  // console.log(window);
  // console.log(window.cloudinary);
  const [name, setName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [songUrl, setSongUrl] = useState("");
  const [uploadedSongFileName, setUploadedSongFileName] = useState("");

  const submitSong = async () => {
    const data = { name, thumbnail, track: songUrl };
    const response = await makeAuthenticatedPOSTRequest("/song/create", data);
    console.log(response);
  };

  return (
    <div className="h-full w-full flex ">
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
              // active
            />
            <IconText
              iconName={"ion:search-sharp"}
              displayText={"Search"}
              // active
            />
            <IconText
              iconName={"clarity:library-solid"}
              displayText={"Library"}
              // active
            />
            <IconText
              iconName={"ic:sharp-library-music"}
              displayText={"My Music"}
              //   active
            />
          </div>
          <div className="py-4">
            <IconText
              iconName={"ic:baseline-add-box"}
              displayText={"Create Playlist"}
              // active
            />
            <IconText
              iconName={"mdi:heart-box"}
              displayText={"Liked Songs"}
              active
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
          <div className="text-2xl font-semibold mb-5 text-white mt-8">
            Upload Your Music
          </div>
          <div className="w-2/3 flex space-x-3">
            <div className="w-1/2">
              <TextInput
                label="Name"
                labelClassName={"text-white"}
                placeholder="Name"
                value={name}
                setValue={setName}
              />
            </div>
            <div className="w-1/2">
              <TextInput
                label={"Thumbnail"}
                labelClassName={"text-white"}
                placeholder="Thumbnail"
                value={thumbnail}
                setValue={setThumbnail}
              />
            </div>
          </div>
          <div className="py-5">
            {uploadedSongFileName ? (
              <div className="flex items-center ">
                <div className="bg-white text-center rounded-full p-2 w-1/4">
                  {uploadedSongFileName.substring(0, 20)}...
                </div>
                <div className="text-white pl-3">Audio Uploaded</div>
              </div>
            ) : (
              <CloudinaryUpload
                setUrl={setSongUrl}
                setName={setUploadedSongFileName}
              />
            )}
          </div>
          <div
            className="bg-white font-semibold flex items-center justify-center rounded-full p-1 cursor-pointer"
            style={{ width: "15%" }}
            onClick={submitSong}
          >
            Submit Song
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadSong;
