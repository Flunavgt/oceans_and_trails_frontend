import React, {useState} from 'react';
import '../../styles/registrationForm.css';

function RegistrationForm() {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "Name"){
            seName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        let obj = {
            firstName : firstName,
            email:email,
            password:password,
            confirmPassword:confirmPassword,
        }       
    const newPostKey = push(child(ref(database), 'posts')).key;
    const updates = {};
    updates['/' + newPostKey] = obj
    return update(ref(database), updates);
    }

    return(
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
            <div class="footer">
                <button type="submit" class="register-btn">Register</button>
            </div>
        </div>
      </div>
    )       
}
export default RegistrationForm;