import React from "react";

const RadioInput = (props) => {
  return (
    <label className="cursor-pointer custom-radio">
      <input type="radio" {...props} hidden />
      <div className="w-full h-full bg-white rounded-full"></div>
    </label>
  );
};

export default RadioInput;
