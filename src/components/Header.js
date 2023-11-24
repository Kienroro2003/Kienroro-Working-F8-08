import Logo from "./Logo";
import Navbar from "./Navbar";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as Cart } from "../assets/icons/cart.svg";
import { ReactComponent as Heart } from "../assets/icons/heart.svg";
import { ReactComponent as More } from "../assets/icons/more.svg";
import Avatar from "../assets/images/avatar.jpeg";
import useClickOutSide from "../hooks/useClickOutSide";
import { useAuth } from "../utils/authProvider";
import { useGallery } from "../contexts/gallery-context";
import { useEffect, useRef, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Portal from "../utils/Portal";
import DropdownBase from "./dropdown-navbar/DropdownBase";
const data = require("../services/api/dataDropdown.json");

function debounceFn(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const Header = () => {
  const [auth] = useAuth();
  const { listItem } = useGallery();
  const amountFavorites = listItem.filter((item) => item.isFavorite).length;
  const { nodeRef, show, setShow } = useClickOutSide();
  const [showDropdown, setShowDropdown] = useState(false);
  const handleShowInput = (e) => {
    if (!show) e.preventDefault();
    setShow(!show);
  };
  const [sticky, setSticky] = useState(false);
  const headerRef = useRef(null);

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky(true);
      document.body.style.paddingTop = `${elHeight}px`;
    } else {
      setSticky(false);
      document.body.style.paddingTop = 0;
    }
  };
  const windowDimensions = useWindowDimensions();

  const PortalNavbar = () => {
    if (windowDimensions.width > 1200)
      return <Navbar data={data} className="header__navbar "></Navbar>;
    return (
      <DropdownBase show={showDropdown} onClose={() => setShowDropdown(false)}>
        <Navbar data={data} className="header__navbar"></Navbar>
      </DropdownBase>
    );
  };

  // add/remove scroll event listener
  useEffect(() => {
    console.log(windowDimensions);
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };
    window.addEventListener("scroll", debounceFn(handleScrollEvent, 300));
    return () => {
      window.removeEventListener("scroll", debounceFn(handleScrollEvent, 300));
    };
  }, [windowDimensions]);
  return (
    <header
      className={`header navbar${sticky ? " sticky" : ""}`}
      ref={headerRef}
    >
      <div className="container">
        <div className="header__container">
          <button
            // ref={dropdownRef}
            onClick={() => setShowDropdown((showDropdown) => !showDropdown)}
            className="d-none d-xl-block button"
          >
            <More className="pointer-events-none icon"></More>
          </button>
          <Logo></Logo>
          {/* <Navbar
            data={data}
            className="header__navbar "
            show={showDropdown}
            setShow={setShowDropdown}
            nodeRef={dropdownRef}
            // d-xl-none
          ></Navbar> */}
          {windowDimensions.width > 1200 ? (
            <Navbar data={data} className="header__navbar "></Navbar>
          ) : (
            <DropdownBase
              show={showDropdown}
              onClose={() => setShowDropdown(false)}
            >
              <Navbar
                data={data}
                onClose={() => setShowDropdown(false)}
                className="header__navbar"
              ></Navbar>
            </DropdownBase>
          )}
          <div className=" top-act">
            <form
              className="top-act__form top-act__group d-md-none"
              ref={nodeRef}
            >
              <input
                type="text"
                className={`top-act__input ${show ? "show" : ""}`}
                placeholder="Search"
              />
              <button
                className="top-act__btn top-act__search"
                onClick={handleShowInput}
              >
                <Search className="icon"></Search>
              </button>
            </form>
            {auth ? (
              <>
                <div className="top-act__group d-lg-none ">
                  <button className="top-act__btn">
                    <Heart className="icon"></Heart>
                    <span>
                      {amountFavorites > 9
                        ? amountFavorites
                        : `0${amountFavorites}`}
                    </span>
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
              </>
            ) : (
              <div className="flex items-center gap-2">
                <a
                  href="/sign-up"
                  className="text-center btn btn--outline d-md-none"
                >
                  Sign Up
                </a>
                <a href="/sign-in" className="text-center btn btn--primary">
                  Sign In
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
