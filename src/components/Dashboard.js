// import "./Page_style.css";
import React from "react";
import { GetList } from "./GetList";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//import Table from "./Table";
function Dashboard() {
  const userDetail = JSON.parse(localStorage.getItem("userDetail"));
  const [list, setList] = useState([]);

  //to bind data using api
  useEffect(() => {
    let mounted = true;
    GetList().then((items) => {
      if (mounted) {
        setList(items);
      }
    });
    return () => (mounted = false);
  }, []);
  const trykaro = () => {
    console.log("the original list", list);
  };
  //to delete data
  const deleteStorage = () => {
    localStorage.clear();
  };
  //to display data
  const displayData = () => {
    var lead = document.getElementById("hide");
    lead.innerText =
      "Your Email ID is " +
      userDetail.email +
      "\n" +
      "Your Mobile Number is " +
      userDetail.mobile +
      "\n" +
      "Your College Name is " +
      userDetail.college;
  };

  return (
    <>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
      <title>Lorem Ipsum</title>
      <nav class="navbar bg-dark">
        <h1>
          <a href="dashboard.html">
            {" "}
            <i class="fa-solid fa-globe"></i>
            Hello {userDetail.name}{" "}
          </a>
        </h1>
        <ul>
          <li>
            <Link to="/" onClick={deleteStorage}>
              <i class="fa-solid fa-house"></i> Logout
            </Link>
          </li>
          <li>
            <Link to="/dashboard" onClick={displayData}>
              <i class="fa-solid fa-gear"></i> userDetail
            </Link>
          </li>
          <li>
            <Link to="/dashboard" onClick={trykaro}>
              {" "}
              <i class="fa-solid fa-circle-half-stroke"></i> UserListing{" "}
            </Link>
          </li>
        </ul>
      </nav>
      <section class="landing">
        <div class="dark-overlay">
          <div class="landing-inner">
            <h1 class="x-large">Welcome {userDetail.name}</h1>
            <p class="lead">
              <div id="hide"></div>
              <div id="apilisting"></div>
              <div id="userlist"></div>
              {list.data?.map((data) => {
                return (
                  <table>
                    <tr>
                      <td>{data.name}</td>
                      <td>{data.id}</td>
                      <td>{data.year}</td>
                    </tr>
                  </table>
                );
              })}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Dashboard;
