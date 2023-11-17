import React from "react";

import DropdownMenu from "./DropdownMenu";
import DropdownClone from "./DropdownClone";
import { ReactComponent as ArrowDown } from "../assets/icons/arrow-down.svg";

const Navbar = (props) => {
  return (
    <nav className={`${props.className} navbar`}>
      <ul className="flex items-center navbar__list">
        <li className="navbar__item">
          <a href="#!" className="navbar__link">
            Departments <ArrowDown />
          </a>
          <DropdownClone data={props.data}></DropdownClone>
        </li>
        <li className="navbar__item">
          <a href="#!" className="navbar__link">
            Grocery
          </a>
        </li>
        <li className="navbar__item">
          <a href="#!" className="navbar__link">
            Beauty
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
