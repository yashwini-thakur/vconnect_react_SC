import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navbar() {
  return (
    <>
      <nav class="navbar bg-dark">
        <h1>
          <a href="dashboard.html">
            <FontAwesomeIcon icon="fa-solid fa-globe" />
            VConnect
          </a>
        </h1>
        <ul>
          <li>
            <a href="home.html">
              <i class="fa-solid fa-house"></i> Home
            </a>
          </li>
          <li>
            <a href="settings.html">
              <i class="fa-solid fa-gear"></i> Settings
            </a>
          </li>
          <li>
            <a>
              {" "}
              <i class="fa-solid fa-circle-half-stroke"></i> Theme{" "}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
