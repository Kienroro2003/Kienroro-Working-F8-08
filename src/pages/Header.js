import React, { useState } from "react";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as Cart } from "../assets/icons/cart.svg";
import { ReactComponent as Heart } from "../assets/icons/heart.svg";
import { ReactComponent as More } from "../assets/icons/more.svg";
import Avatar from "../assets/images/avatar.jpeg";
import useClickOutSide from "../hooks/useClickOutSide";

const dataDropdown = [
  {
    title: "Departments",
    fields: [
      {
        title: "All Departments",
      },
    ],
  },
  {
    title: "Grocery",
    fields: [
      {
        title: "All Departments",
      },
    ],
  },
  {
    title: "Beauty",
    fields: [
      {
        title: "All Departments",
      },
    ],
  },
];

const Header = () => {
  const { nodeRef, show, setShow } = useClickOutSide();
  const handleShowInput = (e) => {
    if (!show) e.preventDefault();
    setShow(!show);
  };
  return (
    <div className="header">
      <div className="container">
        <div className="flex items-center header__container">
          <button ref={nodeRef} className="d-none d-lg-block">
            <More className="icon"></More>
          </button>
          <Logo></Logo>
          <Navbar
            data={dataDropdown}
            className="header__navbar d-xl-none"
          ></Navbar>
          <div className=" top-act">
            <form
              className="relative flex items-center top-act__group d-md-none"
              ref={nodeRef}
            >
              <input
                type="text"
                className={`top-act__input ${
                  show ? "show" : ""
                } transition-all`}
              />
              <button
                className="absolute top-0 left-0 top-act__btn top-act__search"
                onClick={handleShowInput}
              >
                <Search className="icon"></Search>
              </button>
            </form>
            <div className="flex items-center top-act__group d-lg-none ">
              <button className="top-act__btn">
                <Heart className="icon"></Heart>
                <span>03</span>
              </button>
              <div class="h-full w-[1px] bg-[#EDEDF6]"></div>
              <button className="top-act__btn">
                <Cart className="icon"></Cart>
                <span>$65.42</span>
              </button>
            </div>
            <div class="top-act__user">
              <img src={Avatar} alt="Avatar" class="top-act__avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
