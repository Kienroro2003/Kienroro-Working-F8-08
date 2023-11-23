import React from "react";
import RangeSlider from "./input/RangeSlider";

const FilterInputRange = () => {
  const [value, setValue] = React.useState({ min: 0, max: 100 });

  return (
    <div>
      <RangeSlider
        min={0}
        max={100}
        step={5}
        value={value}
        onChange={setValue}
      />
      <div class="filter__form-group filter__form-group--inline">
        <div>
          <label for="" class="filter__form-label filter__form-label--small">
            {" "}
            Minimum{" "}
          </label>
          <div class="filter__form-text-input filter__form-text-input--small">
            <input
              type="text"
              name=""
              id=""
              value="$30.00"
              class="filter__form-input filter__form-input--small"
            />
          </div>
        </div>
        <div>
          <label for="" class="filter__form-label filter__form-label--small">
            {" "}
            Maximum{" "}
          </label>
          <div class="filter__form-text-input filter__form-text-input--small">
            <input
              type="text"
              name=""
              id=""
              value="$100.00"
              class="filter__form-input filter__form-input--small"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterInputRange;
