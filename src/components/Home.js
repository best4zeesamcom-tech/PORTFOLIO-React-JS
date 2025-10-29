import React from "react";
import boy1 from "../images/avatar.png";
import useScrollAnimation from "./useScrollAnimation";
function Home() {
   useScrollAnimation();
  return (
    <section className="home animate delay-1" id="Home">
      <div className="content">
        <h1>
          hi, it's <span>Smith</span>
        </h1>
        <h3 className="text-animation">
          i'm a <span></span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          dolore quibusdam ut, dicta voluptatum laudantium amet totam, modi
          suscipit eum a eveniet consequuntur? Quod sed commodi cupiditate,
          accusamus quos distinctio.
        </p>
        <div className="icons">
          <i className="fab fa-linkedin" aria-hidden="true"></i>
          <i className="fab fa-github" aria-hidden="true"></i>
          <i className="fab fa-instagram" aria-hidden="true"></i>
          <i className="fab fa-twitter" aria-hidden="true"></i>
        </div>
        <div className="flex-btn">
          <a href="#" className="btn hire">
            hire
          </a>
          <a href="#" className="btn">
            contact
          </a>
        </div>
      </div>
      <img src={boy1} alt="profile" />
    </section>
  );
}

export default Home;
