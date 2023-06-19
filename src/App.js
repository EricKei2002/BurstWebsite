import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Top from "./pages/homes/top";
import AboutUs from "./pages/homes/AboutUs";
import Goods from "./pages/homes/Goods";
import Logo from "./pages/homes/Logo";
import Contact from "./pages/homes/contact";
import Vlog from "./pages/homes/Vlog";
import NoMatch from "./pages/NoMatcho";
import Header from "./components/Header";


const App = () => {
  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Goods" element={<Goods />} />
        <Route path="/Logo" element={<Logo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Vlog" element={<Vlog />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      
    </>
  );
  
};


export default App;