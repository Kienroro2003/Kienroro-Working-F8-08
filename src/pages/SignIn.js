import React from "react";
import Input from "../components/input/Input";
import Block from "../assets/images/block.png";
import Logo from "../components/Logo";
import RadioInput from "../components/radio/RadioInput";
import CheckboxInput from "../components/checkbox/CheckboxInput";
import Button from "../components/buttons/Button";

const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="sign-in__container">
        <div className="sign-in__left">
          <div className="sign-in__block">
            <img src={Block} alt="block" className="sign-in__img" />
            <p className="sign-in__desc">
              The best of luxury brand values, high quality products, and
              innovative services
            </p>
          </div>
        </div>
        <div className="sign-in__right">
          <div className="sign-in__content">
            <Logo></Logo>
            <h1 className="sign-in__heading">Sign In</h1>
            <p className="sign-in__greeting">
              Welcome back to sign in. As a returning customer, you have access
              to your previously saved all information.
            </p>
            <form className="sign-in__form">
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
              <div className="flex items-center justify-between">
                <CheckboxInput
                  name="terms"
                  label="Set as default card"
                ></CheckboxInput>
                <a href="#!" className="link forgot__account">
                  Recovery Password
                </a>
              </div>
              <div className="sign-in__form-action">
                <Button primary text="Login" style={{ heigh: "50px" }}></Button>
                <Button
                  google
                  text="Sign in with Gmail"
                  style={{ heigh: "50px" }}
                ></Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
