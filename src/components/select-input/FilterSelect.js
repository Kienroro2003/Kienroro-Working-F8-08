import React from "react";
import { useWatch } from "react-hook-form";
import useClickOutSides from "../../hooks/useClickOutSide";
import { useWeightUnit } from "../../contexts/weightUnit-context";

const FilterSelect = ({ control, weight = true, setValue, name, ...props }) => {
  const { unit, setUnit, units, weights } = useWeightUnit();
  const { show, setShow, nodeRef } = useClickOutSides();
  const weightValue = useWatch({
    control,
    name: name,
  });
  const data = weight ? weights : units;
  const handleClickSelect = (event) => {
    if (!weight) {
      setValue(name, event.target.dataset.weight);
      setUnit(
        () =>
          units[
            units.findIndex((item) => item.unit === event.target.dataset.weight)
          ]
      );
      return;
    }
    setValue(name, +event.target.dataset.weight);
  };
  return (
    <>
      <div
        ref={nodeRef}
        class="filter__form-select"
        style={{ "--width": "158px" }}
        onClick={() => setShow(!show)}
      >
        {weightValue ? `${weightValue}${weight ? unit.alias : ""}` : "Weight"}
        <img
          src="./assets/icons/select-arrow.svg"
          alt=""
          class="filter__form-select-arrow icon"
        />
        <div className={`filter__form-select__values ${show ? "show" : ""}`}>
          {data &&
            data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="filter__form-select__value"
                  onClick={handleClickSelect}
                  data-weight={weight ? item.weight : item.unit}
                >
                  {weight ? item.weight : item.unit}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default FilterSelect;
