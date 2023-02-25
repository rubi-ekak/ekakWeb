import React from "react";
import "./Action.css";

const Action = () => {
  return (
    <section className="action-call">
      <div className="container-fluid actioncontent">
        <div className="row g-5">
          <div className="col-lg-6 col-12  actiondiv">
            <a>
              <button className="btn buttonbt">
                <h3>REQUEST ORDER</h3>
              </button>
            </a>
          </div>
          <div className="col-lg-6 col-12 actiondiv">
            <a>
              <button className="btn buttonbt">
                <h3>COLLABORATE WITH US</h3>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Action;
