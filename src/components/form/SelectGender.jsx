import React from "react";
import FormLayout from "./FormLayout";
import InputField from "../InputField";
import CommonButton from "../CommonButton";

const SelectGender = () => {
  return (
    <FormLayout>
      <p className="text-4xl font-bold text-center">Select Gender!</p>
      <div className="flex justify-center mt-5 gap-2">
        <CommonButton name={"Male"} />
        <CommonButton name={"Femel"} className={"bg-gray-200 text-black"} />
      </div>
    </FormLayout>
  );
};

export default SelectGender;
