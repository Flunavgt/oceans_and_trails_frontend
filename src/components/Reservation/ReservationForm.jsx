import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { postReservation } from "../../redux/reservations/reservationsSlice";

import { Navigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ReservationForm = () => {
  const { id } = useParams();
  const {state}= useLocation();
    const userInfo = useSelector((state) => state.userInfo.user);
    const dispatch = useDispatch();
    const [reservationData, setReservationData] = useState({
        startDate: "",
        endDate: "",
        tour_id: state,
        user_id: userInfo.id,
    })

    const handleChange = (e) => {
        setReservationData({...reservationData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(postReservation(reservationData))
        window.location.href = '/my_reservation'
    }
    
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

              <input type="submit" value="Submit" />
              <Link className="back text-link" to="/tours">
                <p className="nav-back">← Back</p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );


}

export default ReservationForm;