import React from "react";
import images from "../../constants/images";
import "./About.css";
const About = () => {
  {
    document.title = "About | LahoriLounge";
  }
  return (
    <div className="About-Section">
      <div className="about">
        <h2>About Us</h2>
        <img src={images.spoon} alt="" />
        <p>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra
          Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec
          Aliquet Eu Proin Mauris Et.
        </p>
        <button>Know More</button>
      </div>
      <div className="knife-image">
        <img src={images.knife} alt="" />
        <img src={images.G} alt="" className="G-img" />
      </div>
      <div className="History">
        <h2>Our History</h2>
        <img src={images.spoon} alt="" />
        <p>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra
          Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec
          Aliquet Eu Proin Mauris Et.
        </p>
        <button>Know More</button>
      </div>
    </div>
  );
};

export default About;
