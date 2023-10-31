import React from "react";
import Navbar from "../Navbar";
import image1c from "../../images/homepageimages/image1c.jpg";
import shots from "../../images/homepageimages/shots.jpg";
import kay3 from "../../images/homepageimages/kay3.jpg";
import sele from "../../images/homepageimages/sele.jpg";
import maria from "../../images/homepageimages/maria.jpg";
import selecover from "../../images/homepageimages/selecover.jpg";
import baba from "../../images/homepageimages/baba.jpg";

import babyshowershot2 from "../../images/homepageimages/babyshowershot2.jpg";
import babyshowershot1 from "../../images/homepageimages/babyshowershot1.jpg";
import remembrance from "../../images/homepageimages/remembrance.jpg";
import kay1 from "../../images/homepageimages/kay1.jpg";



const Studio = () => {
  return (
    <>
    {/* <Navbar/> */}
    <h1 className="text-center text-5xl mb-4">Studio </h1>

    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={image1c}
            alt=""
          />
          
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src= {babyshowershot2}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={babyshowershot1}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={kay1}
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={remembrance}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src= {sele}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={selecover}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={shots}
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src= {maria}
            alt=""
          />
        </div>
        
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src= {baba }
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src= {babyshowershot1}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src= {kay3}
            alt=""
          />
        </div>
      </div>
      
    </div>
</>
  )
}

export default Studio
