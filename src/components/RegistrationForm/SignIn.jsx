import React from 'react';
import { useState } from 'react';

async function loginUser(credentials) {
  return fetch('https://oceans-api.onrender.com/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
 
  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password
    });
    if ('token' in response) {
      "Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      }
      .then((value) => {
        localStorage.setItem('token', response['token']);
        localStorage.setItem('user', JSON.stringify(response['user']));
        window.location.href = "/home";
      });
    } else {
      "Failed", response.message, "error";
    }
  }

  return(
    <form onSubmit={handleSubmit}>   
    <div className='formCont'>
       <div className="form">
           <h1 className='form-title'>Sign in</h1>
           <div className="form-body">
               <div className="email">
                   <input  type="email" id="email" className="form__input" placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                    />
               </div>
               <div className="password">
                   <input className="form__input" type="password"  id="password" placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                    />
               </div>
           </div>
           <div className="footer">
               <button type="submit" onClick={() => console.log('did it')} 
               className="register-btn">Sign in</button><br/>
               <a href="/registration" className='register-link'>Register</a>
           </div>
       </div>
     </div>
    </form>
   )       
}

export default SignIn;
