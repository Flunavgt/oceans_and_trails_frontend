import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TourDetails = () => {
  const { id } = useParams();
  const tourDetail = useSelector((state) => state.tours.tour);
  return (
    <div>
      {tourDetail.map((tour) => {
        if (tour.id === id) {
          return (
            <div key={tour.id}>
              <Link className="back" to="/tours">
                <p className="nav-back">← Back</p>
              </Link>
              <h1>{tour.tourName}</h1>
              <img src={tour.picture} />
              <p>{tour.description}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default TourDetails;
