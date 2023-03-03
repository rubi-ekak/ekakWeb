import React from "react";
import "./Sustability.css"

const Suatability = () => {
  return (
    <section className="sustability">
      <div className=" heading_sustability ">
        <h1 className="susheading text-center">SUSTAINABLE DEVELOPMENT GOALS - OUR CORNERSTONE</h1>
        <h5 className="sushead">With our suite of products – make a difference</h5>
      </div>
      <div className="sustability_images container-fluid sustability_container">
       <div className="row">
         <div className="col-lg-2 col-md-4  col-6 mt d-flex align-items-center justify-content-center">
           <img src="https://ekak.in/assets/images/E_WEB_01_144x144.png" className="img-fluid imgset"></img>
         </div>
         <div className="col-lg-2 col-md-4  col-6  mt d-flex align-items-center justify-content-center">
           <img src="https://ekak.in/assets/images/E_WEB_02_144x144.png" className="img-fluid imgset"></img>
         </div><div className="col-lg-2 col-md-4  col-6  mt d-flex align-items-center justify-content-center">
           <img src="https://ekak.in/assets/images/E_WEB_07_144x144.png" className="img-fluid imgset"></img>
         </div><div className="col-lg-2 col-md-4  col-6  mt d-flex align-items-center justify-content-center">
           <img src="https://ekak.in/assets/images/E_WEB_08_144x144.png" className="img-fluid imgset"></img>
         </div>
         <div className="col-lg-2 col-md-4   col-6 mt d-flex align-items-center justify-content-center">
           <img src="https://ekak.in/assets/images/E_WEB_09_144x144.png" className="img-fluid imgset"></img>
         </div>
         <div className="col-lg-2 col-md-4  col-6  mt d-flex align-items-center justify-content-center ">
           <img src="https://ekak.in/assets/images/E_WEB_11_144x144.png" className="img-fluid imgset"></img>
         </div>
       </div>
      </div>
    </section>
  );
};

export default Suatability;
