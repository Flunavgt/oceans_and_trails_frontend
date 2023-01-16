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
        <div>
            <h1 className="form-title">Make your reservation</h1>
            <form className="form-body" onSubmit={handleSubmit}>
                <input type="date" name="startDate" value={reservationData.startDate} onChange={handleChange} /><br/>
                <input type="date" name="endDate" value={reservationData.endDate}  onChange={handleChange} /><br/>
                <input type="text" name="tour_id" value={reservationData.tour_id} onChange={handleChange} /><br/>
                <input type="text" name="user_id" value={reservationData.user_id}  onChange={handleChange} /><br/>
                <input className="sign-in" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ReservationForm;