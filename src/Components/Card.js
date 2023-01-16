import React from "react";
import {img_link} from "../Config"

const Card = ({
    name,
    cuisines,
    totalRatingsString,
    costForTwoString,
    cloudinaryImageId,
  }) => {
    return (
      <div className="card">
        <img
          className="card-img"
          src={`${img_link}${cloudinaryImageId}`}
          alt=""
        />
        <span>{name}</span>
        <span>{cuisines.join(",")}</span>
        <span>{totalRatingsString}</span>
        <span>{costForTwoString}</span>
      </div>
    );
  };

  export default Card;