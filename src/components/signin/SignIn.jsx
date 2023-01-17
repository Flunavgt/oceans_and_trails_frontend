import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { postSignIn } from "../../redux/reducer/registration";
import { useIsAuthenticated } from "../../redux/hooks";
import "../../styles/signIn.css";

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
    <div className="wrapper">
      <form className="container" onSubmit={handleSubmit}>        
          <h1 className="brand-title">Login</h1>
          <div className="form-body">
            <div className="input-body">
              <label>EMAIL</label>
              <input
                placeholder="Email"
                type="email"
                name="email"
                value={email}
                className="input-box"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="input-body">
              <label>PASSWORD</label>
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                className="input-box"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <input className="submit-login" type="submit" value="Sign In" />
            <div>
              Not a member? <Link to="/sign-up">Sign up</Link>
            </div>
          </div>
      </form>
    </div>
  );
}

export default SignIn;
