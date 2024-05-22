import React from "react";

const FormLayout = ({ children, handleSubmit, title, subTitle }) => {
  return (
    <div className="w-full grid place-items-center mt-8">
      <form
        className="form w-full max-w-[334px]"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-6 font-[500] text-2xl">
          {title}
        </h1>
        {subTitle && <p className="mb-4 text-sm">{subTitle}</p>}
        <div>{children}</div>
      </form>
    </div>
  );
};

export default FormLayout;
