import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, links }) => {
  return (
    <>
      <div className=" sm:ml-72 ">
        <div
          className="flex   mt-16   h-28 bg-white px-4 py-4 shadow-sm  items-center justify-between"
          aria-label="Breadcrumb"
        >
          <div>
            <h3 className="text-gray-800 mb-3">{title}</h3>
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              {links.map((link, index) => (
                <li key={index} className="inline-flex items-center">
                  {link.href ? (
                    <Link
                      to={link.href}
                      className="inline-flex items-center text-sm font-medium text-gray-700 no-underline"
                    >
                      {link.title}
                    </Link>
                  ) : (
                    <span className="inline-flex items-center text-sm font-medium text-gray-700 no-underline">
                      {link.title}
                    </span>
                  )}
                  {index < links.length - 1 && (
                    <div className="flex items-center">
                      <i className="ri-arrow-right-s-line"></i>
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
