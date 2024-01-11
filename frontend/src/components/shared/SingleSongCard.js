const SingleSongCard = () => {
  return (
    <div className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-sm">
      <div
        className="w-12 h-12 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://i.ytimg.com/vi/HMqhXxH5-RQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD_R9ToptJ_YNChn1LOW7RUZx53nA)`,
        }}
      >
        {/* Thumbnail- giving background of the div as the image thumbnail */}
      </div>
      <div className="flex w-full">
        <div className="text-white flex flex-col justify-center items-start pl-3 w-5/6">
          <div className="cursor-pointer hover:underline">Shinunoga e-wa</div>
          <div className="text-xs text-gray-400 cursor-pointer hover:underline">Fuji Kaze</div>
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
