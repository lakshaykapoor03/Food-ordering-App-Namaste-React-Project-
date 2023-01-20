import React from "react";
import Container from "./Components/Container";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Search from "./Components/Search";
import "./App.css";
import Shimmer from "./Components/Shimmer";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import RestaurantMenu from "./Components/RestaurantMenu";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
     <Outlet/>
      <Footer />
    </div>
  );
}

export const appRouter=createBrowserRouter([
  {path:"/",
element:<App/>,
errorElement:<Error/>,
children:[
  {
    path:"/",
    element:<Container/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  {
    path:"/restaurant/:id",
    element:<RestaurantMenu/>
  }
] },
{
  path:"/restaurant/:id",
  element:<RestaurantMenu/>
}

])
 

export default App;
