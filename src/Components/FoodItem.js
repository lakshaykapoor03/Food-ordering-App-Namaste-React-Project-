import React from "react";
import { img_link } from "../Config";
import { useState } from "react";

const FoodItem = ({ name, imageId }) => {
  let [itemNumber, setItemNumber] = useState(0);

  const increaseItemNumber = () => {
    return setItemNumber(++itemNumber);
  };

  const decreaseItemNumber = () => {
    return setItemNumber(--itemNumber);
  };

  return (
    <div className="flex justify-between items-center w-96 mt-8 p-2 overflow-clip cursor-pointer shadow-lg rounded-xl">
      {imageId? <img
        className="card-img w-20 h-16"
        src={`${img_link}${imageId}`}
        alt=""
      />:""}
     
      <span className="text-sm">{name}</span>
      <span className="flex gap-1 items-center shadow-lg rounded-md">
        <button  className="text-red-600 font-bold w-6 text-center rounded-[50%]" onClick={() => decreaseItemNumber()}> - </button>
        <span className="text-xs font-medium">{itemNumber}</span>
        <button className="text-green-600 font-bold w-6 text-center text-white rounded-[50%]" onClick={() => increaseItemNumber()}>+</button>
      </span>
    </div>
  );
};

export default FoodItem;



