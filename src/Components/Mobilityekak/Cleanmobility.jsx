import React from "react";
import "./Cleanmobility.css";

const Cleanmobility = () => {
  return (
    <section className="cleanmobility">
      <div className=" heading_cleanmobility ">
        <h1 className="clean-heading">CLEAN AND CONNECTED MOBILITY</h1>
      </div>
      <div className="container-fluid cleaddiv">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 cleandiv1 p-3">
            <div className="txt-1">
              <div className="sub-heading">
                <h3 className="clean-sub-heading">SUSTAINABLE CHARGING</h3>
              </div>
              <p className="cleanpara">
                We are at the precipice of the electric car revolution and the
                immediate need surrounding this is a grid of charging stations.
                Ekak innovations is helping create charging stations that run on
                sustainable energy.
              </p>
            </div>
            <div className="imagesection">
              <img
                src="https://ekak.in/assets/images/1000x-1_1_548x308.jpg"
                alt="image"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 cleandiv2 borderdiv p-3 ">
            <div className="imagesection">
              <img
                src="https://ekak.in/assets/images/electric-car-2_548x308.jpg"
                alt="image"
                className="img-fluid"
              />
            </div>

            <div className="txt-1">
              <div className="sub-heading">
                <h3 className="clean-sub-heading">ELECTRIC VEHICLES</h3>
              </div>
              <p className="cleanpara">
                Ekak innovations is co-creating custom electric vehicles parts
                hence transforming regular vehicles to electric vehicles. In
                addition to that, we provide part-as-a-service so transforming
                the ownership model of electric vehicles.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 cleandiv1 p-3">
            <div className="txt-1">
              <div className="sub-heading">
                <h3 className="clean-sub-heading">CONNECTED VEHICLES</h3>
              </div>
              <p className="cleanpara">
                Ekak Innovations is connecting vehicles and parts of the
                vehicles to the internet at a lower cost with precision
                engineering hence paving the way for fleet intelligence and
                automation. Along with this insight-as-service is offered.
              </p>
            </div>
            <div className="imagesection">
              <img
                src="https://ekak.in/assets/images/CAV-simulation-flourish-_1_554x312.jpg"
                alt="image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cleanmobility;
