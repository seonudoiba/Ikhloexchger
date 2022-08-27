import React from "react";

const Card = ({ title, text, myicon }) => {
  return (
    <div className=" card my-4 pb-8 flex justify-center hover:cursor-pointer hover:animate-bounce bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      
      <div className="px-12  text-white ">
      <div className="pt-8 pb-4 text-sm text-gray-600 flex items-center">{myicon}</div>
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className=" ">{text}</p>
      </div>
    </div>
  );
};

export default Card;
