import { loginUser } from "../../redux/actions/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
    const [credentials, setCredentials] = useState({email: "", password: ""});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(credentials));
        window.location.href = "/tour";
    }

    console.log(credentials);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" value={credentials.email} onChange={handleChange} placeholder="Email" />
                <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;