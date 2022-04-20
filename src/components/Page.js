// import "./Page_style.css";
import React from "react";
import { Link } from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Page() {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="E:\180320111054\html prog\practice\Website\css\style.min.css"
          />
          <script
            src="https://kit.fontawesome.com/e5adb60c11.js"
            crossorigin="anonymous"
          ></script>
          <title>VConnect</title>
        </head>
        <body>
          {/* <nav class="navbar bg-dark">
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
          </nav> */}
          <section class="landing">
            <div class="dark-overlay">
              <div class="landing-inner">
                <h1 class="x-large">Get Your Study Material Here</h1>
                <p class="lead">
                  Download lecture notes, textbook PDFs and get access to video
                  lectures for all Engineering Branches.
                </p>
                <div class="buttons">
                  <Link class="btn btn-primary" to="/Login">
                    Sign Up
                  </Link>
                  <Link to="/login" class="btn btn">
                    Log In
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </body>
      </html>
    </>
  );
}
export default Page;
