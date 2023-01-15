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
          <div className="formCont">
            <div className="form">
              <h1 className="form-title">Login in</h1>
              <div className="form-body">
                <div className="email">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="form__input"
                  />
                </div>
                <div className="email">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="form__input"
                  />
                </div>
                <div className="footer">
                  <input type="submit" value="Login" className="register-btn" />
                  <br />
                  <a href="/signup" className="register-link">
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
}

export default Login;