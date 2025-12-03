import React from "react";

const InputField = ({
  label,
  type,
  name,
  value,
  handleChange,
  placeholder,
}) => {
  return (
    <div>
      <p>{label}</p>
      <input
        type={"type"}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="border-2 px-3 py-1 my-2 w-full bg-white"
      />
    </div>
  );
};

export default InputField;
