import React from "react";
import {Routes, Route} from 'react-router-dom'
import Portfolio from "./Pages/Portfolio/Portfolio";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import CoolPage from "./components/Scroll/Scroll"
import "./style.scss"
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      <CoolPage/>
      <Footer/>
    </div>
  );
}

export default App;
