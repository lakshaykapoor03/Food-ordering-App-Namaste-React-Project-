import {useState, useEffect} from "react";

const useRestaurant=(id)=>{

  const [menuItems, setMenuItems] = useState([]);
  //     const {id} = useParams()
  //   console.log(id)

  const getRestaurantMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.38965721231865&lng=77.28755168616772&restaurantId=${id}&submitAction=ENTER`
    );
    const json = await data.json();
    // console.log(
    //   json?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    //     .itemCards[0].card.info
    // );
    // console.log(json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards);
console.log(json)
    const categoryItems = json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards
    const filteredCategoryItems = categoryItems.filter(c=> c.card.card?.["@type"]===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(filteredCategoryItems)
    setMenuItems(filteredCategoryItems);
  };
  // json?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      //   .itemCards
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  return menuItems;


    // const [restaurant, setRestaurant]= useState(null)

    // const getRestaurantInfo = async () => {
    //   const data = await fetch(
    //   // `https://www.swiggy.com/dapi/menu/v4/full?lat=28.3895327&lng=77.2857697&menuId=${id}`
    //   `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.38965721231865&lng=77.28755168616772&restaurantId=${id}&submitAction=ENTER`
    //   );
    //   const json = await data.json();
    //   console.log(json);
    //   setRestaurant(json.data)
    // };
    // useEffect(() => {
    //   getRestaurantInfo();

    // }, []);
    // return restaurant;
}
export default useRestaurant;