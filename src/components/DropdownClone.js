import React, { Fragment, useEffect, useRef } from "react";
import Square from "../assets/icons/shapes/square.svg";
import Circle from "../assets/icons/shapes/circle.svg";
import Rectange from "../assets/icons/shapes/rectange.svg";
import Moon from "../assets/icons/shapes/moon.svg";
import Hexagon from "../assets/icons/shapes/hexagon.svg";
import Camputer from "../assets/icons/categories/compute.svg";
import CupYoutube from "../assets/icons/categories/cup-youtube.svg";
import FourSquare from "../assets/icons/categories/four-square.svg";
import Phone from "../assets/icons/categories/phone.svg";
import Shield from "../assets/icons/categories/shield.svg";
import useDynamicSVGImport from "../hooks/useDynamicSVGImport";

const DropdownClone = (props) => {
  return (
    <Fragment>
      <div className="dropdown-menu__container">
        <ul className="dropdown-menu">
          {/* Item 1 */}
          <li className="flex gap-4 dropdown-menu__item main">
            <div className="dropdown-menu__item-field">
              <div className="dropdown-menu__item-icons">
                <img
                  src={require("../assets/icons/shapes/circle.svg").default}
                  alt=""
                />
                <img
                  src={FourSquare}
                  alt=""
                  className="dropdown-menu__item-icon"
                />
              </div>
              <div className="dropdown-menu__body">
                <a href="#!" className="dropdown-menu__link">
                  <h3 className="dropdown-menu__title">All Departments</h3>
                </a>
                {/* Sub menu 1.1 */}
                <ul className="dropdown-submenu">
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Savings & Featured Shops
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Electronics
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Clothing, Shoes & Accessories
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Home, Furniture & Appliances
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Toys & Video Games
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Home, Furniture & Appliances
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Baby
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Household Essentials
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Personal Care
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Patio & Garden
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Sports & Outdoors
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Gift Cards
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Auto, Tires and Industrial
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Movies, Music & Books
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          {/* Item 2 */}
          <li>
            <div className="dropdown-menu__item-field">
              <div className="dropdown-menu__item-icons">
                <img src={Circle} alt="" />
                <img
                  src={FourSquare}
                  alt=""
                  className="dropdown-menu__item-icon"
                />
              </div>
              <div className="dropdown-menu__body">
                <a href="#!" className="dropdown-menu__link">
                  <h3 className="dropdown-menu__title">All Departments</h3>
                </a>
                {/* Sub menu 1.1*/}
                <ul className="dropdown-submenu">
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Shop all TVs
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      TVs by Size
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Smart TVs
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Roku TVs
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Streaming
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      TV Mounts & Accessories
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      iDVD & Blu-Ray Playersem
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          {/* Item 3 */}
          <li className="flex gap-4 dropdown-menu__item">
            <div className="dropdown-menu__item-field">
              <div className="dropdown-menu__item-icons">
                <img src={Circle} alt="" />
                <img
                  src={FourSquare}
                  alt=""
                  className="dropdown-menu__item-icon"
                />
              </div>
              <div className="dropdown-menu__body">
                <a href="#!" className="dropdown-menu__link">
                  <h3 className="dropdown-menu__title">All Departments</h3>
                </a>
                {/* Sub menu */}
                <ul className="dropdown-submenu">
                  {/* Sub item 2 */}
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Galaxy Watch
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Apple Watch
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Fitness Trackers
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Virtual Reality
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Headphones
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          {/* Item 4 */}
          <li className="flex gap-4 dropdown-menu__item">
            <div className="dropdown-menu__item-field">
              <div className="dropdown-menu__item-icons">
                <img src={Circle} alt="" />
                <img
                  src={FourSquare}
                  alt=""
                  className="dropdown-menu__item-icon"
                />
              </div>
              <div className="dropdown-menu__body">
                <a href="#!" className="dropdown-menu__link">
                  <h3 className="dropdown-menu__title">Computers</h3>
                </a>
                <ul className="dropdown-submenu">
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Shop All Computers
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Laptops
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      PC Gaming
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Monitors
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Chromebook
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Printers & Ink
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Shop all TVs
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Computer Accessories
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Desktops
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Tax Software
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Computer Software
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      PC Finder
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          {/* Item 5 */}
          <li className="flex gap-4 dropdown-menu__item">
            <div className="dropdown-menu__item-field">
              <div className="dropdown-menu__item-icons">
                <img src={Circle} alt="" />
                <img
                  src={FourSquare}
                  alt=""
                  className="dropdown-menu__item-icon"
                />
              </div>
              <div className="dropdown-menu__body">
                <a href="#!" className="dropdown-menu__link">
                  <h3 className="dropdown-menu__title">Savings</h3>
                </a>
                {/* Sub menu 1.1*/}
                <ul className="dropdown-submenu">
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Shop all TVs
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Tech Savings
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Overstock Savings
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Tech Rollbacks
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          {/* Item 6 */}
          <li className="flex gap-4 dropdown-menu__item">
            <div className="dropdown-menu__item-field">
              <div className="dropdown-menu__item-icons">
                <img src={Circle} alt="" />
                <img
                  src={FourSquare}
                  alt=""
                  className="dropdown-menu__item-icon"
                />
              </div>
              <div className="dropdown-menu__body">
                <a href="#!" className="dropdown-menu__link">
                  <h3 className="dropdown-menu__title">Cell Phones</h3>
                </a>
                {/* Submenu */}
                <ul className="dropdown-submenu">
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Wireless Deals
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      5G Phones
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Prepaid Phones & Plans
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Refurbished Phones
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      iPhone Accessories
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Cases & Screen Protectors
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Walmart Protection Plan
                    </a>
                  </li>
                  <li className="dropdown-submenu__item">
                    <a href="#!" className="dropdown-submenu__link">
                      Unlocked Phones
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default DropdownClone;
