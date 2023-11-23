import { createContext, useContext, useState } from "react";

const fakeUnits = [
  {
    id: 1,
    unit: "Gam",
    alias: "g",
  },
  {
    id: 2,
    unit: "Kg",
    alias: "kg",
  },
];

const fakeWeights = [
  {
    id: 1,
    weight: 250,
  },
  {
    id: 2,
    weight: 500,
  },
  {
    id: 3,
    weight: 750,
  },
  {
    id: 4,
    weight: 1000,
  },
];

const WeightUnit = createContext();

const WeightUnitProvider = (props) => {
  const [units, setUnits] = useState(fakeUnits);
  const [weights, setWeights] = useState(fakeWeights);
  const [unit, setUnit] = useState(fakeUnits[0]);
  const value = {
    unit,
    setUnit,
    units,
    weights,
  };
  return <WeightUnit.Provider value={value} {...props}></WeightUnit.Provider>;
};

const useWeightUnit = () => {
  const context = useContext(WeightUnit);

  if (typeof context === "undefined")
    throw new Error("useGallery must be used within a GalleryProvider");
  return context;
};

export { useWeightUnit, WeightUnitProvider };
