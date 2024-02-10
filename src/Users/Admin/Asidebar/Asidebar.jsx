import React from "react";
import { Link } from "react-router-dom";
import Menudrop from "./Menudrop";
import "remixicon/fonts/remixicon.css";

const Asidebar = () => {
  const menuItems = [
    {
      link: "/dashboard",
      iconClass: "ri-layout-grid-fill",
      label: "Dashboard",
    },
    {
      link: "/balance",
      iconClass: "ri-exchange-dollar-fill",
      label: "Token Transfer",
    },
    {
      link: "/balance",
      iconClass: "ri-hourglass-2-fill",
      label: "User Limit",
    },
    {
      link: "/history",
      iconClass: "ri-history-fill",
      label: "Transfer History",
    },
  ];
  return (
    <>
      <>
        <aside
          id="separator-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          
          aria-label="Sidebar"
        >
          <div className="h-full  py-4 overflow-y-auto bg-white shadow-xl" style={{ WebkitScrollbar: { display: 'none' } }}>
            {/* Single menus are here */}
            <ul className="space-y-2 font-medium text-lg pl-5">
              <span className="text-gray-400 text-xl">Main</span>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={`${item.link}`}
                    className="flex items-center p-2 text-black rounded-lg   hover:bg-gray-200  no-underline hover:text-white"
                  >
                    <i
                      className={`${item.iconClass} w-5 h-5 text-black transition duration-75   group-hover:text-white `}
                    ></i>
                    <span className="ms-3">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* DropDown menus are here */}

            <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 pl-5  ">
              <Menudrop />
            </ul>

            {/* Last log out functionality is here */}
            <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 pl-5">
              <li>
                <Link
                  to="/"
                  className="flex items-center p-2 text-black rounded-lg  hover:bg-gray-200  no-underline"
                >
                  <i class="ri-shut-down-fill w-5 h-5 text-black transition duration-75  group-hover:text-gray-900  "></i>
                  <span className="ms-3">Log-Out</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </>
    </>
  );
};

export default Asidebar;
