import React, { Fragment, useEffect, useRef } from "react";
import DropdownSubmenu from "./DropdownSubmenu";

const DropdownMenu = (props) => {
  return (
    <Fragment>
      <div className="dropdown-menu__container">
        <ul className="dropdown-menu">
          {props.data &&
            props.data.map((item) => {
              return (
                <Fragment>
                  <li
                    className={`flex gap-4 dropdown-menu__item ${
                      item.id === 1 ? "main" : ""
                    }`}
                  >
                    <div className="dropdown-menu__item-icons">
                      <div className="dropdown-menu__item-block">
                        <img src={item["main-icon"]} alt="" />
                        <img
                          src={item["sub-icon"]}
                          alt=""
                          className="dropdown-menu__item-icon icon"
                        />
                      </div>
                    </div>
                    <div className="dropdown-menu__body">
                      <a href="#!" className="dropdown-menu__link">
                        <h3 className="dropdown-menu__title">{item.title}</h3>
                      </a>
                      <DropdownSubmenu data={item?.contents}></DropdownSubmenu>
                    </div>
                  </li>
                </Fragment>
              );
            })}
        </ul>
      </div>
    </Fragment>
  );
};

export default DropdownMenu;
