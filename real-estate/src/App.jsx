import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage.jsx";
import EstateDetails from "/pages/EstateDetails.jsx";
import Footer from "./components/Footer.jsx";
import Signup from "./pages/signup.jsx";
import Login from "./pages/login";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home/:id" element={<EstateDetails />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
