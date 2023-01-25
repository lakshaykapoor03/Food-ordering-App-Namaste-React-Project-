import React from 'react'
import {useState} from "react";
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import useLoggedIn from '../utils/useLoggedIn';


const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState()
  const isOnline = useOnline()

    return (
      <div className="nav">
        <a href="/">
          <img
            className="logo-img"
            src="https://content3.jdmagicbox.com/comp/delhi/w2/011pxx11.xx11.190503222708.j9w2/catalogue/food-24-by-7-dwarka-sector-7-delhi-multicuisine-restaurants-kjknooz5pi.jpg"
            alt="logo"
          ></img>
        </a>
        <h1></h1>
        <ul className="nav-items">
        <Link to="/"><li>Home</li></Link> 
         <Link to="/about"><li>About Us</li></Link> 
         <Link to="/contact"><li>Contact</li></Link> 
         <Link to="/cart"><li>Cart</li></Link> 
         <Link to="/instamart"><li>Instamart</li></Link> 
         {isOnline?"Online":"Offline"}
        </ul>
        


       
        {isLoggedIn? <button onClick={()=>(setIsLoggedIn(false))}>Logout</button>: <button onClick={()=>(setIsLoggedIn(true))}>Login</button>}
       
      </div>
    );
  };

export default Navbar