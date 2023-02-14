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
      <div className="flex flex-wrap justify-around bg-slate-300 p-5">
        <div>
        <a href="/">
          <img
            className="w-12 rounded-md" 
            src="data:image/png;base64,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"
            alt="logo"
          ></img>
        </a>
        </div>
        <div className="">
        <ul className="flex justify-around" >
        <p>{user?.name}</p>
        <Link to="/"><li className="mx-1 underline">Home</li></Link> 
         <Link to="/about"><li className="mx-1 underline">About Us</li></Link> 
         <Link to="/contact"><li className="mx-1 underline">Contact</li></Link> 
         <Link to="/instamart"><li className="mx-1 underline">Instamart</li></Link> 
         <Link to="/cart"><li className="mx-1 underline">Cart</li></Link> 
         <span> -{cartItems.length} items</span>
         <br/>
         {isOnline?"Online":"Offline"}
        </ul>
        </div>
        


       <div>
        {isLoggedIn? <button className="bg-red-400 rounded p-1" onClick={()=>(setIsLoggedIn(false))}>Logout</button>: <button className="bg-green-600 rounded p-1" onClick={()=>(setIsLoggedIn(true))}>Login</button>}
        </div>
      </div>
    );
  };

export default Navbar