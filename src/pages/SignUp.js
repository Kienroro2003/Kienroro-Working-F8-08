import React, { useState } from "react";
import Input from "../components/input/Input";
import Block from "../assets/images/block.png";
import Logo from "../components/Logo";
import CheckboxInput from "../components/checkbox/CheckboxInput";
import Button from "../components/buttons/Button";
import ArrowNext from "../assets/icons/arrow-next.svg";

const SignUp = () => {
  const [next, setNext] = useState(false);
  const handleClickNext = () => {
    setNext(true);
  };
  return (
    <div className="sign-action">
      <div className="sign-action__container sign-up">
        <div className="sign-action__left sign-up">
          <div className="sign-action__block">
            <img src={Block} alt="block" className="sign-action__img" />
            <p className="sign-action__desc">
              The best of luxury brand values, high quality products, and
              innovative services
            </p>
          </div>
          <button
            onClick={handleClickNext}
            className="sign-action__btn d-none d-md-flex"
          >
            <div className="sign-action__circle active"></div>
            <div className="sign-action__circle"></div>
            <img src={ArrowNext} alt="next" />
          </button>
        </div>
        <div className={`sign-action__right sign-up ${next ? "show" : ""}`}>
          <div className="sign-action__content">
            <Logo></Logo>
            <h1 className="sign-action__heading">Sign Up</h1>
            <p className="sign-action__greeting">
              Let’s create your account and Shop like a pro and save money.
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
              <Input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="Confirm Password"
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

export default SignUp;
