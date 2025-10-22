import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="icons">
        <i className="fab fa-linkedin" aria-hidden="true"></i>
        <i className="fab fa-github" aria-hidden="true"></i>
        <i className="fab fa-instagram" aria-hidden="true"></i>
        <i className="fab fa-twitter" aria-hidden="true"></i>
      </div>
      <nav className="navbar">
        <a href="#Home">home</a>
        <a href="#Education">education</a>
        <a href="#Services">services</a>
        <a href="#Testimonials">testimonials</a>
        <a href="#Contact">contact</a>
      </nav>
      <div className="credit">
        <p>
          <i className="fa fa-copyright" aria-hidden="true"></i> Muhamamd
          SamiUllah <span>||</span> all rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
