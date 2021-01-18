// Packages, icons components
import React from "react";
import { Link, useLocation } from "react-router-dom";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import NavbarImage from "./image/NavbarImage.jpeg";
import Footer from "../Footer/Footer";
// Navbar component
function Navbar({ user }) {
  const location = useLocation();

  return (
    <div className="sidenav">
      <div className="navbarImageDiv">
        <img src={NavbarImage} className="navbarImage" alt="navbarImage" />
      </div>
      <h5 className="myName">Sergey Lugovoy</h5>
      <p className="myNameP">Full Stack Developer</p>
      <li className="nav-item">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item mr-1">
        <Link
          to="/portfolio"
          className={
            location.pathname === "/portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/education"
          className={
            location.pathname === "/education" ? "nav-link active" : "nav-link"
          }
        >
          Education
        </Link>
      </li>
      <li className="nav-item mr-1">
        <Link
          to="/experience"
          className={
            location.pathname === "/experience" ? "nav-link active" : "nav-link"
          }
        >
          Experience
        </Link>
      </li>
      <div className="materIcons">
        <LinkedInIcon
          rel="noreferrer"
          onClick={() => window.open(user.basics.profiles[2].url, "_blank")}
          style={{ color: "#fff" }}
          className="icon"
        />
        <GitHubIcon
          rel="noreferrer"
          onClick={() => window.open(user.basics.profiles[1].url, "_blank")}
          style={{ color: "#fff" }}
          className="icon"
        />
        <a href="mailto:serg.lugovoy.81@gmail.com" target="_top">
          <AlternateEmailIcon
            rel="noreferrer"
            style={{ color: "#fff" }}
            className="icon"
          />
        </a>
        <a
          href={`https://gitconnected.com/${user.basics.username}/resume`}
          target="_blank"
          rel="noopener noreferrer"
          className="resumeDiv"
          style={{ color: "#fff" }}
        >
        <span className="resumeSpan">Résumé</span>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Navbar;
