import "./output.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
import LoggedInHomeComponent from "./routes/LoggedInhome";
import UploadSongComponent from "./routes/UploadSong";
import MyMusicComponent from "./routes/MyMusic";
import { useCookies } from "react-cookie";

function App() {
  const [cookie, setCookie] = useCookies(["token"]);
  // console.log(cookie.token);

  return (
    <div className="w-screen h-screen  font-poppins">
      <BrowserRouter>
        {cookie.token ? (
          //LoggedIn Routes
          <Routes>
            <Route path="/" element={<div>Hello</div>} />
            <Route path="/home" element={<LoggedInHomeComponent />} />
            <Route path="/uploadSong" element={<UploadSongComponent />} />
            <Route path="/myMusic" element={<MyMusicComponent />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        ) : (
          //LoggedOut Routes
          <Routes>
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<SignupComponent />} />
            <Route path="/home" element={<HomeComponent />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
