import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { img_link } from "../Config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import {addItem} from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const params = useParams();
    const { id } = params;
    const restaurant= useRestaurant(id)
    const dispatch= useDispatch()


    const handleAddItem= (item)=>(
      dispatch(addItem(item))
    )

    // commented here and created useRestaurant Hook
    
  // const [restaurant, setRestaurant]= useState(null)

  // const getRestaurantInfo = async () => {
  //   const data = await fetch(
  //   `https://www.swiggy.com/dapi/menu/v4/full?lat=28.3895327&lng=77.2857697&menuId=${id}`
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   setRestaurant(json.data)
  // };
  // useEffect(() => {
  //   getRestaurantInfo();
  // }, []);

  if (!restaurant){
    return(
        <Shimmer/>
    )
  }
  return (
    <div className="flex justify-around">
        <div>
      <h1>Restaurant id:{id}</h1>
      <img  width={"200px"} src={`${img_link}/${restaurant.cloudinaryImageId}`}/>
      <h2>Restaurant Name:{restaurant.name}</h2>
      <h2>Area:{restaurant.area}</h2>
      <h2>{restaurant.costForTwoMsg}</h2>
      {/* <h2>{restaurant.cuisines.join(",")}</h2> */}
    </div>
    <div className="menu">
        <h1>Menu</h1>
        <ul>
            {Object.values(restaurant?.menu?.items).map((item)=>(
                <div className="flex justify-between mt-2">
                <li key={item.id}>{item.name}</li>
                <button onClick={()=>handleAddItem(item)} className="p-1  bg-green-300 rounded hover:bg-green-500">Add item</button>
                </div>
            ))}
        </ul>

    </div>
    </div>
  );
};

export default RestaurantMenu;
