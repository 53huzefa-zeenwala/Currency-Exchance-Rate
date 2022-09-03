import React from "react";

const SelectOption = ({ contries,Currency, value }) => {

  const values = Object.keys(contries);
  return (
    <select
    className="text-base sm:text-xl border-2 border-black py-1 px-2 w-36 sm:w-52 md:w-60 font-semibold md:text-2xl rounded-md lg:w-72 "
    name="cars"
    onChange={(e) => Currency(e.target.value)}
      value={value}
      id="cars"
    >
      {Object.values(contries).map((contry,i) => (
        <option key={values[i]} value={values[i]}>{contry}</option>
      ))}
    </select>
  );
};

export default SelectOption;
