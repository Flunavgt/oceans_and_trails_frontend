import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import "./index.css";
import Reservation from "./components/Reservation/Reservation";
import Tour from "./components/Tour/Tour";

import { setAuthToken } from "./components/setAuthToken()";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Logout from "./components/auth/Logout";

function App() {
  const [navVisible, showNavbar] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar visible={navVisible} show={showNavbar} />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <Home />
              </div>
            }
          />
          <Route
            path="/tour"
            element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <Tour />
              </div>
            }
          />
          <Route
            path="/reservation"
            element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <Reservation />
              </div>
            }
          />
          <Route
            path="/signin"
            element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <Login />
              </div>
            }
          />
          <Route
            path="/signup"
            element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <Signup />
              </div>
            }
          />
          <Route
            path="/logout"
            element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <Logout />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
