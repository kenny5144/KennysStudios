import React from "react";
import Navbar from "../Navbar";
import land1 from "../../images/business/land1.jpg";
import land2 from "../../images/business/land2.jpg";
import land3 from "../../images/business/land3.jpg";
import land4 from "../../images/business/land4.jpg";
import land5 from "../../images/business/land5.jpg";
import land6 from "../../images/business/land6.jpg";
import portraits1 from "../../images/business/portraits1.jpg";
import portraits2 from "../../images/business/portraits2.jpg";
import portraits3 from "../../images/business/portraits3.jpg";

const Business = () => {
  return (
    <div>
         <>
      {/* <Navbar/> */}
      <h1 className="text-center text-5xl mb-4">Business </h1>

      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="grid gap">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={portraits1}
              alt=""
            />
            
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src= {land1}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={portraits2}
              alt=""
            />
          </div>
          {/* <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={kay1}
              alt=""
            />
          </div> */}
        </div>
        <div className="grid gap">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={land2}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src= {portraits3}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={land4}
              alt=""
            />
          </div>
          {/* <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={shots}
              alt=""
            />
          </div> */}
        </div>
        <div className="grid gap">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src= {land5}
              alt=""
            />
          </div>
          
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src= {land6}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src= {land3}
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
    </div>
  )
}

export default Business
