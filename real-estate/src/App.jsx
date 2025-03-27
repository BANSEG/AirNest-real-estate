import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./Pages/home.jsx";
import EstateDetails from "./pages/EstateDetails.jsx";
import Footer from "./components/Footer.jsx";
import SignupPage from "./Pages/signup.jsx";
import Login from "./Pages/Login.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home/:id" element={<EstateDetails />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
