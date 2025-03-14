import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import axios from 'axios';

export default function Login() {
  const navigate=useNavigate();
  const[values,setValues]=useState({
    email:'',
    password:''
  });

  const generateError=(err)=>{               //verify  the order of the curly braces
   console.log("Toast error triggered:", err); // ✅ Debug log
   toast.error(err,
   {position:"bottom-right",
     autoClose:5000,}); }      //This autocloses the toast after 5 seconds

  const handleSubmit = async (e)=>{    
   e.preventDefault();
   
console.log("handleSubmit triggered"); // ✅ Debug log
if (!values.email || !values.password) {
generateError("All fields are required!");
return;
  }
      
     
     try{
     const {data} = await axios.post('http://localhost:4000/register',{
        ...values,
       },{
       withCredentials:true
        });
        console.log("API Response:", data); // ✅ Log full backend response

       
       if(data){
         if(data.errors){
           const {email,password}=data.errors;
           console.log("Error fields:", data.errors); // ✅ Debugging API errors
           if(email) generateError(email);
           else if(password) generateError(password);
         }
         else{
           navigate("/");
         }
       }

   }catch(error){
     console.log(error);
   }
  };     
   
  return (
    <div className="container">
    <h2> Login Account </h2>
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
        
        <button type='submit'>Login</button>
        <span>Don't have an account? <Link to="/register">Register</Link>
        
        </span>
         </form>
         <ToastContainer></ToastContainer>
        </div>
  );
}