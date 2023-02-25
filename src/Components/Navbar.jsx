import React from "react";
import "./Navbar.css";

const Navbar = () => {

  
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid cont">
              <a class="navbar-brand" href="#">
                <img
                className='logo'
                  src="/logo192.png"
                  alt="Bootstrap"
                
                />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">
                    Clean Energy
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                     Mobility
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Ekakshar
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
