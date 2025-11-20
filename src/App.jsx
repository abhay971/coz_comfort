import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Process from "./components/Process/Process";
import Offerings from "./components/Offerings/Offerings";
import Features from "./components/Features/Features";
import Properties from "./components/Properties/Properties";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Process />
      <Offerings />
      {/* <Features /> */}
      <Properties />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
