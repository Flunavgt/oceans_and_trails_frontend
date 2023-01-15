import { useDispatch } from "react-redux";
import { useState } from "react";
// import { setReservation } from "../../redux/actions/reservation";


const ReservationForm = () => {
    const [reservation, setReservation] = useState({startDate: "", endDate: "", tour_id: "", user_id: ""});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setReservation({...reservation, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setReservation(reservation));
        window.location.href = "/reservation";
    }

    console.log(reservation);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Make a Reservation</h1>
                <input type="date" name="startDate" value={reservation.startDate} onChange={handleChange} placeholder="Start Date" />
                <input type="date" name="endDate" value={reservation.endDate} onChange={handleChange} placeholder="End Date" />
                <input type="text" name="tour_id" value={reservation.tour_id} onChange={handleChange} placeholder="Tour ID" />
                <input type="text" name="user_id" value={reservation.user_id} onChange={handleChange} placeholder="User ID" />
                <input type="submit" value="Make Reservation" />
            </form>
        </div>
    )
}

export default ReservationForm;