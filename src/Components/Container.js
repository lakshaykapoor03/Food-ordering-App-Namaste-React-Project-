import React from "react";
import Card,{withPromotedLabel} from "./Card";
import { restaurantsList } from "../Config";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline"
import UserContext from "../utils/UserContext";



const Container = () => {
  const [searchText, setSearchText] = useState("");
  // const [searchClicked, setSearchClicked]= useState()
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
const {user, setUser}= useContext(UserContext)
  //  console.log(restaurants)
  const RestaurantCardPromoted = withPromotedLabel(Card)
  console.log("render");
  // console.log(restaurants);

 

  const getRestaurants = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
     console.log(   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setAllRestaurants(   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  
  useEffect(() => {
    getRestaurants();
  },[]);
  
const filterRestaurants = (restaurantList, searchText) => {
  const filterData = restaurantList.filter((r) =>
    r?.data?.name?.toLowerCase()?.includes(searchText)
  );
  return filterData;
};

  const online=useOnline();

  if(!online){
    return <h1> Offline, please check your internet connection!!</h1>
  }

  if(!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <div className="shimmer-container">
      <Shimmer />
      
    </div>
  ) : (
    <div>
      <div>
        <div className="flex justify-center p-2 bg-[#272b3f] ">
          <input
            type="text"
            className=" border-2 border-gray-200 outline-none p-2 w-3/4"
            placeholder="Search your favourite food..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button className="p-3 bg-white"
            onClick={() => {
              const data = filterRestaurants(allRestaurants, searchText);
              setFilteredRestaurants(data);
              console.log("first");
            }}
          >
            {" "}
            <i className="fa-solid fa-magnifying-glass bg-white" />
          </button>
        </div>
        <div>
     <input className="border-2" type="text" value={user.name} onChange={(e)=>setUser({
      ...user,
      name:e.target.value
    
     })}/>
     <input className="border-2" type="text" value={user.email} onChange={(e)=>setUser({
      ...user,
      email:e.target.value
     })}/>
 </div>
      </div>
      <div className="flex flex-wrap gap-5 m-7 justify-center">
        {filteredRestaurants.length === 0 ? (
          <h1>Oops..No restaurant matched your results!!</h1>
        ) : (
          filteredRestaurants.map((restaurant, idx) => (
          <Link to={`restaurant/${restaurant.info.id}`} key={restaurant.info.id}>{restaurant.info.promoted? <RestaurantCardPromoted {...restaurant.info}/>:<Card  {...restaurant.info} />} 
          </Link>
          ))
        )}
  
      </div>
    </div>
  );
};

export default Container;
