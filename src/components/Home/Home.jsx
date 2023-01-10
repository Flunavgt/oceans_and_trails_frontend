import React from "react";
import "../../styles/splash.css";

const Splash = () => {
  return (
    <div className='splash'>
        <div className='splashNav'>
          <i className='fa-solid fa-bars' class="fa-solid fa-bars"></i>
          <i className='fa-solid fa-glass' class="fa-solid fa-magnifying-glass"></i>
        </div>
        <h1 className='splashTitle'>Oceans & Trails</h1>
        <img className='splashCruise' src="src\assets\splashCruise.jpg" alt="cruise img" />
        <button className='splashButton'>Sign in</button>
    </div>
  )
}

export default Splash
