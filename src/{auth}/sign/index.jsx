import React, { useState } from 'react';
import "../login/style.css"
import { auth } from '../../config/auth/config';
import { doCreateUserWithEmailAndPassword } from '../../config/auth/auth';


function Signup() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const showInput  = async (e) => {
    e.preventDefault();
    // if(user === "" ||  email === "" ){
    //   alert("please fill out these fields.")
    // }
    // else if (password.length < 8){
    //   alert("Ensure that password must be 8 letter long.")
    // }
    // else if (/^[\d!#$%^&*(),.?":{}|<>]/.test(user)){
    //   alert("User name can not be start with numbers or any other special character")
    // }
    if(!userLoggedIn) {
        await doCreateUserWithEmailAndPassword(email, password)
      




    //   async function auth(user){
    //     if (user) {
    //         setUser({...user});
    //         setUserLoggedIn(true);
    //     }
    //     else{
    //         setUser(false);
    //         setUserLoggedIn(false);
    //     }
    //     setLoading(false);
    //  }
    //  console.log("user Login")
     

    // console.log("userName: ", user)
    // console.log("Email: ", email)
    // console.log("Password: ", password)
  }
  }
  


  return (
    <div className="form-container">
    <h2>Sign Up</h2>
    <form onSubmit={showInput}>
      <div className="form-group">
        <label>Username</label>
        <input onChange={(e) => setUser(e.target.value)} type="text" placeholder="Enter your username" required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" required />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" required />
      </div>
      <button type="submit" className="btn">Sign Up</button>
    </form>
  </div>

  )
}


export default Signup