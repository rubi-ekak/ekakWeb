import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navshow, setNavshow] = useState(false);

  const navbaarshow = () => {
    if (window.scrollY >= 100) {
      setNavshow(true);
    } else {
      setNavshow(false);
    }
  };
  window.addEventListener("scroll", navbaarshow);

  return (
    <>
      <nav
        class={
          navshow
            ? "navbar navbar-expand-lg navbar-dark fixed-top active"
            : "navbar navbar-expand-lg navbar-dark fixed-top"
        }
      >
        <div class="container-fluid cont ">
          <NavLink to="/" class="navbar-brand">
         
            <img className="logo" src="/logo192.png" alt="Bootstrap" />
          </NavLink>

          <button
            class="navbar-toggler custom-navbar"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span class="navbar-toggler-icon icon nav-togg"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink to="/cleanenergy" className="nalink">
                  Clean Energy
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/Mobility" className="nalink">
                  Mobility
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/Ekakshar" className="nalink">
                  Ekakshar
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
