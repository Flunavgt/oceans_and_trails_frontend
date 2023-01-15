import React from "react";
import { useSelector } from "react-redux";
import "../../styles/tour.css";

const Tour = () => {
  const tourShow = useSelector((state) => state.tours.tour);
  // const status = useSelector((state) => state.tours.status);
  console.log(tourShow);

  return (
    <>
      <div className="container">
        
        <div className="title-main">
          <h2>Latest Tours</h2>
          <h4>Please Select from the List of Tours</h4>
          <span className="dot">..........</span>
        </div>
        <div className="tour-wrapper">
          {tourShow.map((tour) => {
            return (
              <div key={tour.id} className="card">
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tour;
