import React from "react";

import DropdownMenu from "./DropdownMenu";

const Navbar = (props) => {
  return (
    <nav className={`${props.className} navbar`}>
      <ul className="flex items-center navbar__list">
        <li className="navbar__item">
          <DropdownMenu data={props.data}></DropdownMenu>
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
