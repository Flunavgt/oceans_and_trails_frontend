import React from "react";

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
