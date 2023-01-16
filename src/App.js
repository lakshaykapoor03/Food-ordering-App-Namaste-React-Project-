import React from "react";
import Container from "./Components/Container";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Search from "./Components/Search";
import "./App.css";



function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Search/> */}
      <Container />
      <Footer />
    </div>
  );
}

export default App;
