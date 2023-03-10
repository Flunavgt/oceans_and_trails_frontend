import React from "react";
import {
  FaAngleRight,
  FaAngleLeft,
  FaChartBar,
  FaThLarge,
  FaShoppingCart,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../../styles/navbar.css";

const ICON_SIZE = 20;

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("user_id");
  window.location.href = "/";
};

const Navbar = ({ visible, show }) => {
  return (
    <>
      <div className="mobile-nav">
        <button className="mobile-nav-btn" onClick={() => show(!visible)}>
          <FaBars size={24} />
        </button>
      </div>
      <nav className={!visible ? "navbar" : ""}>
        <button
          type="button"
          className="nav-btn"
          onClick={() => show(!visible)}
        >
          {!visible ? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
        </button>
        <div>
          <h3 className="logo-title">Oceans and Trails</h3>
          <NavLink className="" to="/">
            {/* <img src={("../assets/Images/logo.png")} alt="logo" /> */}
          </NavLink>
          <div className="links nav-top">
            <NavLink to="/home" className="nav-link" onClick={() => show(!visible)}>
              <FaThLarge size={ICON_SIZE} />
              <span>Home</span>
            </NavLink>
            <NavLink to="/tours" className="nav-link" onClick={() => show(!visible)}>
              <FaChartBar size={ICON_SIZE} />
              <span>Tour </span>
            </NavLink>            
            {localStorage.getItem("token") ? (
              <NavLink to="/my_reservation" className="nav-link" onClick={() => show(!visible)}>
                <FaShoppingCart size={ICON_SIZE} />
                <span>My Reservations</span>
              </NavLink>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="links">
        {localStorage.getItem("token") ? (
            ''
          ) : (
            <NavLink to="/sign-up" className="nav-link" onClick={() => show(!visible)}>
            <FaSignOutAlt size={ICON_SIZE} />
            <span>
              <button className="signup" type="submit">
                Sign Up
              </button>
            </span>
          </NavLink>
            )}
              
            {localStorage.getItem("token") ? (
          <NavLink to="/Sign-out" className="nav-link">
            <FaSignOutAlt size={ICON_SIZE} />
            <span>
              <button className="logout" type="submit" onClick={handleLogout}>
                Logout
              </button>
            </span>
          </NavLink>
          ) : (
              ""
            )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
