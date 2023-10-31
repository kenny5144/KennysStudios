import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathMatchRoutes = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const [portfolioisOpen, setPortfolioIsOpen] = useState(false);
  const portfoliodrop =()=>{
    setPortfolioIsOpen(!portfolioisOpen)
  }
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <nav
        className={
          pathMatchRoutes("/")
            ? "w-full   md:px-2 mt-1 flex justify-between  absolute z-10"
            : "w-full md:px-2 mt-1 flex justify-between"
        }
      >
        <h1
          className={"text-orange-400 ml-1 md:text-2xl cursor-pointer "}
          onClick={() =>{ navigate("/"); setIsOpen(false)}}
        >
          Kennys Studios
        </h1>
        <ul  className="hidden md:flex md:space-x-4">
          <li
            className={
              pathMatchRoutes("/about")
                ? "md:text-2xl cursor-pointer text-green-600"
                : "text-orange-400 cursor-pointer md:text-2xl "
            }
            onClick={() => navigate("/about")}
          >
            About
          </li>
          <li
            className={
              pathMatchRoutes("/investment")
                ? " md:text-2xl cursor-pointer  text-green-600"
                : "text-orange-400 cursor-pointer md:text-2xl"
            }
            onClick={portfoliodrop}
          >
            Portfolio
          </li>
          {/* code for th dropdown button */}
            {portfolioisOpen &&
             <div className="absolute top-10 m-auto w-36 gap-10 rounded-lg right-[5rem] h-auto p-4  bg-black" >
              <div>

                <ul className="text-orange-400 kenny text-center">
                  <li   className={
              pathMatchRoutes("/investment")
                ? " md:text-2xl cursor-pointer  text-green-600"
                : "text-orange-400 cursor-pointer md:text-2xl"
            }
            onClick={()=> {navigate("/event"); setPortfolioIsOpen(false)}}
          >Events</li>
                  <li  className={
              pathMatchRoutes("/investment")
                ? " md:text-2xl cursor-pointer  text-green-600"
                : "text-orange-400 cursor-pointer md:text-2xl"
            }
            onClick={()=>{ navigate("/studio"); setPortfolioIsOpen(false)}}>Studio</li>
                  <li  className={
              pathMatchRoutes("/lifestyle")
                ? " md:text-2xl cursor-pointer  text-green-600"
                : "text-orange-400 cursor-pointer md:text-2xl"
            }
            onClick={()=> {navigate("/lifestyle"); setPortfolioIsOpen(false)}}>lifestyle</li>
                  <li  className={
              pathMatchRoutes("/business")
                ? " md:text-2xl cursor-pointer  text-green-600"
                : "text-orange-400 cursor-pointer md:text-2xl"
            }
            onClick={()=> {navigate("/business"); setPortfolioIsOpen(false)}}>business</li>
                </ul>
              </div>
            </div>

            }
           
          <li
            className={
              pathMatchRoutes("/contact")
                ? " md:text-2xl cursor-pointer text-green-600"
                : "text-orange-400 cursor-pointer md:text-2xl"
            }
            onClick={() => navigate("/contact")}
          >
            Contact
          </li>
        </ul>
  
        <div className="md:hidden relative top-1 right-[40px] text-xl cursor-pointer">
          <button
            onClick={toggleNavbar}
            className="text-orange-400"
          >
            {isOpen ?<FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} /> }
          </button>
        </div>
      </nav>
   
      {/* mobile menu  */}
      {isOpen ? 
      <div className="w-[100%]  flex bg-grey h-screen  justify-center items-center
       bg-white relative right-0 pt-7 ">
     
      
        
        <ul className=" gap-10  text-3xl flex flex-col  text-blue">
          <li
            className={
              pathMatchRoutes("/about")
                ? "md:text-2xl text-green-600"
                : "text-orange-400 md:text-2xl cursor-pointer"
            }
            onClick={() => {navigate("/about"); setIsOpen(false)}}
          >
            About
          </li>
          <li
            className={
              pathMatchRoutes("/investment")
                ? " md:text-2xl cursor-pointer  text-green-600"
                : "text-orange-400 cursor-pointer md:text-2xl"
            }
            onClick={portfoliodrop}
          >
            Portfolio
          </li>
          {/* code for th dropdown button */}
            {portfolioisOpen &&
             <div className=" bg-black w-40  gap-5 rounded-xl h-auto m-auto p-9 absolute top-[34rem] right-[100rem] " >
              <div>

                <ul className="text-orange-400 text-center flex flex-col ">
                  <li   className={
              pathMatchRoutes("/investment")
                ? " md:text-2xl cursor-pointer  text-green-600"
                : "text-orange-400 cursor-pointer md:text-2xl"
            }
            onClick={()=> {navigate("/event");  setIsOpen(false); setPortfolioIsOpen(false)}}
          >Events</li>
                  <li  className={
              pathMatchRoutes("/investment")
                ? " md:text-2xl cursor-pointer  text-green-600"
                : "text-orange-400 cursor-pointer md:text-2xl"
            }
            onClick={()=>{ navigate("/studio"); setIsOpen(false); setPortfolioIsOpen(false)}}>Studio</li>
                  <li  className={
              pathMatchRoutes("/lifestyle")
                ? " md:text-2xl cursor-pointer  text-green-600"
                : "text-orange-400 cursor-pointer md:text-2xl"
            }
            onClick={()=> {navigate("/lifestyle"); setIsOpen(false); setPortfolioIsOpen(false)}}>Lifestyle</li>
                  <li  className={
              pathMatchRoutes("/business")
                ? " md:text-2xl cursor-pointer  text-green-600"
                : "text-orange-400 cursor-pointer md:text-2xl"
            }
            onClick={()=> {navigate("/business"); setIsOpen(false);  setPortfolioIsOpen(false)}}>Business</li>
                </ul>
              </div>
            </div>

            }
          <li
            className={
              pathMatchRoutes("/contact")
                ? " md:text-2xl text-green-600"
                : "text-orange-400 md:text-2xl cursor-pointer"
            }
            onClick={() => {navigate("/contact"); setIsOpen(false)}}
          >
            Contact
          </li>
        </ul> 
      
        </div>
        :""}
    </header>
  );
};

export default Navbar;
