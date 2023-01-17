import React from "react";
import "../../styles/splash.css";

const Splash = () => {
  return (
    <div className="splash">
      <div className="splashNav">
        <i className="fa-solid fa-glass fa-solid fa-magnifying-glass"></i>
      </div>
      <div className='content'>
        <h1 className="splashTitle">Oceans & Trails</h1>
        <h3 className="splashSubTitle">Explore the world with us</h3>
        <div className="splash-content">
          <h5 className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex
            necessitatibus enim quas eligendi suscipit assumenda illum quia
            accusantium sint.
          </h5>
        </div>

        <a href="\sign-in">
          <button className="splashButton">Sign in</button>
        </a>
      </div>
    </div>
  );
};

export default Splash;
