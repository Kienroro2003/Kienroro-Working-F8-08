import React from "react";
import Lock from "../../assets/icons/lock.svg";
import Message from "../../assets/icons/message.svg";

const Input = (props) => {
  return (
    <div className="input__group">
      <input type="text" {...props} className="input__field" />
      <button className="input__icon">
        {props.type === "password" ? (
          <img src={Lock} alt="lock" />
        ) : (
          <img src={Message} alt="message" />
        )}
      </button>
    </div>
  );
};

export default Input;
