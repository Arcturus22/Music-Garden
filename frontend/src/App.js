import "./output.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
import { useCookies } from "react-cookie";

function App() {
  const [cookie, setCookie] = useCookies(["token"]);
  console.log(cookie.token);

  return (
    <div className="w-screen h-screen  font-poppins">
      <BrowserRouter>
        {cookie.token ? (
          <Routes>
            <Route path="/" element={<div>Hello</div>} />
            <Route path="/home" element={<HomeComponent />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        ) : (
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
