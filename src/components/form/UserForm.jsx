import React, { useState } from "react";
import InputField from "../InputField";
import CommonButton from "../CommonButton";
import axios from "axios";
import { baseURL } from "../../../baseurl";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import FormLayout from "./FormLayout";
import SelectField from "../SelectField";
import FemelProfileSetting from "./FemelProfileSetting";

const UserForm = ({ refresh, handleClose, handleOpenProfile,passGenderTOParant }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("token");
  const [isAcount, setIsAcount] = useState(false);
  const [inputVal, setInputVal] = useState({
    name: "",
    phone: "",
    email: "admin@gmail.com",
    gender: "",
    password: "admin@123",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputVal({ ...inputVal, [name]: value });
  };
  const handleClick = async () => {
    try {
      const res = await axios.post(
        `${baseURL}/users/${isAcount ? "create" : "login"}`,
        inputVal
      );
      if (res?.status == 201 || 200) {
        toast.success(res?.data?.message);
        const { gender } = res?.data?.newUser;
        passGenderTOParant(gender)
        console.log(res?.data?.newUser, "res?.data?.message");
        localStorage.setItem("token", res?.data?.token);
        handleOpenProfile();
        handleClose();
        navigate("/");
      }
    } catch (err) {
      if (err?.status == 401) {
        toast.error(err?.response?.data?.message);
      }
      console.log(err);
    }
  };
  return (
    <div>
      <FormLayout handleClose={handleClose} className={"w-110"}>
        <p className="text-4xl font-bold text-center">
          {isAcount ? "Register" : "Login"}
        </p>

        {isAcount && (
          <InputField
            label="Name"
            name="name"
            value={inputVal?.name}
            handleChange={handleChange}
            placeholder="Please enter name"
          />
        )}

        <InputField
          label="Email"
          name="email"
          value={inputVal?.email}
          handleChange={handleChange}
          placeholder="Please enter email"
        />
        {isAcount && (
          <SelectField
            label={"Gender"}
            name={"gender"}
            value={inputVal.gender}
            handleChange={handleChange}
            options={["Male", "Femel"]}
          />
        )}

        <InputField
          label="Password"
          name="password"
          value={inputVal?.password}
          handleChange={handleChange}
          placeholder="Please enter password"
        />

        <CommonButton
          name={isAcount ? "Register" : "Login"}
          handleClick={handleClick}
        />
        <p onClick={() => setIsAcount(!isAcount)}>
          {isAcount
            ? "Do you have account, login"
            : "if not have account, register"}
        </p>
      </FormLayout>
    </div>
  );
};

export default UserForm;
