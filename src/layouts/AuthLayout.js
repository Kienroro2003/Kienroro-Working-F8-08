import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AuthLayout = ({ children, ...props }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AuthLayout;
