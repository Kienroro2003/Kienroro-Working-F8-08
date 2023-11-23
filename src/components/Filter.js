import React from "react";
import FilterIcon from "../assets/icons/filter.svg";
import useClickOutSide from "../hooks/useClickOutSide";
import RangeSlider from "./input/RangeSlider";
import { useForm } from "react-hook-form";

const Filter = () => {
  const [value, setValue] = React.useState({ min: 0, max: 100 });
  const { show, nodeRef, setShow } = useClickOutSide();
  const handleClickFilter = () => {
    setShow(!show);
  };
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      price: { min: 0, max: 100 },
    },
  });
  const onSubmit = (data) => {
    if (isValid) {
      console.log(data);
    }
  };
  return (
    <div class="filter-wrap" ref={nodeRef}>
      <button
        onClick={handleClickFilter}
        class="filter-btn"
        toggle-target="#filter-home"
      >
        Filter
        <img src={FilterIcon} alt="" class="filter-btn__icon icon" />
      </button>

      <div class={`filter ${show ? "show" : "hide"}`} id="filter-home">
        <img src="./assets/icons/arrow.png" alt="" class="filter__arrow" />
        <h3 class="filter__heading">Filter</h3>
        <form onSubmit={handleSubmit(onSubmit)} class="filter__form">
          <div class="filter__row filter__content">
            {/* <!-- Filter column 1 --> */}
            <div class="filter__col">
              <label for="" class="filter__form-label">
                Price
              </label>
              <div class="filter__form-group">
                <RangeSlider
                  min={0}
                  max={100}
                  step={5}
                  value={value}
                  onChangeValue={setValue}
                  control={control}
                  nameMax={"max"}
                  nameMin={"min"}
                />
              </div>
              <div class="filter__form-group filter__form-group--inline">
                <div>
                  <label
                    for=""
                    class="filter__form-label filter__form-label--small"
                  >
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
                  <label
                    for=""
                    class="filter__form-label filter__form-label--small"
                  >
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

            <div class="filter__separate"></div>

            {/* <!-- Filter column 2 --> */}
            <div class="filter__col">
              <label for="" class="filter__form-label">
                Size/Weight
              </label>
              <div class="filter__form-group">
                <div class="filter__form-select-wrap">
                  <div
                    class="filter__form-select"
                    style={{ "--width": "158px" }}
                  >
                    500g
                    <img
                      src="./assets/icons/select-arrow.svg"
                      alt=""
                      class="filter__form-select-arrow icon"
                    />
                  </div>
                  <div class="filter__form-select">
                    Gram
                    <img
                      src="./assets/icons/select-arrow.svg"
                      alt=""
                      class="filter__form-select-arrow icon"
                    />
                  </div>
                </div>
              </div>
              <div class="filter__form-group">
                <div class="filter__form-tags">
                  <button class="filter__form-tag">Small</button>
                  <button class="filter__form-tag">Medium</button>
                  <button class="filter__form-tag">Large</button>
                </div>
              </div>
            </div>

            <div class="filter__separate"></div>

            {/* <!-- Filter column 3 --> */}
            <div class="filter__col">
              <div class="filter__col">
                <label for="" class="filter__form-label">
                  Size/Weight
                </label>
              </div>
              <div class="filter__form-group">
                <div class="filter__form-text-input">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search brand name"
                    class="filter__form-input"
                  />
                  <img
                    src="./assets/icons/search.svg"
                    alt=""
                    class="filter__form-input-icon icon"
                  />
                </div>
              </div>
              <div class="filter__form-group">
                <div class="filter__form-tags">
                  <button class="filter__form-tag">Lavazza</button>
                  <button class="filter__form-tag">Nescafe</button>
                  <button class="filter__form-tag">Starbucks</button>
                </div>
              </div>
            </div>
          </div>
          <div class="filter__row filter__footer">
            <button
              class="btn btn--text filter__cancel js-toggle"
              type="button"
              onClick={handleClickFilter}
            >
              Cancel
            </button>
            <button
              class="btn btn--primary filter__submit js-toggle"
              toggle-target="#filter-home"
            >
              Show Result
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
