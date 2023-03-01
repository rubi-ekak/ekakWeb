import React from "react";
import "./Success.css";

const Success = () => {
  return (
    <section className="success_story">
      <div className="d-flex justify-content-center align-items-center ">
        <h1 className="heading ">SUCCESS STORY</h1>
      </div>
      <div className="container-fluid content">
        <div className="container1">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-12 sucdiv">
              <div className="image">
                <img
                  src="https://ekak.in/assets/images/WhatsApp_Image_2021-11-08_at_2.22.23_PM_980x582.jpeg"
                  alt="product-imges"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-12 d-flex sucdiv justify-content-start align-items-center pl-3 pr-3">
              <div className="text-section">
                <div className="">
                  <h2 className="subh2">SABI-LAMP</h2>
                  <h5 className="subh5">TANZANIA</h5>
                </div>
                <div className="text">
                  <p className="succtext">
                    On Lake Victoria, every night about 100,000 boats enter from
                    Kenya, Uganda and Tanzania to fish for Sardines. Each boat
                    carries about 8 to 10 kerosene lanterns fuelled by 3.5
                    litres of oil each night.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion accordion-flush">
            <div className="accordion-item ">
              <h2 className="accordion-header text d-flex justify-content-end ">
                <button id="buttonaccordion"
                  className="accordion-button collapsed accordion-color "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne1"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  See Details
                </button>
              </h2>
              <div
                id="flush-collapseOne1"
                className="accordion-collapse collapse "
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body accordion-color">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 accordion-padding">
                      <h5  className="accordionh5">THE SOLUTION</h5>
                      <p className="accordion-para">
                        Sabi lamps - a solar powered alternative, with 5W
                        brightness and 10 hours battery backup
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 accordion-padding">
                      <h5 className="accordionh5">OUR CUSTOMER</h5>
                      <p className="accordion-para">
                        Sagar Energy Solutions, a social for profit enterprise
                        based in Mwanza, Tanzania
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 accordion-padding">
                      <h5 className="accordionh5">BENIFITS DELIVERED</h5>
                      <p className="accordion-para">
                        USD 45,000 saved per year Clean, green and safer
                        operations
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 accordion-padding">
                      <h5 className="accordionh5">GOAL ADDRESSED</h5>
                      <ul
                        type="circle"
                        className="d-flex justify-content-between "
                      >
                        <li className="accordion-para">1 No Poverty</li>
                        <li className="accordion-para">7 Affordable & Clean Energy</li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 accordion-padding">
                      <h5 className="accordionh5">END BENEFICIARIES</h5>
                      <p className="accordion-para">Camp-owners & Fishermen</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 accordion-padding">
                      <h5 className="accordionh5">CARBON DI-OXIDE OFFSET</h5>
                      <p className="accordion-para">Approx 260,000 kgs per year</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-12 d-flex  justify-content-start align-items-center sucdiv">
              <div className="text-section">
                <div className="">
                  <h2 className="subh2">MLEKO DAIRY</h2>
                  <h5 className="subh5">INDIA</h5>
                </div>
                <div className="text">
                  <p className="succtext">
                    Mleko dairy was eager to make their own cattle feed with the
                    aim to improve nutrition content and reduce expenses on
                    off-the-shelf feed. Mleko wanted to setup a cattle feed
                    grinder which typically runs on diesel-engine based
                    mechanical power.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-12 sucdiv">
              <div className="image">
                <img
                  src="https://ekak.in/assets/images/grinder_980x582.jpeg"
                  alt="product-imges"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="accordion accordion-flush">
            <div className="accordion-item ">
              <h2 className="accordion-header text  ">
                <button id="buttonaccordion"
                  className="accordion-button collapsed accordion-color d-flex justify-content-start"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  See Details
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse "
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body accordion-color">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 accordion-padding">
                      <h5 className="accordionh5">THE SOLUTION</h5>
                      <p className="accordion-para">
                        3 HP single-phase AC induction motor powered cattle feed
                        half screen grinder
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 accordion-padding">
                      <h5 className="accordionh5">OUR CUSTOMER</h5>
                      <p className="accordion-para">
                        Mleko Dairy – situated in Unnao powered by 5kW Solar PV
                        system and 30HP Biogas-genset
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 accordion-padding">
                      <h5 className="accordionh5">BENIFITS DELIVERED</h5>
                      <p className="accordion-para">
                        90 kgs/hour of feed generation USD 6,400 saved per year
                        on feed
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 accordion-padding">
                      <h5 className="accordionh5">GOAL ADDRESSED</h5>
                      <ul
                        type="circle"
                        className="d-flex justify-content-between "
                      >
                        <li className="accordion-para">7 Affordable & Clean Energy</li>
                        <li className="accordion-para">11 Sustainable Communities</li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 accordion-padding">
                      <h5 className="accordionh5">END BENEFICIARIES</h5>
                      <p className="accordion-para">Dairy-owner & Operators</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 accordion-padding">
                      <h5 className="accordionh5">CARBON DI-OXIDE OFFSET</h5>
                      <p className="accordion-para">Approx 4,500 kgs per year per system</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
