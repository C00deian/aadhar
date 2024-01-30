import React from "react";
import IPAddressDisplay from "../../../components/Ip";
import "./Upside.css";

function Upside() {
  const profile = require('../Upside/profile_3135715.png')
  return (
    <div className="Upway">
      <h2>AadharUpdate</h2>
      <div className="profile">
        <div className="picture"><img src={profile}></img></div>
      </div>
      <div className="info">
        <h1>Aadhaar</h1>
        <p className="wel">Welcome</p>
        <p>Ip Address:<IPAddressDisplay/></p>
      </div>
    </div>
  );
}

export default Upside;
