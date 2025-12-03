import React from "react";

const FormLayout = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-slate-50 px-12 py-8 w-fit h-fit border shadow-lg rounded-md">
        {children}
      </div>
    </div>
  );
};

export default FormLayout;
