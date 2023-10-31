import React from "react";
import contact from "../images/homepageimages/contact.jpg";
// import { Datepicker, Input, initTE } from "tw-elements";
// initTE({ Datepicker, Input });

const Contact = () => {
  return (
    <>
      <div className="-z-[1]  -top-[30px] relative ">
        <img className="w-screen" src={contact} alt="" />
        <h2 className="text-5xl text-center inset-x-0 -bottom-8 bg-white w-fit absolute  p-4 m-auto ">
          Contact Me
        </h2>
      </div>
      <div className=" w-screen mt-10  ">
        <form className=" w-screen flex justify-center m-auto bg-white ">
          <section>
            <div className="relative ">
              <input
                id="name"
                type="name"
                className="border-b w-96 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                autoComplete="off"
                required
              />
              <label
                for="username"
                class="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600 transition-all"
              >
                Your Name
              </label>
            </div>
            <div className="relative mt-4">
              <input
                type="email"
                id="Email"
                className="border-b w-96 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                autoComplete="off"
                reqiuired
              />
              <label
                for="Email"
                class="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600 transition-all"
              >
                Email
              </label>
            </div>
            <div className="relative mt-4">
              <input
                type="Text"
                id="Text"
                className="border-b w-96 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                autoComplete="off"
                reqiuired
              />
              <label
                for="Text"
                class="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600 transition-all"
              >
                Occassion
              </label>
            </div>
            <div
              className="relative mt-4"
         
            >
              <input
                type="text"
                // placeholder="select me "
                id="Date"
                className="border-b data-[te-input-state-active]:placeholder:opacity-100 w-96 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                autoComplete="off"
                reqiuired
              />
              <label
                for="Date"
                class="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600 transition-all"
              >
                Date
              </label>
            </div>
           
          </section>
        </form>
      </div>
    </>
  );
};

export default Contact;
