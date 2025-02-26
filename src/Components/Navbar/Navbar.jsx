import React from "react";
import "./Navbar.css";
import Dlogo from "../../assets/Dlogo.png";
import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <div className="nav-container p-3 row mt-sm-3">
        <div className="col-xl-2 col-lg-3 col-md-7 col-sm-8 py-1 link_container">
          <Link className="linking" to="/">
            Home
          </Link>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-7 col-sm-8 py-1 link_container">
          <Link className="linking" to="/education">
            Education
          </Link>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-7 col-sm-8 py-1 link_container">
          <Link className="linking" to="/projects">
            Projects
          </Link>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-7 col-sm-8 py-1 link_container">
          <Link className="linking" to="/contact">
            Contact
          </Link>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-7 col-sm-8 py-1 link_container">
          <Link className="linking" to="/contact">
            Certificate
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
