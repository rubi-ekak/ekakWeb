import React from "react";
import "./Achievment.css"

const Achievment = () => {
  return (
    <section className="achievment">
      <div className=" heading_sustability ">
        <h1 className="innoheading">AWARDS AND ACHIEVEMENTS</h1>
      </div>
      <div className="container-fluid content">
        <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <div className="card1">
                    <img src="https://ekak.in/assets/images/NSRCEL_Certificate_Scan_630x420.png" alt="image" className="img-fluid"></img>
                    </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <div className="card1">
                    <img src="https://ekak.in/assets/images/nipp_630x420.png" alt="image" className="img-fluid"></img>
                    </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Achievment;
