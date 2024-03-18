import React from "react";
import "./Award.css";
import images from "../../constants/images";
import { awards } from "../../constants/data";

const Award = () => {
  return (
    <div className="Award-Section">
      <div className="award-text">
        <p>Awards & Recognition</p>
        <img src={images.spoon} alt="" />
        <h2 className="award-heading">Our Laurels</h2>
        <div className="awards">
          {awards.map((item) => (
            <div className="award" key={item.title}>
              <div className="award-number">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="award-details">
                <p className="title">{item.title}</p>
                <p className="sub-title">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="award-img">
        <img src={images.laurels} alt="" />
      </div>
    </div>
  );
};

export default Award;
