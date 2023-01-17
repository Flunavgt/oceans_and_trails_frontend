import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { postReservation } from "../../redux/reservations/reservationsSlice";

const ReservationForm = () => {
    const dispatch = useDispatch();
    const [reservationData, setReservationData] = useState({
        startDate: "",
        endDate: "",
        tour_id: "",
        user_id: ""
    })

    const handleChange = (e) => {
        setReservationData({...reservationData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(postReservation(reservationData))
    }
    console.log(reservationData)

    return (
      <div className="wrapper">
        <form className="container" onSubmit={handleSubmit}>
          <h1 className="brand-title">Make a Reservation</h1>
          <div className="form-body">
            <div className="input-body">
              <input
                type="date"
                name="startDate"
                value={reservationData.startDate}
                onChange={handleChange}
              />
              <input
                type="date"
                name="endDate"
                value={reservationData.endDate}
                onChange={handleChange}
              />
              <input
                type="text"
                name="tour_id"
                value={reservationData.tour_id}
                onChange={handleChange}
                placeholder="Tour ID"
              />
              <input
                type="text"
                name="user_id"
                value={reservationData.user_id}
                onChange={handleChange}
                placeholder="User ID"
              />
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    );
}

export default ReservationForm;