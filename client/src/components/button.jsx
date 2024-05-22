import React from "react";

const Button = ({ title }) => {
  return (
    <button className="my-5 px-6 py-[6px] bg-[#005f83] font-[500] text-sm text-center text-[#ffffff] w-full">
      {title}
    </button>
  );
};

export default Button;
