import { useDispatch } from "react-redux";
import { useState } from "react";
import { postReservation } from "../../redux/reservations/reservationsSlice";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ReservationForm = () => {
    const userInfo = useSelector((state) => state.userInfo.user);
    console.log(userInfo)

    const { id } = useParams();
    console.log(id)
    
    const dispatch = useDispatch();
    const [reservationData, setReservationData] = useState({
        startDate: "",
        endDate: "",
        tour_id: "",
        user_id: userInfo.id,
    })

    // console.log(props.tourData)

    const handleChange = (e) => {
        setReservationData({...reservationData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(postReservation(reservationData))
        window.location.href = '/my_reservation'
    }
    console.log(reservationData)

    return (
        <div>
        
            <form onSubmit={handleSubmit}>
                <input type="date" name="startDate" value={reservationData.startDate} onChange={handleChange} />
                <input type="date" name="endDate" value={reservationData.endDate}  onChange={handleChange} />
                <input type="text" name="tour_id" value={reservationData.tour_id}  onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ReservationForm;