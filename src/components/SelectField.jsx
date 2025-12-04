import React from "react";

const SelectField = ({ label, name, value, handleChange, options = [] }) => {
  console.log(options, "options>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  return (
    <div>
      <p>{label}</p>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className="border-2 px-3 py-1 my-2 w-full bg-white"
      >
        <option value="">Select {label}</option>
        {options.map((opt, index) => (
          <option key={index} value={opt._id || opt}>
            {opt.name || opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
