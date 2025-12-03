import React, { useState } from "react";
import CommonHeading from "./CommonHeading";
import CommonButton from "./CommonButton";
import MemberCard from "./card/MemberCard";
import img_1 from "../assets/imgs/members/member_1.jpg";
import img_2 from "../assets/imgs/members/member_2.jpg";
import img_3 from "../assets/imgs/members/member_3.jpg";
import img_4 from "../assets/imgs/members/member_4.jpg";
import img_5 from "../assets/imgs/members/member_5.jpg";
import img_6 from "../assets/imgs/members/member_6.jpg";
import img_7 from "../assets/imgs/members/member_7.jpg";
import img_8 from "../assets/imgs/members/member_8.jpg";
import img_9 from "../assets/imgs/members/member_9.jpg";
import img_10 from "../assets/imgs/members/member_10.jpg";

const members = [
  {
    img: img_1,
    name: "Sherry Lin",
    label: "",
  },
  {
    img: img_2,
    name: "Sherry Lin",
    label: "",
  },
  {
    img: img_3,
    name: "Sherry Lin",
    label: "",
  },
  {
    img: img_4,
    name: "Sherry Lin",
    label: "",
  },

  {
    img: img_5,
    name: "Sherry Lin",
    label: "",
  },
  {
    img: img_6,
    name: "Sherry Lin",
    label: "",
  },
  {
    img: img_7,
    name: "Sherry Lin",
    label: "",
  },

  {
    img: img_8,
    name: "Sherry Lin",
    label: "",
  },

  {
    img: img_9,
    name: "Sherry Lin",
    label: "",
  },
  {
    img: img_10,
    name: "Sherry Lin",
    label: "",
  },
];

const PopularMembers = () => {
  const [tab, setTab] = useState("Newest");
  return (
    <div className="px-22 bg-gray-200">
      <CommonHeading />
      <div className="flex mx-auto text-center justify-between w-144">
        <CommonButton
          name={"Newest Members"}
          className={`bg-white border-2 text-black ${
            tab === "Newest" ? "border-[#ED147D]" : "border-gray-300"
          }`}
          handleClick={() => setTab("Newest")}
        />

        <CommonButton
          name={"Active Members"}
          className={`bg-white border-2 text-black ${
            tab === "Active" ? "border-[#ED147D]" : "border-gray-300"
          }`}
          handleClick={() => setTab("Active")}
        />

        <CommonButton
          name={"Popular Members"}
          className={`bg-white border-2 text-black ${
            tab === "Popular" ? "border-[#ED147D]" : "border-gray-300"
          }`}
          handleClick={() => setTab("Popular")}
        />
      </div>

      <div className="grid grid-cols-5 gap-5 my-10">
        {members?.map((member) => {
          return (
            <div>
              <MemberCard
                img={member?.img}
                name={member?.name}
                label="registered 4 months, 1 week ago"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularMembers;
