import React from "react";
import "./Carousal.css";

const Carousal = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://ekak.in/assets/images/banner1.jpg"
              className="Carousel_image w-100"
              alt="..."
            />
            <div className="carousel-caption caption_container ">
              <h3 className="small_heading">
                A solution for Lake Victoria, Tanzania
              </h3>
              <h1 className="middle_heading">Solar Powered Fishing Lamps</h1>
              <h3 className="small_heading">
                A replacement of kerosene lantern co-created with Sagar Energy
                Solution based in Mwanza, Tanzania
              </h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://ekak.in/assets/images/banner-3.png"
              className="Carousel_image w-100"
              alt="..."
            />
            <div className="carousel-caption caption_container ">
              <h3 className="small_heading">Making roads safer</h3>
              <h1 className="middle_heading">
                Driver Assistance & Vehicle Emergency
              </h1>
              <h3 className="small_heading">
                DAVE is an advanced computer vision mobility solution built to
                assist drivers and make roads safer.
              </h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://ekak.in/assets/images/partners-fotolia_61152717_subscription_monthly_xxl.jpg"
              className="Carousel_image w-100"
              alt="..."
            />
            <div className="carousel-caption caption_container ">
              <h3 className="small_heading">
                Address social challenges together
              </h3>
              <h1 className="middle_heading">Co-creation Lab</h1>
              <h3 className="small_heading">
                We will help build your solution from idea to manufacturing.
                Partner with us and tackle the UN SDGs.
              </h3>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousal;
