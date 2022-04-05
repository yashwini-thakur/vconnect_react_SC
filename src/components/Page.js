// import "./Page_style.css";
import React from "react";
import { Link } from "react-router-dom";
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
          <nav class="navbar bg-dark">
            <h1>
              <a href="dashboard.html">
                {" "}
                <i class="fa-solid fa-globe"></i>Lorem Ipsum{" "}
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
          <section class="landing">
            <div class="dark-overlay">
              <div class="landing-inner">
                <h1 class="x-large">This is the Home Page</h1>
                <p class="lead">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
                <div class="buttons">
                  <Link class="btn btn-primary" to="/Login">
                    Sign Up
                  </Link>
                  <a href="cards.html" class="btn btn">
                    Log In
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* <script>
      function myfun() {
        var element = document.body;
        element.classList.toggle("dark-mode");
      }
    </script> */}
        </body>
      </html>
    </>
  );
}
export default Page;
