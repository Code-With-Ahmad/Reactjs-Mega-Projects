import React from "react";
import "./Hero.css";
import images from "../../constants/images";
const Hero = () => {
  return (
    <div className="Hero_Container">
      <div className="hero-text">
        <h3>Chase The New Flavour</h3>
        <img src={images.spoon} alt="spoon" className="spoon-img" />
        <h2 className="hero-main-text">THE KEY TO FINE DINING</h2>
        <p>
          Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum
          Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus
          Aliquam Amet Tellus
        </p>
        <button>Explore Menu</button>
      </div>
      <div className="hero-img">
        <img src={images.welcome} alt="Images" />
      </div>
    </div>
  );
};

export default Hero;
