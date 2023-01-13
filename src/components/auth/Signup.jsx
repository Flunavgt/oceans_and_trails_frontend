import { connect } from "react-redux";
import { signupUser } from "../../redux/actions/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Signup = () => {
    const [credentials, setCredentials] = useState({name: "", email: "", password: "", password_confirmation: ""});
    const dispatch = useDispatch();

    const handleChange = (e) => {
       setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signupUser(credentials));
        window.location.href = '/signin';
    }

    console.log(credentials);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={credentials.name} onChange={handleChange} placeholder="Name" />
                <input type="text" name="email" value={credentials.email} onChange={handleChange} placeholder="Email" />
                <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" />
                <input type="password" name="password_confirmation" value={credentials.password_confirmation} onChange={handleChange} placeholder="Password Confirmation" />
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    )
}

export default Signup;
