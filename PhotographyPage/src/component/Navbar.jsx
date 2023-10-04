import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathMatchRoutes = (route) => {
    if (route === location.pathname) {
      return true;
    }
  }; 
  return (
    <header  >
      <nav className={
              pathMatchRoutes("/") ? "w-full   px-2 mt-1 flex justify-between  absolute z-10" : "w-full px-2 mt-1 flex justify-between"
            }>
              <h1
          className={
            "text-orange-400 md:text-2xl "
          }
          onClick={() => navigate("/")}
        >
          Kennys Studios
        </h1>
        <ul className="flex space-x-4">
          <li
            className={
              pathMatchRoutes("/about") ? "md:text-2xl text-green-600" : "text-orange-400 md:text-2xl "
            }
            onClick={() => navigate("/about")}
          >
            About
          </li>
          <li
            className={
              pathMatchRoutes("/investment") ? " md:text-2xl  text-green-600" : "text-orange-400 md:text-2xl"
            }
            onClick={() => navigate("/investment")}
          >
            Investment
          </li>
          <li
            className={
              pathMatchRoutes("/contact") ? " md:text-2xl text-green-600" : "text-orange-400 md:text-2xl"
            }
            onClick={() => navigate("/contact")}
          >
            Contact
          </li>
        </ul>
      </nav>
            {/* <FontAwesomeIcon icon={faBars} /> */}
    </header>
  );
};

export default Navbar;
