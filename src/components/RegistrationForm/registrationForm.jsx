import React, {useState} from 'react';
import axios from 'axios';
import '../../styles/registrationForm.css';
import { setAuthToken } from '../setAuthToken()';

function RegistrationForm() {
    const [user, setUser] = useState({
        name: 'tester1',
        email: 'tester1@tester.com',
        password: 'tester1',
    });
    const loginPayload = {
        email: 'tester1@tester.com',
        password: 'tester1',
      }
    
      axios
        .post("https://oceans-api.onrender.com/api/v1", loginPayload)
        .then((response) => {
          //get token from response
          const token = response.data.token;

          //set JWT token to local
          localStorage.setItem("token", token);

          //set token to axios common header
          setAuthToken(token);

          //redirect user to home page
          window.location.hostname;
        })
        .catch((error) => {
          if (error.response) {
            // status code out of the range of 2xx
            console.log("Data :", error.response.data);
            console.log("Status :" + error.response.status);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Error on setting up the request
            console.log("Error", error.message);
          }
        });



        const handleSubmit = (event) => {
                // Prevent page reload
                event.preventDefault();
              };
        
    return(
    <form onSubmit={handleSubmit}>
     <div className='formCont'>
        <div className="form">
            <h1 className='form-title'>Registration</h1>
            <div className="form-body">
                <div className="username">
                    <input className="form__input" type="text" id="firstName" placeholder="Name"/>
                </div>
                <div className="email">
                    <input  type="email" id="email" className="form__input" placeholder="Email"/>
                </div>
                <div className="password">
                    <input className="form__input" type="password"  id="password" placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
                </div>
            </div>
            <div className="footer">
                <button type="submit" onClick={() => setUser(user)} 
                className="register-btn">Register</button>
            </div>
        </div>
      </div>
    </form>
    )       
};

export default RegistrationForm;