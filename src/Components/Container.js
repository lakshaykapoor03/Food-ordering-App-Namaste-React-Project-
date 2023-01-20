import React from "react";
import Card from "./Card";
import { restaurantsList } from "../Config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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

  //  console.log(restaurants)
  console.log("render");
  // console.log(restaurants);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3895327&lng=77.2857697&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json.data.cards[2].data.data.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  return allRestaurants?.length === 0 ? (
    <div className="shimmer-container">
      <Shimmer />
      
    </div>
  ) : (
    <div>
      <div>
        <div className="search-div">
          <input
            type="text"
            className="input"
            placeholder="Search your favourite food..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
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
        {/* <div>
     <h1>{searchClicked?"true":"false"}</h1>
     <button onClick={()=>(searchClicked?setSearchClicked(false):setSearchClicked(true))}>Search</button>
 </div> */}
      </div>
      <div className="cards-container">
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
