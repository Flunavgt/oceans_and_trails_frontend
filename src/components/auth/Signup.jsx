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
      <form onSubmit={handleSubmit}>
        <div className="formCont">
          <div className="form">
            <h1 className="form-title">SignUp</h1>
            <div className="form-body">
              <div className="username">
                <input
                  type="text"
                  name="name"
                  value={credentials.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
              </div>
              <div className="email">
                <input
                  type="text"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
              <div className="password">
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
              </div>
              <div className="confirm-password">
                <input
                  type="password"
                  name="password_confirmation"
                  value={credentials.password_confirmation}
                  onChange={handleChange}
                  placeholder="Password Confirmation"
                />
              </div>
            </div>
            <div className="footer">
              <input type="submit" value="Sign Up" className="register-btn" />
            </div>
          </div>
        </div>
      </form>
    );
}

export default Signup;
