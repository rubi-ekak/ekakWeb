import React from "react";
import "./Carousel1.css";

const Carousal1 = () => {
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
          
        </div>
        <div className="carousel-inner">
          
          <div className="carousel-item">
            <img
              src="https://ekak.in/assets/images/IMG_20191007_154420_828x466_711x361.jpg"
              className="Carousel_image w-100 img-fluid  picture banner"
              alt="..."
            />
            <div className="carousel-caption caption_container ">
              <h3 className="small_heading">Greening the dairy cattle feed</h3>
              <h1 className="middle_heading">
              Moo-ing Towards Sustainiability
              </h1>
              <h3 className="small_heading">
              The krishi ekka kit enabled mleko dairy to make their own cattle feed sustainably.
              </h3>
            </div>
          </div>

          <div className="carousel-item active">
            <img
              src="https://ekak.in/assets/images/banner1.jpg"
              className="Carousel_image w-100 picture"
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

export default Carousal1;
