import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about_us">
      <div className="container-fluid contain">
        <div>
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className=" text-section">
                <h1 className="card-title text-center">ABOUT US</h1>
                <p className="card-text d-flex align-items-start ">
                  Ekak Innovations is a social enterprise based out of Kanpur.
                  The company is working on access to energy, livelihood and
                  mobility space. In addition to that, during the pandemic we
                  are helping offices and factories migrate to touchless
                  attendance systems. Ekak envisions creating a sustainable
                  future by creating technology solutions that change lives. The
                  company at present works for fishermen in East Africa, farmers
                  in rural India, Cab-drivers in urban India and truckers who
                  are the backbone of our country.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12 about-img">
              <img
                src="https://ekak.in/assets/images/PicsArt_11-17-12.42.52_79_7_70.png"
                className="img-fluid  aboutimage "
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default About;
