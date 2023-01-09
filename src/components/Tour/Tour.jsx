import React from "react";
import { useSelector } from "react-redux";
import '../../styles/tour.css'

const Tour = () => {
  const tourShow = useSelector((state) => state.tours.tour);
  // const status = useSelector((state) => state.tours.status);

  return (
    <>
      <div className="container">
        {tourShow.map((tour) => {
          return (
            <div key={tour.id} className="card">
              <div className="imgBx">
                <img src={tour.picture} />
                {/* <img src="https://assets.codepen.io/4164355/shoes.png"/> */}
              </div>
              <div className="contentBx">
                <h2>{tour.tourName}</h2>
                <div class="description">
                  <h3>Description :</h3>
                  <span>{tour.description}</span>
                </div>
                <div class="hotel">
                  <h3>Hotel :{tour.hotel}</h3>
                </div>
                <a href="#">Price:$ {tour.price} </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tour;
