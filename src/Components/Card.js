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
  }) => {
    const {user} = useContext(UserContext)
    return (
      <div className="flex flex-col w-52 p-2 overflow-clip cursor-pointer bg-slate-100">
        <img
          className="card-img"
          src={`${img_link}${cloudinaryImageId}`}
          alt=""
        />
        <span>{name}</span>
        <span>{cuisines.join(",")}</span>
        <span>{totalRatingsString}</span>
        <span>{costForTwoString}</span>
        <span>{user?.name}&{user?.email}</span>
      </div>
    );
  };

  export default Card;