import React from "react";

function Contact() {
  return (
    <section className="contact" id="Contact">
      <h2 className="heading">
        contact <span>me</span>
      </h2>
      <div className="form-container">
        <form action="#">
          <div className="inputs">
            <input type="text" placeholder="full name" className="input" />
            <input type="email" placeholder="email" className="input" />
            <input type="number" placeholder="phone number" className="input" />
            <input type="text" placeholder="subject" className="input" />
          </div>
          <div className="text">
            <textarea placeholder="your message"></textarea>
            <a href="#" className="btn">
              send message
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
