import React from "react";

const Input = ({ title, children, ...rest }) => {
  return (
    <div className="w-full relative cursor-pointer mb-2">
      <label className="text-base font-semibold mb-1 block">{title}</label>
      <input
        type="text"
        className={`px-3 py-[5px] text-sm text-[#333333] bg-[#ffffff] w-full border-[1px] border-[#a8a8a8] focus:border-[#005f83] hover:border-[#005f83]`}
        required
        {...rest}
      />
      {children ? children : null}
    </div>
  );
};

export default Input;
