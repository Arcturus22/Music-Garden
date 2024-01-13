import { createContext } from "react";

const songContext = createContext({
  currentSong: null,
  setCurrrentSong: (currentSong) => {},
});

export default songContext;