import React from "react";

const Card = ({ title, text, myicon }) => {
  return (
    <div className=" card my-4 pb-8 flex justify-center h-56
     hover:cursor-pointer transition ease-in-out delay-100
      hover:-translate-y-1 hover:scale-110 duration-200 hover:bg-gray-700
       bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      <div className="px-12  text-white ">
        <div className="pt-8 pb-4 text-sm text-gray-600 flex items-center">
          {myicon}
        </div>
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className=" ">{text}</p>
      </div>
    </div>
  );
};

export default Card;
