import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [user, setUser] = useState({
    name: 'tester1',
    email: 'tester1@tester.com',
    password: 'tester1',
});
const loginPayload = {
    email: 'tester1@tester.com',
    password: 'tester1',
  }
  const navigate = useNavigate();
  
  const signIn = async () => {
    try {
      setIsLoading(true);
      const response = await axios({
        method: 'post',
        url: 'https://oceans-api.onrender.com/api/v1/sessions',
        data: {
          email,
          password
        }
      });
      if (!response?.data?.token) {
        console.log('Something went wrong during signing in: ', response);
        return;
      }
      storeTokenInLocalStorage(response.data.token);
      navigate(APP_ROUTES.DASHBOARD)
    }
    catch (err) {
      console.log('Some error occured during signing in: ', err);
    }
    finally {
      setIsLoading(false);
    }
  };
  return(
    <div className='formCont'>
       <div className="form">
           <h1 className='form-title'>Sign in</h1>
           <div className="form-body">
               <div className="email">
                   <input  type="email" id="email" className="form__input" placeholder="Email"/>
               </div>
               <div className="password">
                   <input className="form__input" type="password"  id="password" placeholder="Password"/>
               </div>
           </div>
           <div className="footer">
               <button type="submit" onClick={() => setUser(user, console.log('did it'))} 
               className="register-btn">Sign in</button>
           </div>
       </div>
     </div>
   )       
}

export default SignIn;
