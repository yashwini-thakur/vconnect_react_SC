import React from "react";
function Footer() {
  return (
    <>
      {/* <section className="section_footer">Footer Example </section> */}
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            V<span>Connect</span>
          </h3>
          <p class="footer-links">
            <a href="#" class="link-1">
              Home
            </a>
            <a href="#">About</a>
          </p>
          <p class="footer-company-name">Company Name © 2015</p>
        </div>
        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>LJ Campus, </span> LJ St, Near Sarkhej-Sanand Circle,
              <span>Makarba, Ahmedabad, Gujarat 382210</span>
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the website</span>
            This website currently contains notes of all Semister Ec Engineering
            department which are freely accessible to anyone.
          </p>

          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
