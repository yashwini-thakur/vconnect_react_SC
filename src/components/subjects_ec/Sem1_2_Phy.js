import React from "react";
import { Link } from "react-router-dom";
function Sem1_2_Phy() {
  return (
    <>
      <head>
        <link rel="stylesheet" href="ec_sem1_2.css" />
      </head>
      <body class="body_sub">
        <h2 class="subject_details">
          <b>
            <i>
              EC
              <br /> Sem:1 <br />
              Enviroumental Science
            </i>
          </b>
        </h2>
        <div class="container_sub">
          <div class="card_sub">
            <div class="face_sub face1_sub">
              <div class="content_sub">
                <h3 class="h3_sub">CH: 1</h3>
                <h3 class="h3_sub">ELECTRONIC MATERIALS </h3>
              </div>
            </div>
            <div class="face_sub face2_sub">
              <div class="content_sub">
                <p class="p_sub">You can get notes here:</p>
                <a href="#">NOTES</a>
              </div>
            </div>
          </div>
          <div class="card_sub">
            <div class="face_sub face1_sub">
              <div class="content_sub">
                <h3 class="h3_sub">CH: 2</h3>
                <h3 class="h3_sub"> SEMICONDUCTORS</h3>
              </div>
            </div>
            <div class="face_sub face2_sub">
              <div class="content_sub">
                <p class="p_sub">You can get notes here:</p>
                <a href="#">NOTES</a>
              </div>
            </div>
          </div>
          <div class="card_sub">
            <div class="face_sub face1_sub">
              <div class="content_sub">
                <h3 class="h3_sub">CH: 3</h3>
                <h3 class="h3_sub">LIGHT-SEMICONDUCTOR INTERACTION</h3>
              </div>
            </div>
            <div class="face_sub face2_sub">
              <div class="content_sub">
                <p class="p_sub">You can get notes here:</p>
                <a href="#">NOTES</a>
              </div>
            </div>
          </div>

          <div class="card_sub">
            <div class="face_sub face1_sub">
              <div class="content_sub">
                <h3 class="h3_sub">CH: 4</h3>
                <h3 class="h3_sub"> Measurements </h3>
              </div>
            </div>
            <div class="face_sub face2_sub">
              <div class="content_sub">
                <p class="p_sub">You can get notes here:</p>
                <a href="#">NOTES</a>
              </div>
            </div>
          </div>
          <div class="card_sub">
            <div class="face_sub face1_sub">
              <div class="content_sub">
                <h3 class="h3_sub">CH: 5</h3>
                <h3 class="h3_sub">
                  <Link to="/superconductivity">Superconductivity</Link>
                </h3>
              </div>
            </div>
            <div class="face_sub face2_sub">
              <div class="content_sub">
                <p class="p_sub">You can get notes here:</p>
                <a href="#">NOTES</a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
export default Sem1_2_Phy;
