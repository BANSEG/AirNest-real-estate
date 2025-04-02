import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./Pages/home.jsx";
import EstateDetails from "./Pages/estate-details.jsx";
import Footer from "./components/Footer.jsx";
import SignupPage from "./Pages/signup.jsx";
import LoginPage from "./Pages/login.jsx";
import Mission from "./components/Mission.jsx";
import EstateList from "./components/EstateList.jsx";
import Hero from "./components/Hero.jsx";
import Search from "./components/Search.jsx";
import Contact from "./components/Contact.jsx";


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home/:id" element={<EstateDetails />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/EstateList" element={<EstateList/>} />
        <Route path="/Hero" element={<Hero />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
