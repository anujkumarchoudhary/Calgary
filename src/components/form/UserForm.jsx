import React, { useState } from "react";
import InputField from "../InputField";
import CommonButton from "../CommonButton";
import axios from "axios";
import { baseURL } from "../../../baseurl";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserForm = ({ refresh, handleClose }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [inputVal, setInputVal] = useState({
    name: "",
    phone: "",
    email: "admin@gmail.com",
    password: "admin@123",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputVal({ ...inputVal, [name]: value });
  };
  const handleClick = async () => {
    try {
      const res = await axios.post(`${baseURL}/user/login`, inputVal);
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
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-slate-50 p-6 w-96 h-fit border shadow-lg rounded-md">
        <p className="text-lg font-bold text-center">Login</p>

        {token && (
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

        <InputField
          label="Password"
          name="password"
          value={inputVal?.password}
          handleChange={handleChange}
          placeholder="Please enter password"
        />

        <CommonButton
          name={!token ? "Login" : "Register"}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default UserForm;
