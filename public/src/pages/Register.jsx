import React from 'react'

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
        
         </form>
        </div>
  );
}
