import React from "react";
import Card from "./Card";
import { restaurantsList } from "../Config";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline"
import UserContext from "../utils/UserContext";


const filterRestaurants = (restaurantList, searchText) => {
  const filterData = restaurantList.filter((r) =>
    r?.data?.name?.toLowerCase()?.includes(searchText)
  );
  return filterData;
};

const Container = () => {
  const [searchText, setSearchText] = useState("");
  // const [searchClicked, setSearchClicked]= useState()
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
const {user, setUser}= useContext(UserContext)
  //  console.log(restaurants)
  console.log("render");
  // console.log(restaurants);

  useEffect(() => {
    getRestaurants();
  },[]);

  const getRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3895327&lng=77.2857697&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json.data.cards[2].data.data.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
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
        <div className="flex justify-center rounded bg-slate-300  ">
          <input
            type="text"
            className="rounded  border-2 border-gray-200"
            placeholder="Search your favourite food..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            onClick={() => {
              const data = filterRestaurants(allRestaurants, searchText);
              setFilteredRestaurants(data);
              console.log("first");
            }}
          >
            {" "}
            <i className="fa-solid fa-magnifying-glass" />
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
          <Link to={`restaurant/${restaurant.data.id}`} key={restaurant.data.id}> <Card  {...restaurant.data} />
          </Link>
          ))
        )}
        {/* <Card restaurant={restaurants[0].data}/>
      <Card restaurant={restaurants[1].data}/>
      <Card restaurant={restaurants[2].data}/>
      <Card restaurant={restaurants[3].data}/>
      <Card restaurant={restaurants[4].data}/>
      <Card restaurant={restaurants[5].data}/>
       */}
      </div>
    </div>
  );
};

export default Container;
