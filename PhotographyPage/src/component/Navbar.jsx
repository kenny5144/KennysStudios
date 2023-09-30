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
      <nav className=" px-2 mt-1  flex justify-between">
              <h1
          className={
            pathMatchRoutes("/about") ? "text-green-600" : "text-orange-300"
          }
          onClick={() => navigate("/")}
        >
          Kennys Studios
        </h1>
        <ul className="flex space-x-4">
          <li
            className={
              pathMatchRoutes("/about") ? "text-green-600" : "text-orange-300"
            }
            onClick={() => navigate("/about")}
          >
            About{" "}
          </li>
          <li
            className={
              pathMatchRoutes("/about") ? "text-green-600" : "text-orange-300"
            }
            onClick={() => navigate("/investment")}
          >
            Investment
          </li>
          <li
            className={
              pathMatchRoutes("/about") ? "text-green-600" : "text-orange-300"
            }
            onClick={() => navigate("/contact")}
          >
            contact
          </li>
        </ul>
      </nav>
            {/* <FontAwesomeIcon icon={faBars} /> */}
    </header>
  );
};

export default Navbar;
