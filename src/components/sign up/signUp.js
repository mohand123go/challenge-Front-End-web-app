import React from 'react';
import './signUp.css'
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
const SignUp = ()=>{
    return(
      <div className='login'>
          <div className="login__contianer">
          <h1 className='Login__header'>Welcome to challenge </h1>
          <form className='form-style'>
             

              <div className="input-field">
                <EmailIcon className='input-field_icon'/>
                  <input className='input-field_input' type='text' placeholder="Enter Your Email" />
              </div>

              <div className="input-field">
                <LockIcon className='input-field_icon'/>
                  <input className='input-field_input' type='text' placeholder="Enter Your Email" />
              </div>

           

              <div className="input-field">
                    <input className="btn-Register" type='submit' value='Register'/>
                </div>

          </form>
          </div>
      </div>
    )
}

export default SignUp 