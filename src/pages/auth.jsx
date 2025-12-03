import React, { useState } from "react";
import InputField from "../components/InputField";
import CommonButton from "../components/CommonButton";
import axios from "axios";
import { baseURL } from "../../baseurl";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import img from "../assets/imgs/banner_3.jpg";
import Banner from "../components/Banner";
const checkPoints = ["100% Privacy", "Verified Profile", "Best Matches"];
const Auth = () => {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState({
    email: "admin@gmail.com",
    password: "admin@123",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputVal({ ...inputVal, [name]: value });
  };
  const handleClick = async () => {
    if (!inputVal.email) {
      return toast.error("Email is required!");
    }

    if (!/\S+@\S+\.\S+/.test(inputVal.email)) {
      return toast.error("Please enter a valid email!");
    }

    if (!inputVal.password) {
      return toast.error("Password is required!");
    }
    try {
      const res = await axios.post(`${baseURL}/user/login`, inputVal);
      if (res?.status == 201 || 200) {
        toast.success(res?.data?.message);
        localStorage.setItem("token", res?.data?.token);
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
    <div className="relative h-screen">
      <Banner />
    </div>
  );
};

export default Auth;
