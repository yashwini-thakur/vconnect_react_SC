import React from "react";
import { Link } from "react-router-dom";
function Cards() {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content_Changer="IE=edge" />
          <meta
            name="viewport"
            content_Changer="width=device-width, initial-scale=1.0"
          />
          <link rel="stylesheet" href="../css/cards_vc.css" />
          <title>Branch</title>
        </head>
        <body class="body_card">
          <div class="containerCards">
            <div class="card_Changer">
              <div class="box_Changer">
                <div class="content_Changer">
                  <h2>01</h2>
                  <h3>Computer Engineering</h3>
                  <p></p>
                  <Link to="/Computer">More Details</Link>
                </div>
              </div>
            </div>

            <div class="card_Changer">
              <div class="box_Changer">
                <div class="content_Changer">
                  <h2>02</h2>
                  <h3>Information Technology Engineering</h3>
                  <p></p>
                  <Link to="/IT">More Details</Link>
                </div>
              </div>
            </div>

            <div class="card_Changer">
              <div class="box_Changer">
                <div class="content_Changer">
                  <h2>03</h2>
                  <h3>Automobile Engineering</h3>
                  <p></p>
                  <Link to="/Automobile">More Details</Link>
                </div>
              </div>
            </div>
            <div class="card_Changer">
              <div class="box_Changer">
                <div class="content_Changer">
                  <h2>04</h2>
                  <h3>Electronics and Communication Engineering</h3>
                  <p></p>
                  <Link to="/EC">More Details</Link>
                </div>
              </div>
            </div>
            <div class="card_Changer">
              <div class="box_Changer">
                <div class="content_Changer">
                  <h2>05</h2>
                  <h3>Instrumentation and Control Engineering</h3>
                  <p></p>
                  <Link to="/IC">More Details</Link>
                </div>
              </div>
            </div>
            <div class="card_Changer">
              <div class="box_Changer">
                <div class="content_Changer">
                  <h2>06</h2>
                  <h3>Mechanical Engineering</h3>
                  <p></p>
                  <Link to="/sem1_2">More Details</Link>
                </div>
              </div>
            </div>
            <div class="card_Changer">
              <div class="box_Changer">
                <div class="content_Changer">
                  <h2>07</h2>
                  <h3>Chemical Engineering</h3>
                  <p></p>
                  <Link to="/Chemical">More Details</Link>
                </div>
              </div>
            </div>
            <div class="card_Changer">
              <div class="box_Changer">
                <div class="content_Changer">
                  <h2>08</h2>
                  <h3>Civil Engineering</h3>
                  <p></p>
                  <Link to="/Civil">More Details</Link>
                </div>
              </div>
            </div>
            <div class="card_Changer">
              <div class="box_Changer">
                <div class="content_Changer">
                  <h2>09</h2>
                  <h3>Information Communication Technology</h3>
                  <p></p>
                  <Link to="/ICT">More Details</Link>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
export default Cards;
