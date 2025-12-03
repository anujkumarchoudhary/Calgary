import React from "react";
import FormLayout from "./FormLayout";

const SorryForm = () => {
  return (
    <FormLayout>
      <p className="text-4xl font-bold text-center">Sorry!</p>
      <p className="py-4">You are not old enough to view the site ...</p>
    </FormLayout>
  );
};

export default SorryForm;
