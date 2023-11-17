import React from "react";
import { ReactComponent as ArrowDown } from "../assets/icons/arrow-down.svg";

const Navbar = (props) => {
  return (
    <nav className={`${props.className} navbar`}>
      <ul className="navbar__list flex items-center">
        <li className="navbar__item">
          <a href="#!" className="navbar__link">
            Departments <ArrowDown />
          </a>
        </li>
        <li className="navbar__item">
          <a href="#!" className="navbar__link">
            Grocery <ArrowDown />
          </a>
        </li>
        <li className="navbar__item">
          <a href="#!" className="navbar__link">
            Beauty <ArrowDown />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
