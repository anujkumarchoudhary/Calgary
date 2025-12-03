import React, { useState } from "react";
import CommonButton from "../components/CommonButton";
import img from "../assets/imgs/banner_3.jpg";
const checkPoints = ["100% Privacy", "Verified Profile", "Best Matches"];
const Banner = () => {
  return (
    <div className="relative h-screen">
      <div className=" w-full overflow-hidden">
        <img src={img} className="w-full h-[700px] " alt="" />
      </div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute text-white top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 - p-10 w-160 h-fit">
        <h3 className="text-5xl font-bold ">
          New Places, Unforgettable Dating.
        </h3>
        <p className="py-5">
          Join our international family today! Please call us for more info.
        </p>
        {checkPoints?.map((item, idx) => {
          return (
            <div key={idx} className="flex gap-2">
              <input type="checkbox" checked={true} />

              <p>{item}</p>
            </div>
          );
        })}
        <div className="w-fit pt-5">
          <CommonButton name={"Get A Membership"} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
