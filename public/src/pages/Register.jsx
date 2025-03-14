import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import axios from 'axios';

export default function Register() {
             const[values,setValues]=useState({
               email:'',
               password:''
             });
  
             const handleSubmit = async (e)=>{    
              e.preventDefault();
              try{
                const {data} = await axios.post('http://localhost:4000/register',{
                   ...values,
                  },{
                  withCredentials:true
                   });
                  console.log(data);
                  if(data){
                    if(data.errors){}
                    else{}
                  }
          
              }catch(error){
                console.log(error);
              }
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






// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Register = () => {
//     const [values, setValues] = useState({
//         email: "",
//         password: "",
//     });

//     const handleChange = (e) => {
//         setValues({ ...values, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const { data } = await axios.post("http://localhost:4000/register", values, {
//                 withCredentials: true, // Important for handling cookies
//             });

//             console.log(data);

//             if (data && data.created) {
//                 toast.success("Registration successful!");
//             } else {
//                 toast.error("Registration failed!");
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error("Error registering user!");
//         }
//     };

//     return (
//         <div>
//             <h2>Register Account</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={values.email}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={values.password}
//                     onChange={handleChange}
//                     required
//                 />
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };

// export default Register;










