import React from "react";

const StyledAlert = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50  ">
      <div className="bg-white p-8 rounded shadow-lg border-2 ">
        <p className="text-lg font-bold mb-4">Oops! Something went wrong.</p>
        <p className="mb-4">Please check your username, password, and role.</p>
        <button
          className=" cursor-pointer font-bold  bg-black rounded w-36  text-white text-center  py-2.5 px-5"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default StyledAlert;
