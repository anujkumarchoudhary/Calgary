import React from "react";

const MemberCard = ({ img, name, label }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-transparent transition-all duration-300 transform hover:scale-105 hover:shadow-[0_5px_25px_rgba(237,20,125,0.5)] hover:-translate-y-2 hover:border-[#ED147D] cursor-pointer">
      <img src={img} className="w-45 h-45 rounded-full mx-auto" />
      <p className="text-2xl font-bold text-center">{name}</p>
      <p className="text-center">{label}</p>
    </div>
  );
};

export default MemberCard;
