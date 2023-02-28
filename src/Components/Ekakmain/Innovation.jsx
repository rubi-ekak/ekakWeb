import React from "react";
import "./Innovation.css";
const Innovation = () => {
  return (
    <section className="innovation-section">
      <div className=" heading_sustability ">
        <h1 className="innoheading">INNOVATIONS</h1>
      </div>
      <div className="innovation container-fluid content">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className=" card card1">
              <img
                className=""
                src="https://ekak.in/assets/images/man-g3602522b8_1920_-_Copy_828x466.jpg"
              ></img>
              <div className="card-body">
                <h5 className="mt-2 innosubhead1">A.R.G.U.S.</h5>
                <h6 className="mt-2 innosubhead2">
                  A product to take daily employee attendance
                </h6>
                <ul className="unorder-list">
                  <li>Face recognition based attendance system</li>
                  <li>Touchless operation, needed in covid times</li>
                  <li>State of the art cloud based reporting</li>
                  <li>Voice commands based admin operations</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className=" card card2">
              <img
                className=""
                src="https://ekak.in/assets/images/sabi_hub_828x466_2_50.png"
              ></img>
              <div className="card-body">
                <h5 className="mt-2 innosubhead1">Solar Charging Hub</h5>
                <h6 className="mt-2 innosubhead2">
                A renewable energy powered central station
                </h6>
                <ul className="unorder-list">
                  <li>330W - 2kW solar capacity</li>
                  <li>Remote locking & unlocking system</li>
                  <li>Used to charge lamps & operate productive load</li>
                  <li>Adaptable to charge electric 2-wheeler</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className=" card card3">
              <img
                className=""
                src="https://ekak.in/assets/images/pf-1_828x466.jpg"
              ></img>
              <div className="card-body">
                <h5 className="mt-2 innosubhead1">Driver Assistance & Vehicle Emergency</h5>
                <h6 className="mt-2 innosubhead2">
                An edge IoT solution to make roads safer
                </h6>
                <ul className="unorder-list">
                  <li>Driver drowsiness and fatigue detection</li>
                  <li>Driver drowsiness and fatigue detection</li>
                  <li>Driver discipline analysis</li>
                  <li>Powered by advanced computer vision</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className=" card card4">
              <img
                className=""
                src="https://ekak.in/assets/images/cropped-Prajapati_Ekak-2_828x466.jpg"
              ></img>
              <div className="card-body">
                <h5 className="mt-2 innosubhead1">Krishi Ekka Kit</h5>
                <h6 className="mt-2 innosubhead2">
                
                Electrification of milling operations
                </h6>
                <ul className="unorder-list">
                  <li>3HP, 5HP & 7HP kit</li>
                  <li>AC or DC electrical architecture</li>
                  <li>Solar PV system (add-on)</li>
                  <li>IoT enabled remote locking mechanism</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
