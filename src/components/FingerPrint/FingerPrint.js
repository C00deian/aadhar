import React from 'react';
import './Box.css';

const Box = ({ Src, buttonText }) => {
  return (
    <div className="box">
      <img src={Src} alt="Box " />
      <span>{buttonText}</span>
    </div>
  );
};

export default Box;