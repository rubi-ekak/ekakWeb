import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import "./Footer.css"

const Footer = () => {
  return (
    <section className="footer-section">
          <div className="container-fluid secfooter ">
              <div className="row">
                  <div className="col-lg-4 col-md-4 col-6 ">
                      <div className="social-media d-flex flex-column justify-content-center align-items-center">
                          <label className="social">
                              <b>FOLLOW US</b>
                          </label>
                          <a href="" className="footer">
                          <FacebookRoundedIcon/>
                          Facebook
                          </a>
                          <a href="" className="footer ">
                          <FontAwesomeIcon icon={faTwitter } className="socialicon" />
                          Twitter
                          </a>
                          <a href="" className="footer">
                          <FontAwesomeIcon icon={faMedium} className="socialicon"/>
                          Medium
                          </a>
                          <a href="" className="footer">
                          <FontAwesomeIcon icon={faLinkedin} className="socialicon" />
                          Facebook
                          </a>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-6 ">
                      <div className="links">
                       <a>Careers</a>
                       <a>Blog</a>
                       <a>Privacy policy</a>
                       <a>Terms & condition</a>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-6 ">
                      <div className="links">
                       <a><img src="https://ekak.in/assets/images/Ekak-12.png" className="ekak"></img></a>
                       <span></span>
                       
                      </div>
                  </div>
              </div>

          </div>
    </section>
  )
}

export default Footer
