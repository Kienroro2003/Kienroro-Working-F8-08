import React from "react";

const FilterSelect = ({ control, setValue, name, data, ...props }) => {
  return (
    <>
      <div class="filter__form-select" style={{ "--width": "158px" }}>
        500g
        <img
          src="./assets/icons/select-arrow.svg"
          alt=""
          class="filter__form-select-arrow icon"
        />
        <div className="filter__form-select__values">
          <div className="filter__form-select__value">250</div>
          <div className="filter__form-select__value">500</div>
          <div className="filter__form-select__value">750</div>
          <div className="filter__form-select__value">1000</div>
        </div>
      </div>
    </>
  );
};

export default FilterSelect;
