import React from 'react'
import { useSelector } from 'react-redux'


const Reservation = () => {

  const reservationShow = useSelector((state) => state.reservations.reservation)
  console.log(reservationShow)

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
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Reservation