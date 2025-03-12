import React from 'react'
import { Link } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';

export default function register() {
  return (
    <div className="container">
    <h2> Register Account </h2>
    <form> 
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' placeholder="Email"/>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' placeholder="Password"/>
        </div>
        
        <button type='submit'>Register</button>
        <span>Already have an account? <Link to="/login">Login</Link>
        
        </span>
         </form>
         <ToastContainer></ToastContainer>
        </div>
  );
}
