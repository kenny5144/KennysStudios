import React from "react";
import contact from "../images/homepageimages/contact.jpg";

const Contact = () => {
  return (
    <>
      <div className="-z-[1]  -top-[30px] relative ">
        <img src={contact} alt="" />
        <h2 className="text-5xl text-center -top-8 bg-white w-fit  m-auto relative">
          Contact Me
        </h2>
      </div>
      <div className="w-screen h-[40rem] bg-blue-100 items-center justify-center  m-auto border-4 ">

      <form className="w-[80%] mt-1 py-4  justify-center border-4 m-auto bg-white ">
          
        

          <div>
            <p className=" ">YOUR NAME </p>
            <input
              type="name"
              className="p2 border-b-2 outline-none border-b-indigo-500"
              placeholder="Enter your name..."
              required
            />
          </div>
          <div>
            <p className="mt-7 ">EMAIL </p>
            <input type="email" placeholder="Enter your Email..." reqiuired />
          </div>
          <div>
            <p className="mt-7">Occasion </p>
            <input type="text" placeholder="Booking occasion " />
          </div>
          <div>
            <p className="mt-7">DATE(ESTIMATED DATE ) </p>
            <input type="date" placeholder="Enter your name..." />
          </div>
          <div>
            <button className="mt-7 rounded-md p-2 border border-slate-300 hover:border-indigo-300">
              Submit{" "}
            </button>
          </div>
        
        
      </form>
      </div>
    </>
  );
};

export default Contact;
