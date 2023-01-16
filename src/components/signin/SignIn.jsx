import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { postSignIn } from "../../redux/reducer/registration";
import { getProfile } from "../../redux/reducer/registration";
import { useIsAuthenticated } from "../../redux/hooks";

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
            <h1 className="brand-title">Login in</h1>
            <div className="form-body">
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
              <input className="submit-login" type="submit" value="Sign In" />
              <div>
                Not a member? <Link to="/sign-up">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
