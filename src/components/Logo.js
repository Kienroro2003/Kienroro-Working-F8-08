import React, { Fragment } from "react";
import { ReactComponent as LogoIcon } from "../assets/icons/logo.svg";

const Logo = () => {
  return (
    <div className="flex items-center logo">
      <LogoIcon></LogoIcon>
      <h1 class="logo__title">grocerymart</h1>
    </div>
  );
};

export default Logo;
