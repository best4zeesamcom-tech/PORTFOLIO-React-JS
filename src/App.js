import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Education from "./components/Education";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials.js";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Education />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
