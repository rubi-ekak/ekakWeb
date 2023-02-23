import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about_us box">
        <div className="container-fluid contain">
          <div
            className="card about_us d-flex justify-content-center align-items-center"
            
          >
            <div className="row mt-4">
              <div className="col-md-8 pl-4 pr-4 ">
                <div className=" text-section">
                  <h1 className="card-title text-center">ABOUT US</h1>
                  <p className="card-text d-flex align-items-start ">
                    Ekak Innovations is a social enterprise based out of Kanpur.
                    The company is working on access to energy, livelihood and
                    mobility space. In addition to that, during the pandemic we
                    are helping offices and factories migrate to touchless
                    attendance systems. Ekak envisions creating a sustainable
                    future by creating technology solutions that change lives.
                    The company at present works for fishermen in East Africa,
                    farmers in rural India, Cab-drivers in urban India and
                    truckers who are the backbone of our country.
                  </p>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-end">
                <img
                  src="https://ekak.in/assets/images/PicsArt_11-17-12.42.52_79_7_70.png"
                  className="img-fluid "
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default About;
