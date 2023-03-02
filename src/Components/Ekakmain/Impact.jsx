import React from "react";
import "./Impact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLeaf} from '@fortawesome/free-solid-svg-icons'
import {faFireFlameCurved} from '@fortawesome/free-solid-svg-icons'
import {faMoneyBill1} from '@fortawesome/free-solid-svg-icons'

const Impact = () => {
  return (
    <section className="impact">
      <div className=" heading_impact ">
        <h1 className="innoheading">OVERALL IMPACT</h1>
        <h4 className="imp-sub-head">
          Since 2018, the anticipated impact to our end beneficiaries through
          our products include
        </h4>
      </div>
      <div className="container-fluid content">
        <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 text-center ">
       <span className="m-4"><FontAwesomeIcon icon={faLeaf} className="svg-inline--fa fa-leaf" /></span> 
        
            <h4>
            107000+ litres per year
            </h4>
            <h6  className="impact-effect">
            CARBON DI-OXIDE OFFSET
          
            </h6>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 text-center ">
        <span className="m-4"><FontAwesomeIcon icon={faFireFlameCurved} className="svg-inline--fa fa-leaf"/></span>
        
            <h4>
            118000+ USD per year
            </h4>
            <h6 className="impact-effect">
            FINANCIAL SAVINGS DELIVERED
            </h6>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 text-center ">
        <span className="m-4"><FontAwesomeIcon icon={faMoneyBill1} className="svg-inline--fa fa-leaf "/></span>
        
            <h4>
            45360000+ kgs per year
            </h4>
            <h6 className="impact-effect">
            FOSSIL FUEL CONSERVED
            </h6>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
