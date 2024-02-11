import React from "react";
import { Link } from "react-router-dom";
import Menudrop from "./Menudrop";
import MenuItems from "./MenuItems";
import "remixicon/fonts/remixicon.css";
import "./Asidebar.css";

const Asidebar = () => {
  return (
    <>
      <>
        <aside
          id="separator-sidebar"
          className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0 mt-14  "
          aria-label="Sidebar"
        >
          <div className="h-full py-4    shadow-2xl" id="tomakescrolldisable">
            <MenuItems />

            <ul className="px-2 py-2 mt-4 space-y-2 font-medium border-t border-gray-400    ">
              <Menudrop />
            </ul>

            <ul className="px-2 mt-4 space-y-2 font-medium border-t border-gray-400 py-2">
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
