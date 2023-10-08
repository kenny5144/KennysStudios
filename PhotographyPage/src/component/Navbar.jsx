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
          onClick={() => navigate("/")}
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
            onClick={() => navigate("/investment")}
          >
            Investment
          </li>
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
      <div className="w-[100%]  flex bg-grey h-screen justify-center items-center
       bg-white absolute right-0  pt-7 ">
     
      
        
        <ul className=" gap-10  text-3xl z-[1] flex flex-col  text-blue">
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
                ? " md:text-2xl  text-green-600"
                : "text-orange-400 md:text-2xl cursor-pointer"
            }
            onClick={() => {navigate("/investment"); setIsOpen(false)}}
          >
            Investment
          </li>
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
