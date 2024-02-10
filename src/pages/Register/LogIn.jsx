import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import StyledAlert from "./StyledAlert";

// **********************************************{THIS IS ALL IMPORTS FILES}********************************************

const LogIn = () => {
  const navigate = useNavigate();
  const userRef = useRef();
  const passwordRef = useRef();
  const roleRef = useRef();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // New Alert  when user put worng information
  const [showPassword, setShowPassword] = useState(false); // New state for show/hide password
  const Aadhar = require("../Register/loginlogo.webp");

  //*******************************{THIS IS ALL REACT VRIABLE  WHICH IS KNOW AS USESTATE}***********************************

  const handleLogin = (e) => {
    e.preventDefault();
    const user = userRef.current.value;
    const password = passwordRef.current.value;
    const role = roleRef.current.value;

    if (user === "admin" && password === "1234" && role === "Admin Login") {
      setIsLoggedIn(true);
      navigate("/home");
    } else if (
      user === "admin2" &&
      password === "1234" &&
      role === "Retailer Login"
    ) {
      setIsLoggedIn(true);
      navigate("/home");
    } else if (
      user === "admin3" &&
      password === "1234" &&
      role === "Back Office"
    ) {
      setIsLoggedIn(true);
      navigate("/home");
    } else {
      console.log("Unomonus user detected");
      setShowAlert(true);
    }
  };

  //*******************************{THIS IS VALIDATION FOR NAVIAGTE TO THE ROLE OF USER} ********************************/

  const closeAlert = () => {
    setShowAlert(false);
  }; // function for showing alert

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }; // function for showing password

  return (
    <>
      {isLoggedIn ? (
        <p>You are already logged in.</p>
      ) : (
        <div className="max-w-[350px] mx-auto  w-screen h-screen">
          <div className="flex flex-col items-center   pt-[10vh]">
            {/* //*************************************{THIS IS IMAGE } ******************************************************** */}
            <img
              src={Aadhar}
              className=" object-cover w-1/2 h-1/2 mb-[5vh]"
              alt="Logo"
            />
            {/* *************************************{THIS IS FORM}**************************************************/}
            <form onSubmit={handleLogin}>
              <div className="relative">
                <label htmlFor="email" className="mb-[1vh]">
                  Username
                </label>
                <input
                  type="text"
                  className="w-full px-6 py-3 mb-5 border border-slate-600 rounded-lg font-medium "
                  placeholder="Username"
                  id="user"
                  required=''
                  ref={userRef}
                />
                <i className="ri-user-line absolute right-4 top-1/2 transform -translate-y-1/2"></i>
              </div>

              <div className="relative">
                <label htmlFor="password" className="mb-[1vh]">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-6 py-3 mb-5 border border-slate-600 rounded-lg font-medium "
                  placeholder="Password"
                  id="password"
                  required=""
                  ref={passwordRef}
                />
                <i
                  className={`ri-eye-${
                    showPassword ? "line" : "off-line"
                  } absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer`}
                  onClick={toggleShowPassword}
                ></i>
              </div>

              <label htmlFor="role" className="mb-[1vh]">
                Role
              </label>
              <select
                className="w-full px-6 py-3 mb-10 border border-slate-600 rounded-lg font-medium"
                id="role"
                ref={roleRef}
              >
                <option value="Admin Login">Admin Login</option>
                <option value="Retailer Login">Retailer Login</option>
                <option value="Back Office">Back Office</option>
              </select>

              <div className="flex justify-between items-center gap-2 mt-2 border-b border-gray-500 pb-[2vh]">
                <Link
                  to="/forget"
                  className="bg-black hover:bg-slate-800 text-white text-base rounded-lg py-2.5 px-3 transition-colors w-2/3 decoration-none"
                >
                  Forgot Password
                </Link>
                <button className="bg-blue-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-2/3">
                  Log In
                </button>
              </div>
            </form>

            <p className="bg-blue-700 text-white p-3 mt-[7vh] w-full text-center rounded-lg text-xl">
              Copyright © 2022 newupdateseva
            </p>
          </div>

          {showAlert && <StyledAlert onClose={closeAlert} />}
        </div>
      )}
    </>
  );
};

export default LogIn;
