// import { Icon } from "@iconify/react";
import logo from "../Logo.png";
import TextInput from "../components/shared/TextInput";
import { Link } from "react-router-dom";

const SignupComponent = () => {
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
          className="my-4"
        />
        <TextInput
          label="Confirm Email Address"
          placeholder="Enter your Email Address again"
          type="email"
          className="my-4"
        />

        <TextInput
          label="Password"
          placeholder="Create a strong password"
          type="password"
          
        />
        <TextInput
          label="What should we call you?"
          placeholder="Enter a Profile name"
          type="email"
          className="my-4"
        />
        <div className=" w-full flex items-center justify-center my-8">

        <button className="bg-green-400 font-semibold p-3 px-8 rounded-full">SIGN UP</button>
        </div>
        <div className="border border-solid border-gray-300 w-full"></div>
        <div className="font-semibold text-lg my-5">
          Already have an account?
        </div>
        <div className="border border-gray-600 text-gray-600 font-bold w-full flex items-center justify-center py-3 rounded-full">
            <Link to="/login">
          LOG IN INSTEAD
            </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
