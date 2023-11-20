import React from "react";
import Google from "../../assets/icons/google.svg";

const Button = (props) => {
  console.log(props.style);
  return (
    <button
      className={`btn btn--action ${props.primary && "btn--primary"} ${
        props.google && "btn--outline btn--google"
      }`}
      style={props.style}
    >
      {props.google && <img src={Google} alt="" className="icon--google" />}
      {props.text}
    </button>
  );
};

export default Button;
