import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faMedium,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {NavLink} from "react-router-dom"

import "./Footer.css";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="container-fluid  text-center secfooter ">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-6 d-flex justify-content-center align-items-center  ">
            <div className="social-media ">
              <label className="social">
                <b>FOLLOW US</b>
              </label>


              <div className="d-flex justify-content-center align-items-center ">
              <ul className='foote_bottom_ul'>
                <li className="footer--  ">
                 
                  <a href="https://www.facebook.com/EkakInn/" target="_blank" className="d-flex justify-content-evenly" >
                  <FontAwesomeIcon icon={faFacebook} className="socialicon pr-4" />
                   <span> Facebook</span>
                  </a>
                </li>
                <li className="footer--">
                  <a href="https://twitter.com/ekak1nn" target="_blank"  className="d-flex justify-content-center" >
                  <FontAwesomeIcon
                      icon={faTwitter}
                      className="socialicon"
                      style={{ fontSize: "1px" }}
                    />
                   <span> Twitter</span>
                  </a>
                </li>
                <li className="footer--">
                  <a href="https://medium.com/@EkakInn" target="_blank" className="d-flex justify-content-center"  >
                  <FontAwesomeIcon icon={faMedium} className="socialicon" />
                   <span> Medium</span>
                  </a>
                </li>
                <li className="footer--">
                  <a href="https://in.linkedin.com/company/ekakinn" target="_blank" className="d-flex justify-content-center"  >
                  <FontAwesomeIcon icon={faLinkedin} className="socialicon" />
                   <span> Linkedin</span>
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
                 
                  <a href="https://ekak.in/#/ekak-careers"  target="_blank" className="footer--">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/@EkakInn"  target="_blank" className="footer--">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="https://ekak.in/#/privacypolicy"  target="_blank" className="footer--">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" className="footer--">
                    Terms & condition
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-center ml-4">
            <div className="social-media ">
              <NavLink to="/">
                <img
                  src="https://ekak.in/assets/images/Ekak-12.png"
                  className="ekak"
                ></img>
              </NavLink>
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
