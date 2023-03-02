import React from 'react'
import './Solution.css'

const Solution = () => {
  return (
    <section className="solution">
      <div className="d-flex justify-content-center align-items-center heading1 ">
        <h1 className="heading-solution">THE PROBLEMS WE ADDRESS</h1>
      </div>
        <div className="container-fluid content">
            <div className='row'>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <img src=" https://ekak.in/assets/images/IMG_20151211_190314_1__560x344.jpg" alt="solutionsimage" className="img-fluid">
                    </img>
                    <div className="tag"><a href="#"><h3 className="solusub">Clean Enery</h3></a></div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                <img src=" https://ekak.in/assets/images/smart-mobility7_1_560x344.jpg" alt="solutionsimage" className="img-fluid"/>
                <div className="tag"><a href="#"><h3 className="solusub">Mobility</h3></a></div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                <img src=" https://ekak.in/assets/images/livelihood-mast1_1_560x344.jpg" alt="solutionsimage" className="img-fluid"/>
                <div className="tag"><a href="#"><h3 className="solusub">Livelihood</h3></a></div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Solution
