import React from 'react'
import {useState, useContext} from "react";
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import useLoggedIn from '../utils/useLoggedIn';
import UserContext from '../utils/UserContext';


const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState()
  const isOnline = useOnline()
const {user}= useContext(UserContext)


    return (
      <div className="flex flex-wrap justify-around bg-slate-300 p-5">
        <div>
        <a href="/">
          <img
            className="w-20" 
            src="https://content3.jdmagicbox.com/comp/delhi/w2/011pxx11.xx11.190503222708.j9w2/catalogue/food-24-by-7-dwarka-sector-7-delhi-multicuisine-restaurants-kjknooz5pi.jpg"
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
         <Link to="/cart"><li className="mx-1 underline">Cart</li></Link> 
         <Link to="/instamart"><li className="mx-1 underline">Instamart</li></Link> 
         {isOnline?"Online":"Offline"}
        </ul>
        </div>
        


       <div>
        {isLoggedIn? <button onClick={()=>(setIsLoggedIn(false))}>Logout</button>: <button onClick={()=>(setIsLoggedIn(true))}>Login</button>}
        </div>
      </div>
    );
  };

export default Navbar