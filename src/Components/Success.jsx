import React from "react";
import "./Success.css";

const Success = () => {
  return (
    <section className="success_story">
      <div className="d-flex justify-content-center align-items-center heading ">
        <h1>SUCCESS STORY</h1>
      </div>
      <div className="container-fluid content">
        <div className="container1">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-12">
              <div className="image">
                <img
                  src="https://ekak.in/assets/images/WhatsApp_Image_2021-11-08_at_2.22.23_PM_980x582.jpeg"
                  alt="product-imges"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-12 d-flex  justify-content-start align-items-center">
              <div className="text-section">
                <div className="">
                  <h2>SABI-LAMP</h2>
                  <h5>TANZANIA</h5>
                </div>
                <div className="text">
                  <p>
                    On Lake Victoria, every night about 100,000 boats enter from
                    Kenya, Uganda and Tanzania to fish for Sardines. Each boat
                    carries about 8 to 10 kerosene lanterns fuelled by 3.5
                    litres of oil each night.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item accordion-color">
              <h2 class="accordion-header text" id="flush-headingOne">
                <button
                  class="accordion-button collapsed accordion-color"
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
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the first item's accordion body.
                </div>
                
              </div>
              
            </div>
           
          </div>
         
         
        </div>
        <div className="container2"></div>
      </div>
    </section>
  );
};

export default Success;
