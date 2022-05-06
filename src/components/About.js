import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <div className="wrap_about">
        <div class="card-container_about">
          {/* <span class="pro">PRO</span> */}
          <div class="round_about_1" />
          <h3 className="h3_about">Yashwini Thakur</h3>
          <h6 className="h6_about">Ahmedabad</h6>
          <p className="p_about">
            User interface designer and <br /> front-end developer
          </p>
          <div class="buttons_about">
            <button class="primary_about">Enrolment No:</button>
            <button class="primary_about ghost">180320111054</button>
          </div>
          <div class="skills_about">
            <h6>Skills</h6>
            <ul>
              <li>UI / UX</li>
              <li>Front End Development</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
        </div>
        <div class="card-container_about">
          {/* <span class="pro">PRO</span> */}
          <div class="round_about_2" />
          <h3 className="h3_about">Rajvi Doshi</h3>
          <h6 className="h6_about">Ahmedabad</h6>
          <p className="p_about">
            User interface designer and <br /> front-end developer
          </p>
          <div class="buttons_about">
            <button class="primary_about">Enrolment No:</button>
            <button class="primary_about ghost">180320111007</button>
          </div>
          <div class="skills_about">
            <h6>Skills</h6>
            <ul>
              <li>UI / UX</li>
              <li>Front End Development</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
