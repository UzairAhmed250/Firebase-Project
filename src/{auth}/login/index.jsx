import React, { useState } from 'react'
import { doSignInWithEmailAndPassword } from '../../config/auth/auth'
import { useAuth } from '../../context/authcontext'
import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    // const { userLoggedIn } =useAuth()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      const [userLoggedIn, setUserLoggedIn] = useState(false);
    
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const Navigate = useNavigate();

    const onSubmit = async (e) => {
      e.preventDefault()
      if(!isSigningIn) {
        setIsSigningIn(true)
        await doSignInWithEmailAndPassword(email, password)
      }
    } 

  return (
    <div className="form-container">
      {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
      <h2>Login</h2>
      <form 
      onSubmit={onSubmit}
      >
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button type="submit"
          disabled={isSigningIn}
          className="btn">{isSigningIn ? 'Loging In...' : 'Log In'}</button>
          
      </form>
    </div>
  )
}

export default Login