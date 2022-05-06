import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav class="navbar bg-dark">
        <h1>
          <a href="/">
            <FontAwesomeIcon icon="fa-solid fa-globe" />
            VConnect
          </a>
        </h1>
        <ul>
          <li>
            <Link to="/">
              <i class="fa-solid fa-house"></i> Home
            </Link>
          </li>
          <li>
            <a href="mailto:vconnect@edu.com">
              <i class="fa-solid fa-gear"></i> Contact
            </a>
          </li>
          <li>
            <Link to="/cards">
              {" "}
              <i class="fa-solid fa-circle-half-stroke"></i> Branches
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
