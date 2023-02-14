import React from "react";
import { useContext } from "react";
import {img_link} from "../Config"
import UserContext from '../utils/UserContext';


const Card = ({
    name,
    cuisines,
    totalRatingsString,
    costForTwoString,
    cloudinaryImageId,
    avgRating
  }) => {
    const {user} = useContext(UserContext)
    return (
      <div className="flex flex-col w-52 p-2 overflow-clip cursor-pointer bg-white shadow-lg">
        <img
          className="card-img"
          src={`${img_link}${cloudinaryImageId}`}
          alt=""
        />
        <span className="font-bold">{name}</span>
        <span>{cuisines.join(",")}</span>
        <span className="w-10 h-6 rounded" style={ avgRating<4 ? {backgroundColor:"#DB7C38"} : {backgroundColor:"#48C479"} } >{avgRating} </span>
        <span>{costForTwoString}</span>
      </div>
    );
  };

  export default Card;