import React from "react";
import Navbar from "../Navbar";
import long1 from "../../images/events/long1.jpg";
import long2 from "../../images/events/long2.jpg";
import long3 from "../../images/events/long3.jpg";
import long4 from "../../images/events/long4.jpg";
import short1 from "../../images/events/short1.jpg";
import short2 from "../../images/events/short2.jpg";
import short3 from "../../images/events/short3.jpg";
import short4 from "../../images/events/short4.jpg";
import short5 from "../../images/events/short5.jpg";
import short6 from "../../images/events/short6.jpg";
import short from "../../images/events/short.jpg";



const Event = () => {
  return (
    <>
      {/* <Navbar/> */}
      <h1 className="text-center text-5xl mb-4">Events </h1>
      <h2 className=" text-center   text-2xl mt-5 mb-10"> From local business events to School ceremonies, we have you covered.</h2>

      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="grid gap-4">
          <div>
            <img 
            
            loading="lazy"
              className="h-auto max-w-full rounded-lg"
              src={long1}
              alt=""
            />
            
          </div>
          <div>
            <img 
            
            loading="lazy"
              className="h-auto max-w-full rounded-lg"
              src= {short1}
              alt=""
            />
          </div>
          <div>
            <img 
            
            loading="lazy"
              className="h-auto max-w-full rounded-lg"
              src={long2}
              alt=""
            />
          </div>
         
        </div>
        <div className="grid gap-4">
          <div>
            <img 
            
            loading="lazy"
              className="h-auto max-w-full rounded-lg"
              src={short3}
              alt=""
            />
          </div>
          <div>
            <img 
            
            loading="lazy"
              className="h-auto max-w-full rounded-lg"
              src= {long3}
              alt=""
            />
          </div>
          <div>
            <img 
            
            loading="lazy"
              className="h-auto max-w-full rounded-lg"
              src={short}
              alt=""
            />
          </div>
          {/* <div>
            <img 
            
            loading="lazy"
              className="h-auto max-w-full rounded-lg"
              src=}
              alt=""
            />
          </div> */}
        </div>
        <div className="grid gap-4">
          <div>
            <img 
            
            loading="lazy"
              className="h-auto max-w-full rounded-lg"
              src= {long4}
              alt=""
            />
          </div>
          
          <div>
            <img 
            
            loading="lazy"
              className="h-auto max-w-full rounded-lg"
              src= {short4 }
              alt=""
            />
          </div>
          <div>
            <img 
            
            loading="lazy"
              className="h-auto max-w-full rounded-lg"
              src= {short5}
              alt=""
            />
          </div>
          {/* <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src= {kay3}
              alt=""
            />
          </div> */}
        </div>
        
      </div>
  </>
  );
};

export default Event;
