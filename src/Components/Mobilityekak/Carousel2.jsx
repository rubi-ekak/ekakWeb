import React from 'react'
import "./Carousel2.css"

const Carousel2 = () => {
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
              src="https://ekak.in/assets/images/minor-car-accident%20(2).jpeg"
              className="Carousel_image w-100 picture"
              alt="..."
            />
            <div className="carousel-caption caption_container ">
              <h3 className="small_heading">
              Using technology for driver assistance
              </h3>
              <h1 className="middle_heading">Minimizing Driver Error </h1>
              <h3 className="small_heading">
              Dave helps monitoring lanes, assists the driver through alerts during unforseen lane changes.
              </h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://ekak.in/assets/images/wil-stewart-2_lW8MAvDMs-unsplash_2_38_1920x1080.jpg"
              className="Carousel_image w-100 picture"
              alt="..."
            />
            <div className="carousel-caption caption_container ">
              <h3 className="small_heading">Automated solution for driver safety</h3>
              <h1 className="middle_heading">
              Smart Driver Assistance
              </h1>
              <h3 className="small_heading">
              Driver distractions and drowsiness accidents are avoided with assistance from our smart edge IoT device.
              </h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://ekak.in/assets/images/michael.jpg"
              className="Carousel_image w-100 picture"
              alt="..."
            />
            <div className="carousel-caption caption_container ">
              <h3 className="small_heading">
              Cleaning the ecosystem, one car at a time


              </h3>
              <h1 className="middle_heading">Good Bye Fuel, Hello Electric</h1>
              <h3 className="small_heading">
              Creating an ecosystem of electric vehicle and charging stations to accelerate clean mobility.
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
  )
}

export default Carousel2
