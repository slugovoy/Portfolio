import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  
  const location = useLocation();

  return (
    <div className="sidenav">
    <h5 className="myName ml-1">Sergey Lugovoy</h5>
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/"}>
          About
        </Link>
      </li>
      <li className="nav-item mr-1">
        <Link
          to="/portfolio"
          className={location.pathname === "/portfolio"}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact"}
        >
          Education
        </Link>
      </li>
      <li className="nav-item mr-1">
        <Link
          to="/experience"
          className={location.pathname === "/experience"}
        >
          Experience
        </Link>
      </li>
    </div>
  );
}

export default Navbar;