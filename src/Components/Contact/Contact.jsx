import React from "react";
import images from "../../constants/images";
import "./Contact.css";
const Contact = () => {
  {
    document.title = "Contact Us | LahoriLounge";
  }
  return (
    <div className="contact-section">
      <div className="find">
        <div className="find-text">
          <p>Contact</p>
          <img src={images.spoon} alt="sppon" />
          <h2>Find Us</h2>
          <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
          <p className="openning-hours">Openning Hours</p>
          <p>Mon - Fri: 10:00 Am - 02:00 Am</p>
          <p>Sat - Sun: 10:00 Am - 03:00 Am</p>
          <button>Visit Us</button>
        </div>
        <div className="find-img">
          <img src={images.findus} alt="" />
        </div>
      </div>
      <div className="news">
        <p className="news-text">Newsletter</p>
        <img src={images.spoon} alt="" />
        <h2>Subscribe To Our Newsletter </h2>
        <p>And Never Miss Latest Updates!</p>
        <div className="input">
          <input type="text" placeholder="Enter Your Email Address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
