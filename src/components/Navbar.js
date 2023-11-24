import React from "react";

import DropdownMenu from "./dropdown-navbar/DropdownMenu";
import { ReactComponent as ArrowDown } from "../assets/icons/arrow-down.svg";

const Navbar = ({ ...props }) => {
  return (
    <>
      <nav className={`${props.className} navbar`}>
        <ul className="navbar__list">
          {props.data &&
            props.data.map((item) => {
              return (
                <li key={item.id} className="navbar__item">
                  <a href="#!" className="navbar__link">
                    {item.title} <ArrowDown />
                  </a>
                  <DropdownMenu
                    display={item.id === 1}
                    data={item?.fields}
                  ></DropdownMenu>
                </li>
              );
            })}
        </ul>
      </nav>
      {/* {show && (
        <div
          className="fixed inset-0 z-10 bg-slate-950/30"
          onClick={() => setShow((showDropdown) => !showDropdown)}
        ></div>
      )} */}
    </>
  );
};

export default Navbar;
