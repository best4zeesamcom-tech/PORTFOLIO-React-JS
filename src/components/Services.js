import React from "react";

function Services() {
  const services = [
    "Testing",
    "UI Design",
    "Frontend Development",
    "Backend Development",
  ];

  return (
    <section className="services" id="Services">
      <h2 className="heading">services</h2>
      <div className="box-container">
        {services.map((service, index) => (
          <div className="box" key={index}>
            <h3>{service}</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              vel quibusdam necessitatibus repellendus. Tempora atque totam
              debitis corporis similique ab?
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
