import Navbar from "../component/Navbar";
import image1c from "../images/homepageimages/image1c.jpg";
import imagecover from "../images/homepageimages/imagecover.png";
import sele from "../images/homepageimages/sele.jpg";
// import { Slides } from "./slidesdata";
import React from "react";
function Home() {
  const Slides = [
    {
      image: "../images/homepageimages/image1c.jpg"

    },
    {
      image:
      "../images/homepageimages/image1c.jpg"
    }
  ];
  return (
    <>
    

      {Slides.map((slide, index) => {
        return(
            <div key={index} className="max-w-{1400px} h-{780px} w-full m-auto py-16 px-4 relative"><img src={slide.image} alt="shoot img " /></div>
            //  <img key={index} src={slide.image} alt="photography" />
    //        <div  key={index} className="max-w-{1400px} h-{780px} w-full m-auto py-16 px-4 relative">
    // <div
    //     className="m-auto w-full h-full"
    //   >

    //   </div>
    //       </div>
        )
      })}

      <div className="w-11/12 m-auto justify-center">
        <h1 className="text-center text-bold text-3xl mb-2"> My Work</h1>
        <div>
          <div className="w-64 h-80">
            <img src={sele} alt="" />

            <p className="text-4xl text-bold">Events</p>
          </div>

          <div className="w-64 mt-2 h-80">
            <img src={image1c} alt="" />
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
    </>
  );
}

export default Home;
