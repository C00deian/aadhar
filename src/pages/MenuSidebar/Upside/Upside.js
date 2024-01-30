import React from "react";
import IPAddressDisplay from "../../../components/Ip";
import "./Upside.css";

function Upside() {
  return (
    <div className="Upway">
      <h2>AadharUpdate</h2>
      <div className="profile">
        <div className="picture"></div>
      </div>
      <div className="info">
        <h3>Gyanendra</h3>
        <p className="wel">Welcome</p>
        <p>Ip Address:<IPAddressDisplay/></p>
      </div>
    </div>
  );
}

export default Upside;
