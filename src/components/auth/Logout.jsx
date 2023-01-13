import { logoutUser } from "../../redux/actions/auth";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";

const Logout = () => {
    const dispatch = useDispatch();
    // const history = useHistory();
   

    const handleClick = () => {
        dispatch(logoutUser());
        //  history.push("/");
        window.location.href = "/";
    }

    return (
        <div>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

export default Logout;