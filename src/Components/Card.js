import React from "react";
import { useContext } from "react";
import { img_link } from "../Config";
import UserContext from "../utils/UserContext";

const Card = ({
  name,
  cuisines,
  totalRatingsString,
  costForTwoString,
  cloudinaryImageId,
  avgRating,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className=" flex flex-col w-52 p-2 overflow-clip cursor-pointer bg-white shadow-lg leading-8">
      <img
        className="card-img"
        src={`${img_link}${cloudinaryImageId}`}
        alt=""
      />
      <span className="font-medium">{name}</span>
      <span className="text-sm text-gray-600">{cuisines.join(", ")}</span>
      <div className="flex justify-between mt-2">
        <span
          className="w-10 h-5 text-sm text-center rounded text-white"
          style={
            avgRating < 4
              ? { backgroundColor: "#DB7C38" }
              : { backgroundColor: "#48C479" }
          }
        >
          <i className="fa-solid fa-star text-white"></i>
          {avgRating}{" "}
        </span>
        <span className="text-sm text-gray-600">{costForTwoString}</span>
      </div>
    </div>
  );
};

export const withPromotedLabel = (Card) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 rounded-lg">Promoted</label>
        <Card {...props}/>
      </div>
    );
  };
};

export default Card;
