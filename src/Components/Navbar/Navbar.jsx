// import React from "react";
// import "./Navbar.css";
// import Dlogo from "../../assets/Dlogo.png";
// import { Link } from "react-router";

// function Navbar() {
//   return (
//     <>
//       <div className="nav-container p-3 row mt-sm-3">
//         <div className="col-xl-2 col-lg-3 col-md-7 col-sm-8 py-1 link_container">
//           <Link className="linking" to="/">
//             Home
//           </Link>
//         </div>
//         <div className="col-xl-2 col-lg-3 col-md-7 col-sm-8 py-1 link_container">
//           <Link className="linking" to="/education">
//             Education
//           </Link>
//         </div>
//         <div className="col-xl-2 col-lg-3 col-md-7 col-sm-8 py-1 link_container">
//           <Link className="linking" to="/projects">
//             Projects
//           </Link>
//         </div>
//         <div className="col-xl-2 col-lg-3 col-md-7 col-sm-8 py-1 link_container">
//           <Link className="linking" to="/contact">
//             Contact
//           </Link>
//         </div>
//         <div className="col-xl-2 col-lg-3 col-md-7 col-sm-8 py-1 link_container">
//           <Link className="linking" to="/contact">
//             Certificate
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/education", label: "Education" },
    { path: "/projects", label: "Projects" },
    { path: "/certificates", label: "Certificate" },
    // { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="nav-container p-3 row mt-sm-3">
      {navLinks.map((item, index) => (
        <div
          key={index}
          className="col-xl-2 col-lg-3 col-md-7 col-sm-8 my-1 p-1 link_container">
          <NavLink
            className={({ isActive }) =>
              `linking ${isActive ? "active-link" : ""}`
            }
            to={item.path}>
            {item.label}
          </NavLink>
        </div>
      ))}
    </nav>
  );
}

export default Navbar;
