import React, { useRef, useState } from "react";
import contact from "../images/homepageimages/contact.jpg";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const [input, setInput] = useState({
    title: "",
    email: "",
    date: "",
    text: "",
    budget:"",
    cameAcross: "",
  });
  const templateparams = {
    form_name: input.title,
    form_email: input.email,
    to_name: "kehinde ojo",
    message:`hello my name is ${input.title} my email is ${input.email} my event date is ${input.date} . My budget for this event is ${input.budget} and some details about the shoot is:  ${input.text} i saw you from  ${input.cameAcross},`
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const [error, setError] = useState("");
  const form = useRef();
  const isInputFilled = (inputValue) => {
    return inputValue.trim() !== "";
  };
  function handleSubmit(){
    setInput({
      title: "",
    email: "",
    date: "",
    text: "",
    cameAcross: "",
    }

    )
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
        "service_5ria9qc",
        "template_qrgcrri",
       templateparams,
        "8G9Ac9vv-SE8sIYBf"
      )
      .then(
        (result) => {

          setError("Your message was sent ");
          setInput({
          title: "",
          email: "",
          date: "",
          text: "",
          budget:"",
          cameAcross: "",
          }
      
          )
        },
        (error) => {
          setError("your message wasnt sent please try again in a few mins");
        }
      );
  };

  return (
    <>
      <div className="-z-[1]  -top-[40px] relative ">
        <img
          loading="lazy"
          className="w-screen"
          data-src={contact}
          src={contact}
          alt=""
        />
        <h2 className="text-5xl text-center inset-x-0 -bottom-8 bg-white w-fit absolute  p-4 m-auto ">
          Contact Me
        </h2>
      </div>
      <div>
        <p className="text-center text-2xl mt-4">
          Ready to tell your story? Book your photoshoot or event with
          KennyStudios today
        </p>
      </div>
      <div className=" w-screen mt-10  ">
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" w-screen flex justify-center m-auto bg-white "
        >
          <section>
            <div className="relative ">
              <input
                id="name"
                type="name"
                name="title"
                className="border-b w-96 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                autoComplete="off"
                onChange={(e) => handleChange(e)}
                value={input.title}
                required
              />
              <label
                htmlFor="name"
                className={`absolute left-0 top-1 text-gray-600 cursor-text transition-all ${
                  isInputFilled(input.title)
                    ? "-top-[1rem] text-xs text-purple-600"
                    : "peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600"
                }`}
              >
                Your Name
              </label>
            </div>
            <div className="relative mt-4">
              <input
                type="email"
                name="email"
                id="Email"
                className="border-b w-96 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                autoComplete="off"
                value={input.email}
                onChange={(e) => handleChange(e)}
                required
              />
              <label
                htmlFor="Email"
                className={`absolute left-0 top-1 text-gray-600 cursor-text transition-all ${
                  isInputFilled(input.email)
                    ? "-top-[1rem] text-xs text-purple-600"
                    : "peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600"
                }`}
              >
                Email
              </label>
            </div>
            <div className="relative mt-4">
              <input
                type="text"
                name="text"
                id="Text"
                className="border-b w-96 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                autoComplete="off"
                value={input.text}
                onChange={(e) => handleChange(e)}
                required
              />
              <label
                htmlFor="Text"
                className={`absolute left-0 top-1 text-gray-600 cursor-text transition-all ${
                  isInputFilled(input.text)
                    ? "-top-[1rem] text-xs text-purple-600"
                    : "peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600"
                }`}
              >
                Occassion
              </label>
            </div>
            <div className="relative mt-4">
              <input
                type="text"
                name="budget"
                id="budget"
                className="border-b w-96 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                autoComplete="off"
                value={input.budget}
                onChange={(e) => handleChange(e)}
                required
              />
              <label
                htmlFor="Text"
                className={`absolute left-0 top-1 text-gray-600 cursor-text transition-all ${
                  isInputFilled(input.budget)
                    ? "-top-[1rem] text-xs text-purple-600"
                    : "peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600"
                }`}
              >
                Budget
              </label>
            </div>
            <div className="relative mt-6">
              <input
                type="date"
                // placeholder="select me "
                name="date"
                id="date"
                className="border-b data-[te-input-state-active]:placeholder:opacity-100 w-96 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                value={input.date}
                onChange={(e) => handleChange(e)}
                required

              />
              <label
                htmlFor="Date"
                className={`absolute left-0 -top-4 text-gray-600 cursor-text transition-all ${
                  isInputFilled(input.text)
                    ? "-top-[1rem] text-xs text-purple-600"
                    : "peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600"
                }`}
              >
                Date of the occassion 
              </label>
            </div>
            <div className="relative mt-6">
              <input
                type="text"
                // placeholder="select me "
                name="cameAcross"
                id="cameAcross"
                className="border-b data-[te-input-state-active]:placeholder:opacity-100 w-96 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                autoComplete="off"
                value={input.cameAcross}
                onChange={(e) => handleChange(e)}
              />
              <label
                htmlFor="cameAcross"
                className={`absolute left-0 top-1 text-gray-600 cursor-text transition-all ${
                  isInputFilled(input.cameAcross)
                    ? "-top-[1rem] text-xs text-purple-600"
                    : "peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600"
                }`}
              >
                How did you find me 
              </label>
            </div>

            <button className="bg-blue-300 mt-2 w-full h-10 rounded-md p-2 text-center">
              Submit{" "}
            </button>
            <p>{error}</p>
          </section>
        </form>
      </div>
    </>
  );
};

export default Contact;
