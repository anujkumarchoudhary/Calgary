import React, { useState } from "react";
import InputField from "../InputField";
import CommonButton from "../CommonButton";
import axios from "axios";
import { baseURL } from "../../../baseurl";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import FormLayout from "./FormLayout";
import SelectField from "../SelectField";

const UserForm = ({
  refresh,
  handleClose,
  handleOpenProfile,
  passGenderTOParant,
}) => {
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
  const handleRegister = async () => {
    try {
      const res = await axios.post(`${baseURL}/users/create`, inputVal);
      if (res?.status == 201 || 200) {
        toast.success(res?.data?.message);
        handleOpenProfile();
        handleClose();
        const { gender } = res?.data?.newUser;
        passGenderTOParant(gender);
      }
    } catch (err) {
      if (err?.status == 401) {
        toast.error(err?.response?.data?.message);
      }
      console.log(err);
    }
  };
  const handleLogin = async () => {
    try {
      const res = await axios.post(`${baseURL}/users/login`, inputVal);
      if (res?.status == 201 || 200) {
        toast.success(res?.data?.message);
        localStorage.setItem("token", res?.data?.token);
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
    <div className="bg-yellow-200">
      <FormLayout handleClose={handleClose} className={"w-110 bg-gray-900"}>
        <p className="text-4xl font-bold text-center">
          {isAcount ? "Register" : "Login"}
        </p>

        <div className="py-">
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
        </div>

        <CommonButton
          name={isAcount ? "Register" : "Login"}
          handleClick={isAcount ? handleRegister : handleLogin}
        />
        <p
          onClick={() => setIsAcount(!isAcount)}
          className="pt-1 cursor-pointer"
        >
          {isAcount
            ? "Do you have account, login"
            : "if not have account, register"}
        </p>
      </FormLayout>
    </div>
  );
};

export default UserForm;
