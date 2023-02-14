import React from "react";
import { useState } from "react";
import Container from "./Components/Container";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Search from "./Components/Search";
import "./App.css";
import Shimmer from "./Components/Shimmer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import RestaurantMenu from "./Components/RestaurantMenu";
import ProfileFunctionalComponent from "./Components/Profile";
import Profile from "./Components/ProfileClass";
import Instamart from "./Components/Instamart";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  return (
    <Provider store={store}>

      <UserContext.Provider
        value={{
          user:user,
        setUser:setUser}
        }
      >
        <Navbar />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Container />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
        children: [
          {
            path: "profile",
            element: [
              <Profile name={"Lakshay class"} />,
              <ProfileFunctionalComponent name={"Lakshay"} />,
            ],
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
    ],
  },
]);

export default App;
