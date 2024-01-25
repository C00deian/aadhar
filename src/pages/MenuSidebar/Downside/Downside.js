import React, { useState } from "react";
import "./Downside.css";
import { Link } from "react-router-dom";
// import "remixicon/fonts/remixicon.css";

function Downside() {
  const [entryDropdownOpen, setEntryDropdownOpen] = useState(false);
  const [childDropdownOpen, setChildDropdownOpen] = useState(false);

  const toggleEntryDropdown = () => {
    setEntryDropdownOpen(!entryDropdownOpen);
  };

  const toggleChildDropdown = () => {
    setChildDropdownOpen(!childDropdownOpen);
  };

  return (
    <div className="down">
      <hr/>
      <ul>
        <li>
          <Link to="">
            <i class="ri-home-5-fill"></i>Dashboard
          </Link>
        </li>
        <li onClick={toggleEntryDropdown}>
          <Link href="#">
            <i class="ri-team-fill"></i>Entry Management
            <i
              class={
                entryDropdownOpen
                  ? "ri-arrow-down-s-line"
                  : "ri-arrow-up-s-line"
              }
            ></i>
          </Link>
          {entryDropdownOpen && (
            <ul>
              {/* Add your Entry Management dropdown menu items here */}
              <li>
                <Link to="/add-customer">
                  <i class="ri-user-add-fill"></i>New Entry
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i class="ri-eye-fill"></i>View Entry Data
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i class="ri-markup-fill"></i>Update
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li onClick={toggleChildDropdown}>
          <Link href="#">
            <i class="ri-team-fill"></i>Child Management
            <i
              class={
                childDropdownOpen
                  ? "ri-arrow-down-s-line"
                  : "ri-arrow-up-s-line"
              }
            ></i>
          </Link>
          {childDropdownOpen && (
            <ul>
              {/* Add your Child Management dropdown menu items here */}
              <li>
                <Link href="#">
                  <i class="ri-user-add-fill"></i>Enroll Child
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i class="ri-eye-fill"></i>View Child Data
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i class="ri-survey-fill"></i>Enrollment Form
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="#">
            <i class="ri-chat-history-fill"></i>Transfer History
          </Link>
        </li>
        <li>
          <Link href="#">
            <i class="ri-equalizer-fill"></i>Settings
          </Link>
        </li>
        <li>
          <Link href="#">
            <i class="ri-logout-box-fill"></i>Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Downside;
