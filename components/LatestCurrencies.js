import React from "react";

const LatestCurrencies = ({ currencies, contries }) => {
  const values = Object.values(currencies.rates);
  return (
    <>
      <h3 className="sm:text-2xl text-base font-bold py-4 text-center">
        Latest Currencies Exchange Rates From INR (Indian Rupees)
      </h3>
      <div className="grid grid-cols-3 text-center px-0 lg:px-24 xl:px-48">
        <ul className= "flex flex-col">
          <li className="font-bold text-base sm:text-xl md:text-2xl h-16 sm:h-auto py-4 px-1 border-gray-700 border-b-4">
            Country
          </li>
          {Object.values(contries).map((contry) => (
            <li key={contry} className="h-16 md:h-auto  even:bg-gray-200 text-xl p-1 border-b-2 border-gray-700 border-r-2 last-of-type:hidden">
              {contry}
            </li>
          ))}
        </ul>
        <ul className="">
          <li className="font-bold text-base md:text-2xl h-16 sm:h-auto sm:text-xl py-4 px-1 border-gray-700 border-b-4 ">
            CONTRIES SYMBOL
          </li>

          {Object.keys(currencies.rates).map((key, i) => (
            <li
              className="h-16 md:h-auto even:bg-gray-200 text-xl p-1 border-gray-700 border-b-2 border-r-2"
              key={key}
            >
              {key}
            </li>
          ))}
        </ul>
        <ul className="">
          <li className="font-bold text-base md:text-2xl h-16 sm:h-auto py-4 px-1 sm:text-xl border-gray-700 border-b-4">
            Currencies Value
          </li>
          {Object.values(currencies.rates).map((value, i) => (
            <li
              className="h-16 md:h-auto even:bg-gray-200 text-xl p-1 border-gray-700 border-b-2"
              key={value * i}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LatestCurrencies;
