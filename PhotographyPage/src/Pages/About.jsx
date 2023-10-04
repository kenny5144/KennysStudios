import React from "react";
import sele from "../images/homepageimages/sele.jpg";

const About = () => {
  return (
    <>
      <div className=" w-11/12 justify-center m-auto mt-4">
        <div>

        <h2 className="text-center text-4xl">About Me</h2>
        </div>
        <img className="" src={sele} alt="" />
        <h2 className="text-3xl text-bold">So Who am i</h2>
        <p className="w-46">
          My name is Kehind ojo , a photographer with a love for freezing
          moments in time. I find beauty in the ordinary and extraordinary, and
          my camera is my faithful companion on this visual journey. Photography
          is about capturing the genuine smiles, the unspoken emotions, and the
          fleeting moments that make life so beautiful. Whether I'm
          photographing a portrait or an event, I'm always on the lookout for
          that magical instant when everything comes together. I believe in the
          power of photography to tell stories, evoke emotions, and create
          lasting memories. Thank you for considering me as your photographer
          and I look forward to capturing the unique beauty moment of your life
          through my lens.
        </p>
      </div>
    </>
  );
};

export default About;
