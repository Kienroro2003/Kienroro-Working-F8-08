import React from "react";
import Input from "../components/input/Input";
import Block from "../assets/images/block.png";
import Logo from "../components/Logo";
import CheckboxInput from "../components/checkbox/CheckboxInput";
import Button from "../components/buttons/Button";

const SignIn = () => {
  return (
    <div className="sign-action">
      <div className="sign-action__container">
        <div className="sign-action__left d-md-none">
          <div className="sign-action__block">
            <img src={Block} alt="block" className="sign-action__img" />
            <p className="sign-action__desc">
              The best of luxury brand values, high quality products, and
              innovative services
            </p>
          </div>
        </div>
        <div className="sign-action__right">
          <div className="sign-action__content">
            <Logo></Logo>
            <h1 className="sign-action__heading">Sign In</h1>
            <p className="sign-action__greeting">
              Welcome back to sign in. As a returning customer, you have access
              to your previously saved all information.
            </p>
            <form className="sign-action__form">
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              ></Input>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              ></Input>
              <div className="flex items-center justify-between w-full">
                <CheckboxInput
                  name="terms"
                  label="Set as default card"
                ></CheckboxInput>
                <a href="#!" className="link forgot__account">
                  Recovery Password
                </a>
              </div>
              <div className="sign-action__form-action">
                <Button primary text="Login" style={{ heigh: "50px" }}></Button>
                <Button
                  google
                  text="Sign in with Gmail"
                  style={{ heigh: "50px" }}
                ></Button>
              </div>
              <span className="flex gap-1">
                Don’t have an account yet?
                <a href="#!" className="link">
                  Sign Up
                </a>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
