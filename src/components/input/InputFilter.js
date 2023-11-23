import React from "react";
import { useController } from "react-hook-form";
import { NumericFormat } from "react-number-format";

const InputFilter = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
  });
  return (
    <>
      <NumericFormat prefix={"$"} {...field} {...props}></NumericFormat>
    </>
  );
};

export default InputFilter;
