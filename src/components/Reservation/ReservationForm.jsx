import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { postReservation } from "../../redux/reservations/reservationsSlice";

const ReservationForm = () => {
    const dispatch = useDispatch();
    const [reservationData, setReservationData] = useState('')

    const handleChange = (e) => {
        setReservationData(...reservationData, e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const reservation = {
            reservationData
        }
        dispatch(postReservation(reservation))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="date" name="startDate" onChange={handleChange} />
                <input type="date" name="endDate" onChange={handleChange} />
                <input type="text" name="tourId" onChange={handleChange} />
                <input type="text" name="userId" onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ReservationForm;