import React from "react";
import { useController } from "react-hook-form";

const RangeSlider = ({
  min,
  max,
  // value = {},
  step,
  // onChangeValue,
  control,
  ...props
}) => {
  // const [minValue, setMinValue] = React.useState(value ? value.min : min);
  // const [maxValue, setMaxValue] = React.useState(value ? value.max : max);
  const { field: fieldMax } = useController({
    control,
    name: props.nameMax,
  });

  const { field: fieldMin } = useController({
    control,
    name: props.nameMin,
  });
  const { value: valuesMax } = fieldMax;
  const { value: valueMin } = fieldMin;
  console.log("🚀 ~ file: RangeSlider.js:25 ~ fieldMin:", valuesMax);

  // React.useEffect(() => {
  //   if (value) {
  //     setMinValue(value.min);
  //     setMaxValue(value.max);
  //   }
  // }, [value]);

  // const handleMinChange = (e) => {
  //   e.preventDefault();
  //   const newMinVal = Math.min(+e.target.value, maxValue - step);
  //   if (!value) setMinValue(newMinVal);
  //   onChangeValue({ min: newMinVal, max: maxValue });
  // };

  // const handleMaxChange = (e) => {
  //   e.preventDefault();
  //   const newMaxVal = Math.max(+e.target.value, minValue + step);
  //   if (!value) setMaxValue(newMaxVal);
  //   onChangeValue({ min: minValue, max: newMaxVal });
  // };

  const minPos = ((valuesMax - min) / (max - min)) * 100;
  const maxPos = ((valueMin - min) / (max - min)) * 100;

  return (
    <div class="wrapper">
      <div class="input-wrapper">
        <input
          class="input"
          type="range"
          value={valueMin}
          min={min}
          max={max}
          step={step}
          {...fieldMin}
          // onChange={handleMinChange}
        />
        <input
          class="input"
          type="range"
          value={valuesMax}
          min={min}
          max={max}
          step={step}
          {...fieldMax}
          // onChange={handleMaxChange}
        />
      </div>

      <div class="control-wrapper">
        <div class="control" style={{ left: `${minPos}%` }} />
        <div class="rail">
          <div
            class="inner-rail"
            style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
          />
        </div>
        <div class="control" style={{ left: `${maxPos}%` }} />
      </div>
    </div>
  );
};

export default RangeSlider;
