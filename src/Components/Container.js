import React from "react";
import Card from "./Card";
import { restaurantsList } from "../Config";
import { useState } from 'react'


const filterRestaurants=(restaurantList, searchText)=>{
  const filterData=restaurantList.filter((r)=>(r.data.name.includes(searchText)))
  return filterData
}

const Container = () => {

    const [searchText, setSearchText]= useState("")
    // const [searchClicked, setSearchClicked]= useState()
    const[restaurants, setRestaurants]= useState(restaurantsList)

   console.log(restaurants)

    return (
<div>
<div>
    <div className="search-div">
        <input type="text" className="input" placeholder='Search your favourite food...' value={searchText} onChange={(e)=>(setSearchText(e.target.value))}
        />
       <button onClick={()=>{
          const data=filterRestaurants(restaurantsList, searchText)
      setRestaurants(data)

        console.log("first")} 
          }> <i className="fa-solid fa-magnifying-glass" />
          </button>
       
    </div>
     {/* <div>
     <h1>{searchClicked?"true":"false"}</h1>
     <button onClick={()=>(searchClicked?setSearchClicked(false):setSearchClicked(true))}>Search</button>
 </div> */}
 </div>
      <div className="cards-container">
        {restaurants.map((restaurant, idx) => (
          <Card key={restaurant.data.id} {...restaurant.data} />
        ))}
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