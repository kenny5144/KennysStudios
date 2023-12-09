import React from "react";
import Navbar from "../Navbar";
import maria from "../../images/lifestyles/maria.jpg"
import maria1 from "../../images/lifestyles/maria1.jpg"
import maria2 from "../../images/lifestyles/maria2.jpg"
import maria3 from "../../images/lifestyles/maria3.jpg"
import ono1 from "../../images/lifestyles/ono1.jpg"
import ono2 from "../../images/lifestyles/ono2.jpg"
import ono from "../../images/lifestyles/ono.jpg"
import sade1 from "../../images/lifestyles/sade1.jpg"
import sade from "../../images/lifestyles/sade.jpg"
import taye from "../../images/lifestyles/taye.jpg"
const Lifestyle = () => {
  return (
    <>
    {/* <Navbar/> */}
    <h1 className="text-center text-5xl mb-4">Lifestyle </h1>

    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="grid gap-4">
        <div>
          <img
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src={ono}
            alt=""
          />
          
        </div>
        <div>
          <img
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src= {maria}
            alt=""
          />
        </div>
        <div>
          <img
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src={taye}
            alt=""
          />
        </div>

      </div>
      <div className="grid gap-4">
        <div>
          <img
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src={maria1}
            alt=""
          />
        </div>
        <div>
          <img
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src= {ono1}
            alt=""
          />
        </div>
    
        <div>
          <img
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src={maria2}
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src= {ono2}
            alt=""
          />
        </div>
        
        <div>
          <img
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src= {sade }
            alt=""
          />
        </div>
        <div>
          <img
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src= {sade1}
            alt=""
          />
        </div>
       
      </div>
      
    </div>
</>
  )
}

export default Lifestyle
