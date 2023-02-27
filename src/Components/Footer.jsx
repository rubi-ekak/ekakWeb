import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faMedium,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="container-fluid  text-center secfooter ">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-6 d-flex justify-content-center align-items-center ">
            <div className="social-media ">
              <label className="social">
                <b>FOLLOW US</b>
              </label>


              <div className="d-flex justify-content-center align-items-center ">
              <ul className='foote_bottom_ul'>
                <li>
                 
                  <a href="" className="footer--">
                  <FontAwesomeIcon icon={faFacebook} className="socialicon pr-4" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="" className="footer--">
                  <FontAwesomeIcon
                      icon={faTwitter}
                      className="socialicon"
                      style={{ fontSize: "1px" }}
                    />
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="" className="footer--">
                  <FontAwesomeIcon icon={faMedium} className="socialicon" />
                    Medium
                  </a>
                </li>
                <li>
                  <a href="" className="footer--">
                  <FontAwesomeIcon icon={faLinkedin} className="socialicon" />
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
              
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-6 d-flex justify-content-center align-items-center ">
            <div className="d-flex justify-content-center align-items-center ">
              <ul className='foote_bottom_ul'>
                <li>
                 
                  <a href="" className="footer--">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="" className="footer--">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="" className="footer--">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="" className="footer--">
                    Terms & condition
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-6 d-flex align-items-center justify-content-center ">
            <div className="social-media ">
              <a href="">
                <img
                  src="https://ekak.in/assets/images/Ekak-12.png"
                  className="ekak"
                ></img>
              </a>
              <span>
                <FontAwesomeIcon icon={faCopyright} id="copyright" />
                Copyright Ekak Innovations Private Limited 2021
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
