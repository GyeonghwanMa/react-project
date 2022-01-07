import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
// import Detail from "pages/Detail";

function Router(props: any) {
  return (
    <BrowserRouter >
      <Navigation />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/movie/:id" component={Detail} /> */}
      </Routes>
    </BrowserRouter >
  );
}

export default Router;