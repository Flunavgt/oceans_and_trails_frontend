import React from "react";
import {
  FaAngleRight,
  FaAngleLeft,
  FaChartBar,
  FaThLarge,
  FaShoppingCart,
  FaCog,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../../styles/navbar.css";

const ICON_SIZE = 20;

const handleLogout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
  window.location.href = "/";
};

function Navbar({ visible, show }) {
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
          <h3 className="logo-title">Oceans</h3>
          <NavLink className="" to="/">
            {/* <img src={("../assets/Images/logo.png")} alt="logo" /> */}
          </NavLink>
          <div className="links nav-top">
            <NavLink to="/home" className="nav-link">
              <FaThLarge size={ICON_SIZE} />
              <span>Home</span>
            </NavLink>
            <NavLink to="/tour" className="nav-link">
              <FaChartBar size={ICON_SIZE} />
              <span>Tour </span>
            </NavLink>
            <NavLink to="/reservation" className="nav-link">
              <FaShoppingCart size={ICON_SIZE} />
              <span>Reservation</span>
            </NavLink>
          </div>
        </div>

        <div className="links">
          <NavLink to="/settings" className="nav-link">
            <FaCog size={ICON_SIZE} />
            <span>Profile</span>
          </NavLink>
          <NavLink to="/Sign-out" className="nav-link">
            <FaSignOutAlt size={ICON_SIZE} />
            <span><button className="logout" type="submit" onClick={handleLogout}>Logout</button></span>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
