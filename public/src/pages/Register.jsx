import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';

export default function Register() {
             const[values,setValues]=useState({
               email:'',
               password:''
             });
  
   const handleSubmit = (e)=>{    
    e.preventDefault();
   };      
  return (
    <div className="container">
    <h2> Register Account </h2>
    <form onSubmit={(e)=>handleSubmit(e)}> 
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' placeholder="Email"  onChange={(e)=>setValues({ ...values, [e.target.name]: e.target.value })}
        />
        </div>
        <div> 
          <label htmlFor='password'>Password</label>
          <input
           type='password' name='password' id='password' placeholder="Password"  onChange={(e)=>setValues({ ...values, [e.target.name]: e.target.value })}/>
        </div>
        
        <button type='submit'>Register</button>
        <span>Already have an account? <Link to="/login">Login</Link>
        
        </span>
         </form>
         <ToastContainer></ToastContainer>
        </div>
  );
}
