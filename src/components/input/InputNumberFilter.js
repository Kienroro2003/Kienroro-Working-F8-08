import React from "react";
import { useController } from "react-hook-form";
import { NumericFormat } from "react-number-format";

const InputNumberFilter = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
  });
  return (
    <>
      <NumericFormat
        {...field}
        {...props}
        prefix={"$"}
        decimalScale={2}
        fixedDecimalScale={true}
      ></NumericFormat>
    </>
  );
};

export default InputNumberFilter;
