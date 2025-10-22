import React from "react";

function Education() {
  const data = [2021, 2021, 2021, 2021];

  return (
    <section className="education" id="Education">
      <h2 className="heading">education</h2>
      <div className="timeline-items">
        {data.map((year, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-date">{year}</div>
            <div className="timeline-content">
              <h3>high school</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus sint quaerat blanditiis quia dolor hic reiciendis
                suscipit delectus obcaecati maiores.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
