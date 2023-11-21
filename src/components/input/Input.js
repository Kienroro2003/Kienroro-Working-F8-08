import React from "react";
import Lock from "../../assets/icons/lock.svg";
import Message from "../../assets/icons/message.svg";
import { useController } from "react-hook-form";

const Input = ({ control, ...props }) => {
  const {
    field,
    formState: { errors },
  } = useController({
    name: props.name,
    control,
    defaultValue: "",
  });
  return (
    <div className="input__group">
      <div className="input__field">
        <input type="text" className="input__text" {...field} {...props} />
        <button className="input__icon">
          {props.type === "password" ? (
            <img src={Lock} alt="lock" />
          ) : (
            <img src={Message} alt="message" />
          )}
        </button>
      </div>
      {errors && errors?.[props.name] && (
        <p className="input__error error">{errors[props.name].message}</p>
      )}
    </div>
  );
};

export default Input;
