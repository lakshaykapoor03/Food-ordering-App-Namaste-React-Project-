import {useState, useEffect} from "react";

const useRestaurant=(id)=>{

    const [restaurant, setRestaurant]= useState(null)

    const getRestaurantInfo = async () => {
      const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=28.3895327&lng=77.2857697&menuId=${id}`
      );
      const json = await data.json();
      console.log(json);
      setRestaurant(json.data)
    };
    useEffect(() => {
      getRestaurantInfo();

    }, []);
    return restaurant;
}
export default useRestaurant;