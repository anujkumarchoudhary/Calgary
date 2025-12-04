import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonButton from "./CommonButton";
import UserForm from "./form/UserForm";
import ProfileVerification from "./form/ProfileVerification";

const Header = () => {
  const token = localStorage.getItem("token");
  const [gender, SetGender] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openFProfile, setOpenFProfile] = useState(false);

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <div className="flex w-full justify-between px-8 py-4">
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
      </div>
      {open && (
        <UserForm
          handleOpenProfile={() => setOpenFProfile(true)}
          handleClose={() => setOpen(false)}
          passGenderTOParant={(g) => SetGender(g)}
        />
      )}
      {openFProfile && (
        <ProfileVerification
          gender={gender}
          handleClose={() => setOpenFProfile(false)}
        />
      )}
    </>
  );
};

export default Header;
