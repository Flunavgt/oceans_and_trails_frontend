import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment';
import { removeItem } from '../../redux/reservations/reservationsSlice';
import { useDispatch } from 'react-redux';
import {deleteReservation} from '../../redux/reservations/reservationsSlice';


const Reservation = () => {
const dispatch = useDispatch();
  const reservationShow = useSelector((state) => state.reservations.reservation);
  const tourInformation = useSelector((state) => state.tours.tour);
  console.log(reservationShow);

  const handleClick = () => {
    window.location.href = "/reservationForm"
  }


  return (
   <div>
    <button className="btn btn-primary" onClick={handleClick}>Add Reservation</button>
      <h1>Reservation</h1>
      <div className="container">
        <div className="title-main">
          <h2>Latest Reservation</h2>
          <h4>Please Select from the List of Reservations</h4>
          <span className="dot">..........</span>
          {
            reservationShow.map((res) => {
              return (
                <div key={res.id} className="card">
                  <div className="imgBx">
                    {
                      tourInformation.map((tour) => {
                        if (tour.id === res.tour_id) {
                          return (
                            <p>Tour Name: {tour.tourName}</p>
                          )
                        }
                    }
                    )}
                    <p>{res.tourName}</p>
                    <p>Reservation Start Date: {moment((res.startDate).time).format('DD/MM/YYYY')}</p>
                    <p>Reservation End Date: {moment((res.endDate).time).format('DD/MM/YYYY')}</p>
                  </div>
                  <button onClick={()=>{dispatch(deleteReservation(res.id))}}>Delete Res</button>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Reservation;
