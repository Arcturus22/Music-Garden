import { createContext } from "react";

const songContext = createContext({
  currentSong: null,
  setCurrrentSong: (currentSong) => {},
  soundPlayed: null,
  setSoundPlayed: () => {},
  isPaused: null,
  setIsPaused: () => {},
});

export default songContext;
