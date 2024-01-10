// import { Icon } from "@iconify/react";
import logo from "../Logo.png";
import TextInput from "../components/shared/TextInput";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelper";
import { useCookies } from "react-cookie";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const login = async () => {
    const data = { email, password };
    // console.log(data);
    const response = await makeUnauthenticatedPOSTRequest("/auth/login", data);
    if (response && !response.err) {
      // console.log(response);
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, { path: "/", expires: date });
      alert("Success");
      navigate("/home");
    } else {
      alert("Failure");
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-6 border-b border-solid border-gray-400 w-full flex justify-center">
        <img src={logo} alt="logo" className="w-28 " />
      </div>
      <div className="inputRegion w-1/3 py-10 flex justify-center items-center flex-col">
        <div className="font-bold   mb-4">
          To continue, log in to Music Garden
        </div>
        <TextInput
          label="Email ID or Username"
          placeholder="Email ID or Username"
          type="email"
          className="my-4"
          value={email}
          setValue={setEmail}
        />

        <TextInput
          label="Password"
          placeholder="Password"
          type="password"
          value={password}
          setValue={setPassword}
        />
        <div className=" w-full flex items-center justify-end my-8">
          <button
            className="bg-green-400 font-semibold p-3 px-8 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              login();
            }}
          >
            LOG IN
          </button>
        </div>
        <div className="border border-solid border-gray-300 w-full"></div>
        <div className="font-semibold text-lg my-5">Don't have an account?</div>
        <div className="border border-gray-600 text-gray-600 font-bold w-full flex items-center justify-center py-3 rounded-full">
          <Link to="/signup">SIGN UP FOR MUSIC GARDEN</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
