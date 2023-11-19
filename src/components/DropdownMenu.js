import React, { Fragment, useEffect, useRef } from "react";
import Square from "../assets/icons/shapes/square.svg";
import Circle from "../assets/icons/shapes/circle.svg";
import Rectange from "../assets/icons/shapes/rectange.svg";
import Moon from "../assets/icons/shapes/moon.svg";
import Hexagon from "../assets/icons/shapes/hexagon.svg";
import Camputer from "../assets/icons/categories/compute.svg";
import Star from "../assets/icons/shapes/star.svg";
import CupYoutube from "../assets/icons/categories/cup-youtube.svg";
import FourSquare from "../assets/icons/categories/four-square.svg";
import Phone from "../assets/icons/categories/phone.svg";
import Shield from "../assets/icons/categories/shield.svg";
import useDynamicSVGImport from "../hooks/useDynamicSVGImport";
import DropdownSubmenu from "./DropdownSubmenu";

const Icon = ({ name, onCompleted, onError, ...rest }) => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
    onCompleted,
    onError,
  });
  if (error) {
    console.log("🚀 ~ file: App.js:11 ~ Icon ~ error:", error);

    return error.message;
  }
  if (loading) {
    return "Loading...";
  }
  if (SvgIcon) {
    return <SvgIcon {...rest} />;
  }
  return null;
};

const DropdownMenu = (props) => {
  return (
    <Fragment>
      <div className="dropdown-menu__container">
        <ul className="dropdown-menu">
          {props.data &&
            props.data.map((item) => {
              console.log(props.data);
              return (
                <Fragment>
                  <li
                    className={`flex gap-4 dropdown-menu__item ${
                      item.id === 1 ? "main" : ""
                    }`}
                  >
                    <div className="dropdown-menu__item-icons">
                      <img src={Circle} alt="" />
                      <img
                        src={FourSquare}
                        alt=""
                        className="dropdown-menu__item-icon icon"
                      />
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
