import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as Cart } from "../assets/icons/cart.svg";
import { ReactComponent as Heart } from "../assets/icons/heart.svg";
import { ReactComponent as More } from "../assets/icons/more.svg";
import Avatar from "../assets/images/avatar.jpeg";
import useClickOutSide from "../hooks/useClickOutSide";
import { useAuth } from "../utils/authProvider";
import { useGallery } from "../contexts/gallery-context";
import NumberFormat from "react-number-format";
import { useEffect, useRef, useState } from "react";
const data = require("../services/api/dataDropdown.json");
const Header = () => {
  const [auth] = useAuth();
  const { listItem } = useGallery();
  const amountFavorites = listItem.filter((item) => item.isFavorite).length;
  const { nodeRef, show, setShow } = useClickOutSide();
  const handleShowInput = (e) => {
    if (!show) e.preventDefault();
    setShow(!show);
  };
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    console.log(
      "🚀 ~ file: Header.js:29 ~ handleScroll ~ window.pageYOffset > elTopOffset + elHeight:",
      window.pageYOffset > elTopOffset + elHeight
    );
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);
  return (
    <header
      className={`header navbar${sticky.isSticky ? " sticky" : ""}`}
      ref={headerRef}
    >
      <div className="container">
        <div className="header__container">
          <button ref={nodeRef} className="d-none d-xl-block">
            <More className="icon"></More>
          </button>
          <Logo></Logo>
          <Navbar data={data} className="header__navbar d-xl-none"></Navbar>
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
