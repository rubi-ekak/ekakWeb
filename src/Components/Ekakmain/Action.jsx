import React from "react";
import "./Action.css";

const Action = () => {
  return (
    <section className="action-call">
      <div className="container-fluid actioncontent">
        <div className="row g-5">
          <div className="col-lg-6 col-12  actiondiv">
            <a href="https://forms.gle/yWr4ga1JkacqAGSn6" target="_blank">
              <button className="btn buttonbt">
                <h3 className="actionhead">REQUEST ORDER</h3>
              </button>
            </a>
          </div>
          <div className="col-lg-6 col-12 actiondiv">
            <a href="https://forms.gle/HxM5imzteycM9hSW9" target="_blank">
              <button className="btn buttonbt">
                <h3 className="actionhead">COLLABORATE WITH US</h3>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Action;
