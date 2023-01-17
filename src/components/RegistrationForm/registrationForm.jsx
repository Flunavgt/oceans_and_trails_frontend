import React, {useState} from 'react';
import axios from 'axios';
import { setAuthToken } from '../setAuthToken()';
import '../../styles/registrationForm.css';

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
    
      axios.post("https://oceans-api.onrender.com/api/v1", loginPayload)
        .then(response => {
          //get token from response
          const token  =  response.data.token;
    
          //set JWT token to local
          localStorage.setItem("token", token);
    
          //set token to axios common header
          setAuthToken(token);
     
   //redirect user to home page
          window.location.hostname
        })
        .catch(err => console.log(err));

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
                className="sign-in">Register</button>
            </div>
        </div>
      </div>
    </form>
    )       
};

export default RegistrationForm;