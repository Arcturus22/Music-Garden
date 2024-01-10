// import { Icon } from "@iconify/react";

import { useState } from "react";
import {useCookies} from "react-cookie";
import logo from "../Logo.png";
import TextInput from "../components/shared/TextInput";
import { Link } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelper";

const SignupComponent = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  
  const signUp = async () => {
    if (email !== confirmEmail) {
      alert("Email and Confirm email fields must match. Please check again");
      return;
    }
    const data = { email, password, username, firstname, lastname };
    // console.log(data);
    const response= await makeUnauthenticatedPOSTRequest("/auth/register", data);
    if(response && !response.err){
      console.log(response);
      const token = response.token;
      const date= new Date();
      date.setDate(date.getDate()+30);
      setCookie("token",token,{path:"/", expires:date});
      alert("Success");
    } 
    else{
      alert("Failure");
    }
  };

  // console.log(email);
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-6 border-b border-solid border-gray-400 w-full flex justify-center">
        <img src={logo} alt="logo" className="w-28 " />
      </div>
      <div className="inputRegion w-1/3 py-10 flex justify-center items-center flex-col">
        <div className="font-bold   mb-4 text-2xl">
          Sign up for free to start listening
        </div>
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
          type="email"
          className="my-6"
          value={email}
          setValue={setEmail}
        />
        <TextInput
          label="Confirm Email Address"
          placeholder="Enter your Email Address again"
          type="email"
          className="mb-6"
          value={confirmEmail}
          setValue={setConfirmEmail}
        />
        <TextInput
          label="Username"
          placeholder="Enter Username"
          type="text"
          className="mb-6"
          value={username}
          setValue={setUsername}
        />

        <TextInput
          label="Password"
          placeholder="Create a strong password"
          type="password"
          value={password}
          setValue={setPassword}
        />
        <div className="w-full flex justify-between items-center">
          <div className="w-1/2 pr-2">
            <TextInput
              label="First Name"
              placeholder="Enter your first name"
              type="text"
              className="my-6 "
              value={firstname}
              setValue={setFirstname}
            />
          </div>
          <div className="w-1/2 pl-2">
            <TextInput
              label="Last Name"
              placeholder="Enter your last name"
              type="text"
              className="my-6 "
              value={lastname}
              setValue={setLastname}
            />
          </div>
        </div>
        <div className=" w-full flex items-center justify-center my-8">
          <button
            className="bg-green-400 font-semibold p-3 px-8 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              signUp();
            }}
          >
            SIGN UP
          </button>
        </div>
        <div className="border border-solid border-gray-300 w-full"></div>
        <div className="font-semibold text-lg my-5">
          Already have an account?
        </div>
        <div className="border border-gray-600 text-gray-600 font-bold w-full flex items-center justify-center py-3 rounded-full">
          <Link to="/login">LOG IN INSTEAD</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
