import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from '../{auth}/login/index';
import Signup from '../{auth}/sign/index';
import "../{auth}/login/style.css"


function Routs() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <nav>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Routs