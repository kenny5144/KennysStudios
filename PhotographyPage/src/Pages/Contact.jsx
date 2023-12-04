import React, { useRef, useState } from "react";
import contact from "../images/homepageimages/contact.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [input, setInput] = useState({
    title: "",
    email: "",
    date: " ",
    text: "",
    cameAcross: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
    // console.log(input)
  };
  const [error, setError] = useState("");
  const form = useRef();
  const isInputFilled = (inputValue) => {
    return inputValue.trim() !== "";
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kmk2b7f",
        "template_ixxga7i",
        form.current,
        "TSDFmMgD3XOwoXul6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setError("Your message was sent ");
        },
        (error) => {
          console.log(error.text);
          setError("your message wasnt sent please try again in a few mins");
        }
      );
  };

  return (
    <>
      <div className="-z-[1]  -top-[30px] relative ">
        <img loading="lazy" className="w-screen" src={contact} alt="" />
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
              />
              <label
                htmlFor="name"
                className={`absolute left-0 top-1 text-gray-600 cursor-text transition-all ${
                  isInputFilled(input.title)
                    ? "-top-4 text-xs text-purple-600"
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
                    ? "-top-4 text-xs text-purple-600"
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
                    ? "-top-4 text-xs text-purple-600"
                    : "peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600"
                }`}
              >
                Occassion
              </label>
            </div>
            <div className="relative mt-4">
        <DatePicker
          selected={input.date}
          onChange={(date) => handleChange("date", date)}
          placeholderText="Select a date"
          dateFormat="MM/dd/yyyy"
          className="border-b w-96 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors"
        />
        <label
          htmlFor="Date"
          className={`absolute left-0 top-1 text-gray-600 cursor-text transition-all ${
            isInputFilled(input.date)
              ? "-top-4 text-xs text-purple-600"
              : "peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600"
          }`}
        >
          Date
        </label>
      </div>
            <div className="relative mt-4">
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
                htmlFor="Date"
                className={`absolute left-0 top-1 text-gray-600 cursor-text transition-all ${
                  isInputFilled(input.cameAcross)
                    ? "-top-4 text-xs text-purple-600"
                    : "peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600"
                }`}
              >
                How did you find out about us
              </label>
            </div>

            <button>Submit </button>
            <p>{error}</p>
          </section>
        </form>
      </div>
      <div></div>
    </>
  );
};

export default Contact;
