import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [display, setDisplay] = useState(false);
  return (
    <div className="navbar-container">
      <div className="logo">
        <h1>LahoriLounge</h1>
      </div>
      <div className={`navbar ${display ? "hamburger-menu" : ""}`}>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/home"
                onClick={() => {
                  setDisplay(!display);
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => {
                  setDisplay(!display);
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                onClick={() => {
                  setDisplay(!display);
                }}
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/awards"
                onClick={() => {
                  setDisplay(!display);
                }}
              >
                Awards
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => {
                  setDisplay(!display);
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="cancel-btn">
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => {
              setDisplay(!display);
            }}
          />
        </div>
      </div>
      <div className="Profile">
        <div className="register">
          <a href="/">SignUp / Register</a>
        </div>
        <div className="partition"></div>
        <div className="login">
          <a href="/">Book Table</a>
        </div>
      </div>
      <div className="hamburger">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => {
            setDisplay(true);
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
