import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../styles/tour.css";

const styleName = {
  marginRight: '10px',
  color:'tomato',
  fontSize:'24px',
  fontWeight:'bold',
}

const Tour = () => {
  const tourShow = useSelector((state) => state.tours.tour);
  const userInfo = useSelector((state) => state.userInfo.user);

  localStorage.setItem("user_id", userInfo.id)
  const fullName = userInfo.name[0].toUpperCase() + userInfo.name.slice(1);

  return (
    <>

      <div className="tour-container">
        <span style={styleName}>Welcome {fullName}</span>

        <div className="title-main">
          <h2>Latest Tours</h2>
          <h4>Please Select from the List of Tours</h4>
          <span className="dot">..........</span>
        </div>
        <div className="tour-wrapper">
          {tourShow.map((tour) => {
            return (
              <Link key={tour.id} to={`${tour.id}`} className="card">
                <div className="imgBx">
                  <img src={tour.picture} />
                </div>
                <div className="content">
                  <h4>{tour.tourName}</h4>
                  <span className="dot">..........</span>
                  <div className="description">
                    <p>{tour.description}</p>
                  </div>
                  <div className="icons">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tour;
