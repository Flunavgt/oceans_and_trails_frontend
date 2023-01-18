import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { removeItem } from "../../redux/reservations/reservationsSlice";
import { useDispatch } from "react-redux";
import { deleteReservation } from "../../redux/reservations/reservationsSlice";
import '../../styles/reservations.css'

const Reservation = () => {
  const dispatch = useDispatch();
  const reservationShow = useSelector(
    (state) => state.reservations.reservation
  );
  const tourInformation = useSelector((state) => state.tours.tour);
  console.log(reservationShow);
  const handleClick = () => {
    window.location.href = "/reservationForm";
  };
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this reservation?")) {
      dispatch(deleteReservation(id));
      dispatch(removeItem(id));
      window.alert("Reservation Deleted");
    }
    window.location.reload();
  };
  return (
    <div>
      
      <h1>Reservation</h1>
      <div className="res-container">
        <div className="title-main">
          <h2>Latest Reservation</h2>
          <h4>Please Select from the List of Reservations</h4>
          <span className="dot">..........</span>
          {reservationShow.map((res) => {
            return (
              <div key={res.id} className="card">
                <div className="imgBx">
                  {tourInformation.map((tour) => {
                    if (tour.id === res.tour_id) {
                      return <p key={tour.id}>Tour Name: {tour.tourName}</p>;
                    }
                  })}
                  <p>{res.tourName}</p>
                  <p>
                    Reservation Start Date:{" "}
                    {moment(res.startDate).format("DD/MM/YYYY")}
                  </p>
                  <p>
                    Reservation End Date:{" "}
                    {moment(res.endDate).format("DD/MM/YYYY")}
                  </p>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => {
                    handleDelete(res.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Reservation;
