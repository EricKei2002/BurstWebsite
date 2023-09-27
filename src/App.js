import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LoadingSpinner from './components/LoadingSpinner';

import Top from "./pages/homes/top";
import AboutUs from "./pages/homes/AboutUs";
import Goods from "./pages/homes/Goods";
import Logo from "./pages/homes/Logo";
import Contact from "./pages/homes/contact";
import Programming from "./pages/homes/Programming";
import NoMatch from "./pages/NoMatcho";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(location.pathname === '/');

  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Goods" element={<Goods />} />
        <Route path="/Logo" element={<Logo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Programming" element={<Programming />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
