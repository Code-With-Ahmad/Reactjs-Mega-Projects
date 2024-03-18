import React from "react";
import Navbar from "../Header/Navbar";
import Hero from "./../Hero/Hero";
import About from "../About/About";
import Award from "./../Award/Award";
import Contact from "../Contact/Contact";
import Footer from "./../Footer/Footer";
import Menu from "../Menu/Menu";
import Chef from "../Chefs/Chef";
import Video from "../VideoCompnnet/Video";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Menu />
      <Chef />
      <Video />
      <Gallery />
      <Award />
      <Contact />
    </div>
  );
};

export default Home;
