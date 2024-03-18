import React from "react";
import "./Chef.css";
import images from "../../constants/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
const Chef = () => {
  return (
    <div className="chef-container">
      <div className="chef-img">
        <img src={images.chef} alt="" />
      </div>
      <div className="chef-words">
        <p>Chef Words</p>
        <img src={images.spoon} alt="" />
        <div className="words">
          <h2>What We Believe In</h2>
          <div className="quote">
            <div className="commas">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </div>
            <p>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit
              .
            </p>
          </div>
          <p>
            Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget
            Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam
            Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit
            Nunc.
          </p>
          <h2 className="name">Kevin Luo</h2>
          <div className="sign">
            <img src={images.sign} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
