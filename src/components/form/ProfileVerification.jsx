import React, { useState } from "react";
import FormLayout from "./FormLayout";
import InputField from "../InputField";
import CommonButton from "../CommonButton";
import axios from "axios";
import { baseURL } from "../../../baseurl";
import { toast } from "react-toastify";

const ProfileVerification = ({ gender, handleClose }) => {
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
  const paymentOption = ["MasterCard", "Paytem", "PhonePay", "GooglePay"];
  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${baseURL}/profile/create`, form);
      console.log(res, "res>LM<DAe");
      if (res?.status == 201 || 200) {
        toast.success(res?.data?.message);
        handleClose();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormLayout className={"w-120"} handleClose={handleClose}>
      <p className="text-4xl font-bold">
        {gender === "Male" ? "Checkout" : "Profile Varification"}
      </p>

      {gender === "Male" ? (
        <div className="py-5">
          <InputField
            name={"freeAmount"}
            label="Pay Amount"
            placeholder="Enter amount"
            value={form.freeAmount || `$${10}.00`}
            handleChange={handleChange}
          />
          <p>We Accept</p>
          <div className="flex gap-2">
            {paymentOption?.map((item) => {
              return (
                <p className="mt-2 px-4 py-2 bg-slate-200 text-xs rounded-full cursor-pointer">
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="py-5">
          <InputField
            name={"dl"}
            label="Driving License"
            placeholder="DL-123456"
            value={form.dl}
            handleChange={handleChange}
          />

          <InputField
            name={"bc"}
            label="Birth Certificate"
            placeholder="BC-2024-XYZ"
            value={form.bc}
            handleChange={handleChange}
          />
        </div>
      )}

      <CommonButton name="Submit" handleClick={handleSubmit} />
    </FormLayout>
  );
};

export default ProfileVerification;
