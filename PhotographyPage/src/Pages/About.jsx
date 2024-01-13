import React from "react";
import sele from "../images/homepageimages/sele.jpg";
import kenny1 from "../images/homepageimages/kenny1.jpg";

const About = () => {
  return (
    <>
      {/* <div className="w-screen bg-black-500  h-10px"></div> */}
      <div className="flex mt-10 md:h-[80vh] lg:h-screen   m-auto items-center ">
        <div className="flex flex-col items-center">
          <h2 className="text-center md:mb-10 text-4xl">About Me</h2>
          <div className=" w-11/12  md:flex relative  -z-[1] justify-center m-auto md:m-0 mt-6">
            <img
            loading="lazy"
              className="rounded-xl md:w-2/4"
              src={kenny1}
              alt="Image of me "
            />
            <div className="ml-2 flex  items-center">
              <section>
                <h2 className="text-4xl md:text-5xl text-blue-400 text-center  mt-2 md:mt-0 text-bold">
                  So Who am i?
                </h2>
                <p className="md:w-46 md:ml-2 leading-relaxed mt-8">
                  My name is Kehinde ojo , a photographer with a love for
                  freezing moments in time. Photography to me is about capturing
                  the genuine smiles, the unspoken emotions, and the fleeting
                  moments that make life so beautiful and thats why  At KennyStudios, we believe in the power of photography to capture the unseen. Our passion is to create meaningful images that resonate with you, your family, or your business. Our team of experienced photographers is committed to preserving your life's milestones while placing your comfort and satisfaction at the forefront.
                </p>
              </section>
            </div>
          </div>
          <div className="mt-4 md:mt-10 h-20 w-full md:w-fit p-2 flex justify-center rounded-lg m-auto items-center">
            <a
              href="https://www.instagram.com/kennys_studio/"
              target="blank"
              className="flex  text-orange-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="2em "
                viewBox="0 0 448 512"
                className="fill-orange-400 md:h-12"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
              <p className="items-center ml-2 md:mt-1 text-xl md:text-3xl">
                Follow me on Instagram
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
