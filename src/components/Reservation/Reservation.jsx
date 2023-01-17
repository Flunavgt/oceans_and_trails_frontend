import React from 'react'
import { useSelector } from 'react-redux'
import { removeItem } from '../../redux/reservations/reservationsSlice';
import { useDispatch } from 'react-redux';
import postReservation from '../../redux/reservations/reservationsSlice';
import '../../styles/reservations.css'

const Reservation = () => {
const dispatch = useDispatch();
  const reservationShow = useSelector((state) => state.reservations.reservation);
  console.log(reservationShow);

  const handleClick = () => {
    window.location.href = "/reservationForm"
  }


  return (
   <div className='container'>
    <button className="btn btn-primary" onClick={handleClick}>Add Reservation</button>
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
                    <i class="fa-solid fa-ship"></i>
                    <p>{res.startDate}</p>
                    <p>{res.endDate}</p>
                  </div>
                  <button onClick={()=>{dispatch(removeItem(res.id))}}>Delete</button>
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
