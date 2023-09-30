import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Pages/Home";
import TopNavbar from "./components/Header/TopNavbar";
import Footer from "./components/Footer/Footer";
import Products from "./components/Pages/Products";
import Contact from "./components/Pages/contact";

function App() {
  return (
    <BrowserRouter>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <div className="text-center text-danger ">Page Not Found!!!</div>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
