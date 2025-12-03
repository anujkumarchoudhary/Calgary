import React from "react";
import CommonButton from "../CommonButton";
import FormLayout from "./FormLayout";

const AgeVerification = ({ handleClickNo,handleClose }) => {
  const handleClickYes = () => {
    localStorage.setItem("ageVerified", true);
    handleClose()
  };

  return (
    <FormLayout>
      <h2 className="text-4xl font-bold">Age Verification</h2>
      <p className="py-4">You must be 18 years old to enter.</p>
      <div className="flex justify-center gap-5">
        <CommonButton name="Yes" handleClick={handleClickYes} />
        <CommonButton
          name="No"
          handleClick={handleClickNo}
          className="bg-slate-200 text-black"
        />
      </div>
    </FormLayout>
  );
};

export default AgeVerification;
