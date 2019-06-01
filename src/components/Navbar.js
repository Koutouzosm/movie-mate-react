import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Signin"
          className={window.location.pathname === "/Signin" ? "nav-link active" : "nav-link"}
        >
          Signin
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/userlist"
          className={window.location.pathname === "/userlist" ? "nav-link active" : "nav-link"}
        >
          Userlist
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/matches"
          className={window.location.pathname === "/matches" ? "nav-link active" : "nav-link"}
        >
          Matches
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
