import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Modify from "./pages/Modify";
import SignUp from "./pages/SignUp";

function Router() {
  return (
    <BrowserRouter >
      <Navigation />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/modify" element={<Modify />} />
      </Routes>
    </BrowserRouter >
  );
}

export default Router;