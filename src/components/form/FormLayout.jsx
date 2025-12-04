import React from "react";
import { MdClose } from "react-icons/md";

const FormLayout = ({ children, className, handleClose }) => {
  return (
    <div
      className={` fixed inset-0 flex items-center justify-center bg-black/40 z-50`}
    >
      <div
        className={`${className} relative bg-slate-50 px-12 py-8 h-fit border shadow-lg rounded-md`}
      >
        <MdClose
          onClick={handleClose}
          size={20}
          className="absolute top-5 right-5 cursor-pointer"
        />
        {children}
      </div>
    </div>
  );
};

export default FormLayout;
