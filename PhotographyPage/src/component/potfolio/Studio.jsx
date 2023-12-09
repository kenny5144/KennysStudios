import React from "react";
import Navbar from "../Navbar";
import image1c from "../../images/homepageimages/image1c.jpg";
import kay3 from "../../images/homepageimages/kay3.jpg";
import sele from "../../images/homepageimages/sele.jpg";
import maria from "../../images/homepageimages/maria.jpg";
import selecover from "../../images/homepageimages/selecover.jpg";
import mek1 from "../../images/studio/mek1.jpg"
import mek4 from "../../images/studio/mek4.jpg"
import mek5 from "../../images/studio/mek5.jpg"
import mek3 from "../../images/studio/mek3.jpg"
import mek2 from "../../images/studio/mek2.jpg"
import mek6 from "../../images/studio/mek6.jpg"
import sel from "../../images/studio/sel.jpg"
import sel1 from "../../images/studio/sel1.jpg"
import sel2 from "../../images/studio/sel2.jpg"
import sel3 from "../../images/studio/sel3.jpg"

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
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src={mek1}
            alt=""
          />
          
        </div>
        <div>
          <img
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src= {sel1}
            alt=""
          />
        </div>
        <div>
          <img
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src={mek2}
            alt=""
          />
        </div>
      
      </div>
      <div className="grid  gap-4">
        <div>
          <img
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src={sele}
            alt=""
          />
        </div>
        <div>
          <img
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src= {mek5}
            alt=""
          />
        </div>
        <div>
          <img
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src= {sel}
            alt=""
          />
        </div>

     
      </div>
      <div className="grid gap-4">
        <div>
          <img
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src= {mek6}
            alt=""
          />
        </div>
        
        <div>
          <img
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src= {sel2 }
            alt=""
          />
        </div>
        <div>
          <img
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src= {mek3}
            alt=""
          />
        </div>
      
      </div>
      
    </div>
</>
  )
}

export default Studio
