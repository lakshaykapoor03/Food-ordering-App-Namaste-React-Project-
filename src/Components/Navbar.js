import React from 'react'


const Navbar = () => {
    return (
      <div className="nav">
        <a href="/">
          <img
            className="logo-img"
            src="https://content3.jdmagicbox.com/comp/delhi/w2/011pxx11.xx11.190503222708.j9w2/catalogue/food-24-by-7-dwarka-sector-7-delhi-multicuisine-restaurants-kjknooz5pi.jpg"
            alt="logo"
          ></img>
        </a>
        <h1>FOOD 24/7</h1>
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    );
  };

export default Navbar