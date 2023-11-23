import React from "react";
import { useWatch } from "react-hook-form";
import useClickOutSides from "../../hooks/useClickOutSide";

const FilterSelect = ({ control, setValue, name, data, ...props }) => {
  const { show, setShow, nodeRef } = useClickOutSides();
  const weightValue = useWatch({
    control,
    name: "weight",
    defaultValue: "",
  });
  console.log(weightValue);
  const handleClickSelect = (event) => {
    setValue(name, event.target.dataset.weight);
  };
  return (
    <>
      <div
        ref={nodeRef}
        class="filter__form-select"
        style={{ "--width": "158px" }}
        onClick={() => setShow(!show)}
      >
        {weightValue ? `${weightValue}g` : "Weight"}
        <img
          src="./assets/icons/select-arrow.svg"
          alt=""
          class="filter__form-select-arrow icon"
        />
        <div className="filter__form-select__values">
          <div
            className="filter__form-select__value"
            onClick={handleClickSelect}
            data-weight="250"
          >
            250
          </div>
          <div
            className="filter__form-select__value"
            onClick={handleClickSelect}
            data-weight="500"
          >
            500
          </div>
          <div
            className="filter__form-select__value"
            onClick={handleClickSelect}
            data-weight="750"
          >
            750
          </div>
          <div
            className="filter__form-select__value"
            onClick={handleClickSelect}
            data-weight="1000"
          >
            1000
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSelect;
