import React from "react";
import "./Ekaksharmain.css";

const Ekaksharmain = () => {
  return (
    <section className="ekakshar">
      <div className="ekakshar-image d-flex justify-content-center align-items-center">
        <img
          src="https://ekak.in/assets/images/ekakshar_backgroudEdited.png"
          className="ekasharimage"
        ></img>
      </div>
      <div className="context">
        <h2 className="ekak-sub-heading1">Ekakshar is Changing the World of 3D Printing</h2>
        <h3 className="ekak-sub-heading">
          Once mobile phones, air travel was an experience of luxury, then
          technology made it affordable. Ekakshar is the conduit for making 3D
          printing affordable
        </h3>
        <a href="" target="_blank"><button type="button" class=" btn-lg orderbutton">Order Now</button></a>
        
      </div>
    </section>
  );
};

export default Ekaksharmain;
