import React from "react";
import "./Footer.css";
import images from "../../constants/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="social-details">
        <div className="contact-details">
          <h2>Contact Us</h2>
          <p>Daroghawala Lahore , Punjab , Pakistan</p>
          <p>+92 322-1008034</p>
          <p>+92 326-4947489</p>
        </div>
        <div className="CompanyDetails">
          <h2>Lahori Lounge</h2>
          <p>
            "The Best Way To Find Yourself Is To Lose Yourself In The Service Of
            Others."
          </p>
          <img src={images.spoon} alt="Spoon" />
          <div className="social-icons">
            <a
              href="https://www.instagram.com/itx_ahmad_naeem/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100078106750384"
              target="_blank"
            >
              {" "}
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://github.com/Code-With-Ahmad" target="_blank">
              {" "}
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <div className="WorkingDetails">
          <h2>Working Details</h2>
          <div className="monToFri">
            <p>Monday-Friday:</p>
            <p>08:00 Am - 12:00 Am</p>
          </div>
          <div className="satTosun">
            <p>Saturday-Sunday:</p>
            <p>07:00 Am - 11:00 Pm</p>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <p>2024 LahoriLounge. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
