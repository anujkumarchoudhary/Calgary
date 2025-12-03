import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonButton from "./CommonButton";
import UserForm from "./form/UserForm";

const Header = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex justify-between px-8 py-4">
      <h2 className="text-4xl font-bold text-[#ED147D]">
        Cal<span className="text-black">gary Meet</span>
      </h2>
      <div className="flex gap-4">
        {token ? (
          <CommonButton name={"Logout"} handleClick={handleClick} />
        ) : (
          <CommonButton name={"Login"} handleClick={() => setOpen(!open)} />
        )}
      </div>
      {open && <UserForm handleClose={() => setOpen(false)} />}
    </div>
  );
};

export default Header;
