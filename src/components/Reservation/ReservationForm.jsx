import { useDispatch } from "react-redux";
import { useState } from "react";
import { postReservation } from "../../redux/reservations/reservationsSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const ReservationForm = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [reservationData, setReservationData] = useState({
        startDate: "",
        endDate: "",
        tour_id: "",
        user_id: "",
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
            <form onSubmit={handleSubmit}>
                <input type="date" name="startDate" value={reservationData.startDate} onChange={handleChange} />
                <input type="date" name="endDate" value={reservationData.endDate}  onChange={handleChange} />
                <input type="text" name="tour_id" value={reservationData.tour_id} onChange={handleChange} />
                <input type="text" name="user_id" value={reservationData.user_id}  onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ReservationForm;