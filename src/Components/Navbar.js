import React from 'react'
import {useState, useContext} from "react";
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import useLoggedIn from '../utils/useLoggedIn';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';


const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState()
  const isOnline = useOnline()
const {user}= useContext(UserContext)
const cartItems= useSelector((store)=>store.cart.items)
console.log(cartItems)


    return (
      <div className="flex flex-wrap justify-around bg-[#272b3f] p-5">
        <div>
        <a href="/">
          <img
            className="w-12 rounded" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTT2x683tcriinpGwAoVtbSw78TnCRTJfyE5LSBwzRlkmC5sXsXKHGtFmRdXYgFWzD1CE&usqp=CAU"
            alt="logo"
          ></img>
        </a>
        </div>
        <div className="">
        <ul className="flex justify-around text-white" >
        <p>{user?.name}</p>
        <Link to="/"><li className="mx-2"><i className="fa-solid fa-house  mx-1"></i>Home</li></Link> 
         <Link to="/about"><li className="mx-2 "><i className="fa-solid fa-address-card mx-1"></i>About Us</li></Link> 
         <Link to="/contact"><li className="mx-2 "><i className="fa-regular fa-address-book mx-1"></i>Contact</li></Link> 
         <Link to="/instamart"><li className="mx-2"><i className="fa-solid fa-bag-shopping mx-1"></i>Instamart</li></Link> 
         <Link to="/cart"><li className="mx-2"><i className="fa-solid fa-cart-shopping mx-1"></i>Cart</li></Link> 
         <span> -{cartItems.length} items</span>
         <br/>
         {isOnline?"Online":"Offline"}
        </ul>
        </div>
        


       <div>
        {isLoggedIn? <button className="bg-red-400 rounded p-1 text-white" onClick={()=>(setIsLoggedIn(false))}> <i className="fa-solid fa-arrow-left  mx-1"></i>Logout</button>: <button className="bg-green-600 rounded p-1 text-white" onClick={()=>(setIsLoggedIn(true))}><i className="fa-solid fa-right-to-bracket mx-1"></i>Login</button>}
        </div>
      </div>
    );
  };

export default Navbar