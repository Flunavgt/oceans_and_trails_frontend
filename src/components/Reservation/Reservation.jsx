import React from "react";
import { useSelector } from "react-redux";

const Reservation = () => {
  const reservationShow = useSelector(
    (state) => state.reservations.reservation
  );
  // console.log(reservationShow);
  return (
    <div>
      <h1>My Reservation</h1>
    </div>
  );
};

export default Reservation;
