import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReservationForm from "../Reservation/ReservationForm";
import "../../styles/tour.css";

const TourDetails = () => {
  const { id } = useParams();

  const tourDetail = useSelector((state) => state.tours.tour);

  const tourData = tourDetail.filter((tour) => tour.id === parseInt(id));

  const pepito = parseInt(id);
  const handleReserve = () => {
    <ReservationForm tourData={tourData} />;
    window.location.href = "/reservation";
  };
  console.log(pepito);

  return (
    <div>
      <Link className="back text-link" to="/tours">
        <p className="nav-back">← Back</p>
      </Link>
      <div className="tour-detail">
        <h1>Tour Details</h1>
        {tourDetail.map((tour) => {
          if (tour.id === parseInt(id))
            return (
              <div key={tour.id}>
                <h1>{tour.tourName}</h1>
                <img src={tour.picture} className="tour-image" />
                <p>{tour.description}</p>
                <h3>Hotel: {tour.hotel}</h3>
                <h4>Price: ${tour.price}</h4>
              </div>
            );
        })}
      </div>
      {localStorage.getItem("token") ? (
        <Link to="/reservation" className="text-link" state={pepito}>
          <span className="reserve-link">Reserve Tour</span>
        </Link>
      ) : (
        <a href="\sign-in">
          <div className="testingBTN">
            {" "}
            Click here to Log in and reserve a Tour{" "}
          </div>
        </a>
      )}
    </div>
  );
};

export default TourDetails;
