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

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const restaurantItems = useRestaurant(id);
  console.log(restaurantItems[0]?.card.info)
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems)

  const dispatch = useDispatch();

  const handleAddItem = (item) => dispatch(addItem(item));
  const handleClearCart = () => {
    alert("are you sure");
    dispatch(clearCart());
  };

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

  if (!restaurantItems) {
    return <Shimmer />;
  }
  return (
    <div className="">
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
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 ">
          <h1 className="font-semibold text-4xl m-8">Menu</h1>
          <ul>
            {restaurantItems.map((item) => (
              <div key={item?.card?.info?.id} className="grid grid-cols-2 gap-10 ml-12">
                <div className="flex flex-col">
                  {" "}
                  <li className="font-bold" key={item.id}>
                    {item?.card?.info?.name}
                  </li>
                   <li className="" >Rs.{(item?.card?.info?.price)/100}</li>
                 <li className="text-sm font-medium">
                    {item?.card?.info?.itemAttribute.vegClassifier}
            </li>
                  <li className="text-sm text-gray-400">{item?.card?.info?.description}</li> 
                </div>
                <div className="mt-10">
                  <li>
                    {item?.card?.info?.imageId ? (
                      <img
                        width="15%"
                        className="rounded"
                        src={`${img_link}${item?.card?.info?.imageId}`}
                      />
                    ) : (
                      ""
                    )}
                  </li>
                  <button
                    onClick={() => handleAddItem(item?.card?.info)}
                    className="p-1 text-green-700 font-medium text-sm ml-10 text-center bg-white shadow-lg rounded hover:bg-gray-200"
                  >
                    ADD +
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>
        <div className=" ">
          <div>
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
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
