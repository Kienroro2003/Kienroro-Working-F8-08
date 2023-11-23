import React from "react";
import { useController } from "react-hook-form";

const RangeSlider = ({ min, max, step, control, ...props }) => {
  const { field: fieldMax } = useController({
    control,
    name: props.nameMax,
    defaultValue: min,
  });

  const { field: fieldMin } = useController({
    control,
    name: props.nameMin,
    defaultValue: max,
  });
  const { value: valuesMax } = fieldMax;
  const { value: valueMin } = fieldMin;
  console.log("🚀 ~ file: RangeSlider.js:25 ~ fieldMin:", valuesMax);

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
        />
        <input
          class="input"
          type="range"
          value={valuesMax}
          min={min}
          max={max}
          step={step}
          {...fieldMax}
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
