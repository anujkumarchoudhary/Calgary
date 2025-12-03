import React from "react";

const CommonButton = ({name , handleClick ,className}) => {
  return (
    <div>
      <button
        onClick={handleClick}
        className={`${className} bg-[#ED147D] text-[#FFFFFF] my-auto w-full flex justify-center px-8 py-2 cursor-pointer rounded-4xl`}
      >
        {name}
      </button>
    </div>
  );
};

export default CommonButton;
