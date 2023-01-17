import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReservationForm from "../Reservation/ReservationForm";

const TourDetails = () => {
  const { id } = useParams();
  const tourDetail = useSelector((state) => state.tours.tour);
  console.log(tourDetail);

  const tourData = tourDetail.filter((tour) => tour.id === parseInt(id));
  console.log(tourData);

  const handleReserve = () => {
    <ReservationForm tourData={tourData} />;
    window.location.href = "/reservation";
  };

  return (
    <div>
      <h1>Tour Details</h1>
      {tourDetail.map((tour) => {
        if (tour.id === parseInt(id))
          return (
            <div key={tour.id}>
              <Link className="back" to="/tours">
                <p className="nav-back">← Back</p>
              </Link>
              <h1>{tour.tourName}</h1>
              <img src={tour.picture} />
              <p>{tour.description}</p>
              <Link to="/reservation">
              <span>Reserve Tour</span>
              </Link>
            </div>
          );
        
      })}
      
    </div>
  );
};

export default TourDetails;
