import React from 'react'
import image1c from "../images/homepageimages/image1c.jpg";
import imagecover from "../images/homepageimages/imagecover.png";
import sele from "../images/homepageimages/sele.jpg"

const Investment = () => {
  return (
    <div className="w-11/12 m-auto justify-center">
    <h1 className="text-center text-bold text-3xl mb-2"> My Work</h1>
    <div>
      <div className="w-64 h-80">

        <img src={sele} alt="" />
        <h5>Events</h5>
        <p>1 photographger </p>
        <p></p>
      </div>

      <div className="w-64 mt-2 h-80">
        <img src={image1c} alt="" />
        <h2>h</h2>
        <p>lifestyle</p>
      </div>

      <div className="w-64 h-80 mt-2">
        <img src={image1c} alt="" />
        <p>commercial</p>
      </div>

      <div className="w-64 h-80 mt-2">
        <img src={image1c} alt="" />
        <p>Studio</p>
      </div>
    </div>
  </div>
  )
}

export default Investment
