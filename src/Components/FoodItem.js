import React from "react";
import {img_link} from "../Config"



const FoodItem = ({
    name,
    cloudinaryImageId,
  }) => {

    return (
      <div className="flex flex-col w-52 p-2 overflow-clip cursor-pointer bg-slate-100">
        <img
          className="card-img"
          src={`${img_link}${cloudinaryImageId}`}
          alt=""
        />
        <span>{name}</span>
        
    
      </div>
    );
  };

  export default FoodItem;