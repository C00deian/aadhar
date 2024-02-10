import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import StyledAlert from "./StyledAlert";

const LogIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user: "",
    password: "",
    role: "Admin Login",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const roles = {
    "Admin Login": { user: "admin", password: "1234", route: "/admin" },
    "Retailer Login": { user: "admin2", password: "1234", route: "/home" },
    "Back Office": { user: "admin3", password: "1234", route: "/backoffice" },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { user, password, role } = formData;
    const {
      user: expectedUser,
      password: expectedPassword,
      route,
    } = roles[role];

    if (user === expectedUser && password === expectedPassword) {
      setIsLoggedIn(true);
      navigate(route);
    } else {
      setShowAlert(true);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {isLoggedIn ? (
        <p>You are already logged in.</p>
      ) : (
        <div className="max-w-[350px] mx-auto  w-screen h-screen">
          <div className="flex flex-col items-center pt-[10vh]">
            <img
              src={require("../Register/loginlogo.webp")}
              className="object-cover w-1/2 h-1/2 mb-[5vh]"
              alt="Logo"
            />
            <form onSubmit={handleLogin}>
              <div className="relative">
                <label htmlFor="user">Username</label>
                <input
                  type="text"
                  className="w-full px-6 py-3 mb-5 border border-slate-600 rounded-lg font-medium"
                  placeholder="Username"
                  id="user"
                  name="user"
                  value={formData.user}
                  onChange={handleInputChange}
                  required
                />
                <i className="ri-user-line absolute right-4 top-14 transform -translate-y-1/2"></i>
              </div>

              <div className="relative">
                <label htmlFor="password">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-6 py-3 mb-5 border border-slate-600 rounded-lg font-medium"
                  placeholder="Password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <i
                  className={`ri-eye-${
                    showPassword ? "line" : "off-line"
                  }  absolute right-4 top-14 transform -translate-y-1/2 cursor-pointer`}
                  onClick={toggleShowPassword}
                ></i>
              </div>

              <label htmlFor="role">Role</label>
              <select
                className="w-full px-6 py-3 mb-10 border border-slate-600 rounded-lg font-medium"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
              >
                <option value="Admin Login">Admin Login</option>
                <option value="Retailer Login">Retailer Login</option>
                <option value="Back Office">Back Office</option>
              </select>

              <div className="flex justify-between items-center gap-2 mt-2 border-b border-gray-500 pb-[2vh]">
                <Link
                  to="/forget"
                  className="bg-black hover:bg-slate-800 text-white text-base rounded-lg py-2.5 px-3 transition-colors w-2/3 no-underline"
                >
                  Forgot Password
                </Link>
                <button className="bg-blue-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-2/3 ">
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
