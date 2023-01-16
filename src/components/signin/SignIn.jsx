import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { postSignIn } from "../../redux/reducer/registration";
import { useIsAuthenticated } from "../../redux/hooks";
import '../../styles/registrationForm.css';

function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const authenticated = useIsAuthenticated();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    if (loading) {
      return;
    }
    setLoading(true);
    dispatch(postSignIn(user))
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  if (authenticated) {
    return <Navigate to="/tours" />;
  }

  return (
    <div>
      <form className="wrapper" onSubmit={handleSubmit}>
        <div className="container">
          <div className="form">
            <h1 className="form-title">Log in</h1>
            <div className="form-body">
              <input
                placeholder="Email"
                type="email"
                name="email"
                value={email}
                className="input"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                className="input"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              /><br/>
              <input className="sign-in" type="submit" value="Sign In" />
              <div>
                <Link className="register-link" to="/sign-up">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
