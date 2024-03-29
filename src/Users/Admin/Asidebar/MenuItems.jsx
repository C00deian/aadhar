import React from "react";
import { Link } from "react-router-dom";
const MenuItems = () => {
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
      {/* Single menus are here */}
      <ul className="space-y-2 font-medium text-base px-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={`${item.link}`}
              className="flex items-center p-2 text-black rounded-lg hover:bg-gray-200  no-underline hover:text-white"
            >
              <i
                className={`${item.iconClass} w-5 h-5 text-black transition duration-75   group-hover:text-white `}
              ></i>
              <span className="ms-3">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuItems;
