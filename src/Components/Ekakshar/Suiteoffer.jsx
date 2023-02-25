import React from 'react'
import "./Suiteoffer.css"


const Suiteoffer = ({data}) => {
    let datastock={data}
    console.log(datastock.data)
  return (
    <section className="suite-offer">
     <div className="suite-heading">
    <h1 className="suite-sub-heading">SUITE OF OFFERINGS</h1>
     </div>
     <div className="container-fluid suite-container">
       <div className="row g-5">
           
           {
               datastock.data.map((ele,index)=>{
                   return(
                    <div className="col-lg-4 col-12 suite-4">
                    <img src={ele.image} className="img-fluid"></img>
                    <div className="headsolar">
                        <h3>{ele.Name}</h3>
                     
                    </div>
                    </div>
                   )
               })
           }
           
           
       </div>
     </div>
    </section>
  )
}

export default Suiteoffer
