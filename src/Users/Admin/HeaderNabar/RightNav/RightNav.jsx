import React, { useState } from "react";
import { Link } from "react-router-dom";
import IPAddress from "../InternetProtocol/IPAddress";

const RightNav = () => {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="flex items-center">
        <div className="flex items-center ms-3 relative">
          <button
            type="button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-expanded={open ? "true" : "false"}
            aria-controls="dropdown-user"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/user-3711850-3105265.png"
              alt="user photo"
            />
          </button>
          {open && (
            <div
              className="absolute top-5  right-0 mt-2 w-52 bg-white divide-y divide-gray-100 rounded shadow-xl "
              id="dropdown-user"
              role="menu"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="px-4 py-3">
                <p className="text-base text-gray-900  ">Admin</p>
                <IPAddress />
              </div>
              <ul className="py-1">
                <li>
                  <Link
                    to="/dashboard"
                    className="block px-1 py-2 text-sm text-gray-900 hover:text-gray-500 no-underline gap-2"
                    role="menuitem"
                  >
                    <i className="ri-layout-grid-fill  "></i> Dashboard
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="block px-1 py-2 text-sm text-gray-900 hover:text-gray-500 no-underline gap-2 "
                    role="menuitem"
                  >
                    <i class="ri-shut-down-fill"></i> Log out
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RightNav;
