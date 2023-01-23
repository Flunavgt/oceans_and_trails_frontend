import React from "react";
import "../../styles/splash.css";


const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/";
};

const Splash = () => {
  return (
    <div className="splash">
      <div className="content">
        <h1 className="splashTitle">Oceans & Trails</h1>
        <h3 className="splashSubTitle">Explore the world with us</h3>
        <div className="splash-content">
          <h5 className="paragraph">
          Take it all in! Travel Talk offers 4 and 5-star accommodations; 
          air-conditioned buses and various other modes of transport depending on the tour so, 
          even though you may be a backpacker, you’re not treated like one.
          </h5>
        </div>
        {localStorage.getItem("token") ? (
          ""
        ) : (
          <a href="\sign-in">
            <button className="splashButton">Tour with us</button>
          </a>
        )}
        {localStorage.getItem("token") ? (
          <a href="\sign-in">
            <button className="splashButton">Tour with us</button>
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Splash;
