import React, { useState } from "react";
import FormLayout from "./FormLayout";
import InputField from "../InputField";
import CommonButton from "../CommonButton";
import axios from "axios";
import { baseURL } from "../../../baseurl";
import { toast } from "react-toastify";

const FemelProfileSetting = ({ gender, handleClose }) => {
  const [form, setForm] = useState({
    drivingLicense: "",
    dl: "",
    bc: "",
  });

  const [errors, setErrors] = useState({});

  const dlRegex = /^[A-Za-z0-9-]{5,20}$/;

  const bcRegex = /^[A-Za-z0-9-]{5,20}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${baseURL}/profile/create`, form);
      console.log(res,"res>LM<DAe")
      if (res?.status == 201 || 200) {
        toast.success(res?.data?.message);
        handleClose()
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormLayout className={"w-120"} handleClose={handleClose}>
      <p className="text-4xl font-bold">Profile Setting</p>

      {gender === "Male" ? (
        <div>
          <InputField
            name={"freeAmount"}
            label="Pay Amount"
            placeholder="Enter amount"
            value={form.freeAmount}
            handleChange={handleChange}
          />
          {errors.freeAmount && (
            <p className="text-red-500 text-sm">{errors.freeAmount}</p>
          )}
        </div>
      ) : (
        <div>
          <InputField
            name={"dl"}
            label="Driving License"
            placeholder="DL-123456"
            value={form.dl}
            handleChange={handleChange}
          />
          {errors.drivingLicense && (
            <p className="text-red-500 text-sm">{errors.drivingLicense}</p>
          )}

          <InputField
            name={"bc"}
            label="Birth Certificate"
            placeholder="BC-2024-XYZ"
            value={form.bc}
            handleChange={handleChange}
          />
          {errors.birthCertificate && (
            <p className="text-red-500 text-sm">{errors.birthCertificate}</p>
          )}
        </div>
      )}

      <CommonButton name="Submit" handleClick={handleSubmit} />
    </FormLayout>
  );
};

export default FemelProfileSetting;
