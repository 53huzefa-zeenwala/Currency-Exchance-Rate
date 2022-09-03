import React from "react";

const Header = ({ heading }) => {
  return (
    <>
    <div className="text-blue-400 text-base sm:text-4xl text-center font-semibold font-sans lg:px-12 xl:px-40 lg:text-5xl tracking-wider">
      {heading}
    </div>
    
    </>
  );
};

export default Header;
