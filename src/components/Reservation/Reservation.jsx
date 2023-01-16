import React from 'react'
import { useSelector } from 'react-redux'
import { removeItem } from '../../redux/reservations/reservationsSlice';
import { useDispatch } from 'react-redux';


const Reservation = () => {
const dispatch = useDispatch();
  const reservationShow = useSelector((state) => state.reservations.reservation);
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
                    <p>{res.tour_id}</p>
                    <p>{res.user_id}</p>
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
