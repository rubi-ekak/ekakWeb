import React from "react";
import "./RoadSafer.css";

const RoadSafer = () => {
  return (
    <section>
      <div className="roadsafer">
        <div className="container-fluid cardcontent">
          <div className="row row1">
            <div className="col-xl-6 col-12  ">
              <img
                src="https://ekak.in/assets/images/road-accident-1024x645_848x478.jpeg"
                className="img-fluid"
              ></img>
            </div>
            <div className="col-xl-6 col-12  d-flex align-items-center justify-content-center">
              <div className="txt">
                <h2 className="d-flex justify-content-center align-items-center">
                  THE PROBLEM
                </h2>
                <p className="offer-paragraph">
                  Driver fatigue is one of the leading causes of road accidents.
                  With more than 4.5 million accidents every year only in India,
                  this is both a grave and solvable problem.
                </p>
              </div>
            </div>
          </div>
          <div className="row row1">
            <div className="col-xl-6 col-12 d-flex align-items-center justify-content-center">
              <div className="txt">
                <h2 className="d-flex justify-content-center align-items-center">
                  THE SOLUTIONS
                </h2>
                <p className="offer-paragraph">
                  An advanced computer vision tool to monitor driver distraction
                  while continuously monitoring driving style to alert the
                  driver when unsafe driving patterns are detected.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-12">
              <img
                src="https://ekak.in/assets/images/highways.jpg"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadSafer;
