import React from 'react'
import { Link } from 'react-router-dom';

function Button() {
  return (
    <>
      <i className="ri-add-fill plus"></i>
      <Link to="/add-customer">
        <button className="custom-button create-new">Create New Entry</button>
      </Link>
      <i className="ri-add-fill plus"></i>
      <button className="custom-button">Enroll Child</button>
    </>
  );
}

export default Button