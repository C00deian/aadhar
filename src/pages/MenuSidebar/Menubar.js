import React from "react";
import "./Menubar.css";
import Downside from "./Downside/Downside";
import Upside from "./Upside/Upside";

function Menubar() {
  return (
    <>
      <div className="sidebar">
        <Upside />
        <Downside />
      </div>
    </>
  );
}

export default Menubar;
