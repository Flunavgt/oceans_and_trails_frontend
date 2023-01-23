import {
  BrowserRouter,
  Routes, Route, Navigate,
} from 'react-router-dom';
import { useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import './index.css';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Tour from './components/Tour/Tour';
import Reservation from './components/Reservation/Reservation';
import ReservationForm from './components/Reservation/ReservationForm';
import TourDetails from './components/Tour/TourDetails';


const App = (tour) => {
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
            path="/tours/:id"
            element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <TourDetails />
              </div>
            }
          />
          <Route
            path="/sign-up"
            element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <SignUpPage />
              </div>
            }
          />
          <Route
            path="/sign-in"
            element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <SignInPage />
              </div>
            }
          />
          if (localStorage.getItem('token')){" "}
          {
            <Route
              path="/tours"
              element={
                <div className={!navVisible ? "page" : "page page-with-navbar"}>
                  <Tour />
                </div>
              }
            />
          }
          <Route
            path="/my_reservation"
            element={
              <div className={!navVisible ? "page" : "page page-with-navbar"}>
                <Reservation />
              </div>
            }
          />
          if (localStorage.getItem('token')){" "}
          {
            <Route
              path="/reservation"
              element={
                <div className={!navVisible ? "page" : "page page-with-navbar"}>
                  <ReservationForm />
                </div>
              }
            />
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;