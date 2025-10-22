import React from "react";
import boy1 from "../images/boy1.png";
import boy2 from "../images/boy2.png";
import boy3 from "../images/boy3.png";

function Testimonials() {
  const testimonials = [
    { img: boy1, name: "Smith" },
    { img: boy2, name: "Watson" },
    { img: boy3, name: "George" },
  ];

  return (
    <section className="testimonials" id="Testimonials">
      <h2 className="heading">testimonials</h2>
      <div className="box-container">
        {testimonials.map((person, index) => (
          <div className="box" key={index}>
            <img src={person.img} alt={person.name} />
            <h3>{person.name}</h3>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <i className="fa fa-star" aria-hidden="true" key={i}></i>
              ))}
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              exercitationem laudantium nihil ducimus odio deserunt ratione?
              Enim voluptates voluptatibus nisi earum sint hic totam aliquid,
              fuga quisquam reprehenderit quis nam.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
