import React from "react";
import Input from "../components/input/Input";
import Block from "../assets/images/block.png";
import Logo from "../components/Logo";
import Button from "../components/buttons/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Must be required"),
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Minimum eight characters, at least one letter, one number and one special character"
      )
      .required("Must be required"),
  })
  .required();
const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    if (isValid) {
      console.log(data);
      window.location.href = "/";
    }
  };
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
              Welcome to sign in. As a returning customer, you have access to
              your previously saved all information.
            </p>
            <form
              className="sign-action__form"
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="off"
            >
              <Input
                control={control}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              ></Input>
              <Input
                control={control}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              ></Input>
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
                <a href="/sign-up" className="link">
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
