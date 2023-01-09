import React from "react";
import { useSelector } from "react-redux";

const Tour = () => {
  const tourShow = useSelector((state) => state.tours.tour);
  // const status = useSelector((state) => state.tours.status);

  return (
    <>
      {tourShow.map((tour) => {
        return (
          <div key={tour.id}>
            <div className="main">
              <div>
                <h2>Tour Name: {tour.tourName}</h2>
                <p>Description: {tour.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Tour;
