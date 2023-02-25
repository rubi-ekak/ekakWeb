import React from "react";
import "./Offer.css";

const Offer = () => {
  return (
    <section>
      <div className="offer-section">
        <div className="container-fluid cardcontent">
          <div className="d-flex justify-content-center align-items-center heading ">
            <h1>SUITE OF OFFERINGS</h1>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="d-flex align-item-center justify-content-center p-1">
                <h3>Sabi Lamp</h3>
              </div>
              <img
                src="https://ekak.in/assets/images/sblmp.png"
                className="img-fluid"
              ></img>

              <div className="text-box">
                <ul>
                  <li>5W LED Light</li>
                  <li>500+ lumens brightness</li>
                  <li>Waterproof lamp</li>
                  <li>Chargeable through Solar and Grid</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-12  ">
              <div className="d-flex align-item-center justify-content-center p-1">
                <h3>Solar power bank</h3>
              </div>
              <img
                src="https://ekak.in/assets/images/Screenshot%20(558)%20-%20Copy%20-%20Copy%20-%20Copy.png"
                className="img-fluid"
              ></img>

              <div className="text-box">
                <ul>
                  <li>40W Solar Panel Capacity</li>
                  <li>6Ah LiFePO4 battery</li>
                  <li>Output: 5V at 1A and 2A</li>
                  <li>Bluetooth speaker</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="d-flex align-item-center justify-content-center p-1">
                <h3>Solar Charging Hub</h3>
              </div>
              <img
                src="https://ekak.in/assets/images/1639726776136_-_Copy.png"
                className="img-fluid"
              ></img>

              <div className="text-box">
                <ul>
                  <li>330W - 2kW Solar Capacity</li>
                  <li>Remote Locking & unlocking system</li>
                  <li>Used to charge lamps & operate productive load</li>
                  <li>Adaptable to charge electric 2-wheeler</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="d-flex align-item-center justify-content-center p-1">
                <h3>Krishi Ekka Kit</h3>
              </div>
              <img
                src="https://ekak.in/assets/images/maxresdefault%20(1).jpg"
                className="img-fluid"
              ></img>

              <div className="text-box">
                <ul>
                  <li>3kW - 5kW Capacity</li>
                  <li>AC and DC Motor Options</li>
                  <li>Runs on Solar, Biogas-Genset and Grid</li>
                  <li>Flour Mill and Hammer Mill Adaptable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
