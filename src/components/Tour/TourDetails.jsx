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
              <img src={tour.picture} className="tour-image"/>
              <p>{tour.description}</p>
              
            </div>
          );

      })}
    
    </div>
    {localStorage.getItem("token") ? (
      <Link to="/reservation" className="text-link" state= { pepito }>
      <span className="reserve-link">Reserve Tour</span>
      </Link>
      ) : ( <a href="\sign-in"><div className="testingBTN"> Click here to Log in and reserve a Tour </div></a>)
      } 
    </div>
  );
};

export default TourDetails;
