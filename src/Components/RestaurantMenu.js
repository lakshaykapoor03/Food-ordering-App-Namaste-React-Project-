import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { img_link } from "../Config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
import TitleMenuItems from "./TitleMenuItems";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  // console.log(id);
  const restaurantItems = useRestaurant(id);
  console.log(restaurantItems)

  const cartItems = useSelector((store) => store.cart.items);

  // console.log(cartItems);

  const dispatch = useDispatch();

  const handleAddItem = (item) => dispatch(addItem(item));
  const handleClearCart = () => {
    alert("are you sure");
    dispatch(clearCart());
  };



  if (!restaurantItems) {
    return <Shimmer />;
  }
  return (
    <div className="m-auto">
      <div className="flex justify-around">
        {/* <img
          width={"200px"}
          height={"200px"}
          src={`${img_link}/${restaurantItems.cloudinaryImageId}`}
        />
        <div>
          <h2 className="font-bold text-3xl">
            Restaurant Name:{restaurantItems.name}
          </h2>
          <h2>Area:{restaurantItems.area}</h2>
          <h2>{restaurantItems.costForTwoMsg}</h2>
        </div> */}
        {/* <h2>{restaurant.cuisines.join(",")}</h2> */}
      </div>
      <h1 className="font-semibold text-4xl ml-36">Menu</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 ml-36">
          {" "}
          {restaurantItems.map((item, idx) => (
            <div key={idx}>
              <h1 className="text-xl font-bold mb-10">{item.card.card.title}</h1>
              <ul>
    
                  <div key={idx} className="flex flex-col gap-10 ">
                
                  <TitleMenuItems items={item.card.card.itemCards} />
                  </div>
               
              </ul>
            </div>

          ))}
         
        </div>
    
      </div>
    </div>
  );
};

export default RestaurantMenu;


//    <div className="h-full">
{/* <div>
<h1 className="font-bold text-3xl">
  Cart items!!-{cartItems.length}
</h1>
<button
  onClick={() => handleClearCart()}
  className="m-2 bg-red-500  rounded p-1 text-white"
>
  Clear Cart
</button>

<div className="flex flex-col gap-2 justify-evenly flex-wrap">
  {cartItems.map((item, idx) => (
    <FoodItem key={idx} {...item} />
  ))}
</div>
</div>
</div> */}


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