/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { postSignUp } from '../../redux/reducer/registration';

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [confirm_password, setPasswordConfirmation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      confirm_password,
    };

    dispatch(postSignUp(user));
    navigate('/sign-in');
  };
  return (
    <div className="form">
      <div className="login-image" />
      <div>
        <h1 className="form-title">Sign Up</h1>
        <form className="form-body" onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            type="text"
            name="name"
            className="form_input"
            value={name}
            onChange={(e) => { setName(e.target.value); }}
          />
          <input
            placeholder="Email"
            type="email"
            name="email"
            className="form_input"
            value={email}
            onChange={(e) => { setEmail(e.target.value); }}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            className="form_input"
            value={password}
            onChange={(e) => { setpassword(e.target.value); }}
          />
          <input
            placeholder="Password Confirmation"
            type="password"
            name="password_confirmation"
            className="form_input"
            value={confirm_password}
            onChange={(e) => { setPasswordConfirmation(e.target.value); }}
          /><br/>
          <input className="sign-in" type="submit" value="Sign Up" />
          <div>
            <Link className='register-link' to="/sign-in">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
