import React, {useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Home from './components/Home/Home'
import "./index.css";
import Reservation from './components/Reservation/Reservation';
import Tour from './components/Tour/Tour';
import RegistrationForm from './components/RegistrationForm/registrationForm';
import { setAuthToken } from './components/setAuthToken()';
import SignIn from './components/RegistrationForm/SignIn';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Logout from './components/auth/Logout';


function App() {
	const [navVisible, showNavbar] = useState(false);
	const [token, setAuthToken] = useState();

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
          <Route
            path="/settings"
            element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <h1>Settings</h1>
              </div>
            }
          />
          <Route
            path="/registration"
            element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <RegistrationForm />
              </div>
            }
          />
          <Route
            path="/sign_in"
            element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <Login />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
//check jwt token
const token = localStorage.getItem("token");
if (token) {
	setAuthToken(token);
}

export default App;