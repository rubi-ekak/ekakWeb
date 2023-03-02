import React from "react";
import "./Cardenergy.css";

const Cardenergy = () => {
  return (
    <section>
      <div className="cardenergy">
        <div className="container-fluid cardcontent">
          <div className="row row1">
            <div className="col-xl-6 col-12  ">
              <img
                src="https://ekak.in/assets/images/maxresdefault_848x477.jpg"
                className="img-fluid"
              ></img>
            </div>
            <div className="col-xl-6 col-12  d-flex align-items-center justify-content-center">
              <div className="txt">
                <h2 className="d-flex justify-content-center align-items-center">CO-CREATION MODEL</h2>
                <p className="offer-paragraph">
                  We offer product development support to companies &
                  individuals to help them go from an idea to go-to-market final
                  product. We build a tailor-made solution which aligns the
                  sustainable development goals with our client offerings.
                </p>
              </div>
            </div>
          </div>
          <div className="row row2">
            <div className="col-xl-6 col-12 d-flex align-items-center justify-content-center">
              <div className="txt">
                <h2 className="d-flex justify-content-center align-items-center">EKAK INNOVATES</h2>
                <p className="offer-paragraph">
                  Our passion to address sustainability challenges leads us to
                  create solutions directly working with our customers and
                  end-beneficiary. Our solutions address the needs in the clean
                  energy, mobility and livelihood space.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-12">
              <img src="https://ekak.in/assets/images/Men-Village-Scene-Rural-Cultural-India-Smiling-4156813_848x477.jpg" className="img-fluid"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cardenergy;
