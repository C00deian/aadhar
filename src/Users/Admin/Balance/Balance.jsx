import React from "react";
import Asidebar from "../Asidebar/Asidebar";
import HeaderNavbar from "../HeaderNabar/HeaderNavbar";
import Breadcrumb from "../BreadCrumb/Breadcrumb";

const Balance = () => {
  const title = "Balance Transfer";
  const links = [
    { title: "Home", href: "/dashboard" },
    { title: "Balance Transfer", href: "" },
     
  ];
  const mylinks = [
    {
      to: "/viewuser",
      text: "View Customer",
      icon: "ri-team-line text-white text-2xl ",
    },
  ];
  return (
    <>
     <HeaderNavbar/>
    <Asidebar/>
    <Breadcrumb title={title} links={links} mylinks={mylinks}/>
      <div className="p-12 sm:ml-72  mb-48 bg-gray-200">
        <div className="p-4 border-2 rounded-lg   shadow-xl bg-white">
          <div className="grid grid-cols-1 gap-4 mb-4 ">
            <h3 className="text-2xl font-bold">Balance Transfer</h3>

            <form
              action=""
              className="flex flex-col items-start w-full border p-9 rounded-sm bg-white"
            >
              <div className="flex justify-between items-center w-full">
                <div className="mb-5 w-1/2 p-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900  "
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="bg-white border border-black text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                    placeholder="Username"
                    required=""
                  />
                </div>
                <div className="mb-5 w-1/2 p-6">
                  <label
                    htmlFor="number"
                    className="block mb-2 text-sm font-medium text-gray-900  "
                  >
                    Amount
                  </label>
                  <input
                    type="number"
                    id="amount"
                    className="bg-white border border-black text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5        "
                    placeholder="Amount"
                    required=""
                  />
                </div>
              </div>
              <div className=" p-6">
                <button
                  type="submit"
                  className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center     "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Balance;
