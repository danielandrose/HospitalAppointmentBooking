import React, { useState, useEffect, useRef } from 'react'
import "../css-files/LoginDetails.css"
import LoginAndRegistrationForm from './rightSection/LoginAndRegistrationForm';

export default function LoginDetails() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false)
  const [name,setName]=useState(false);


  function changeLoggedIn(value){
    console.log(value)
    setName(value)
    setIsLoggedIn(!isLoggedIn)
  }

  function handleRegisterClick() {
    console.log("Close got clicked")
    setOpen(!open);
  }


  return (
    <div>
      <div className="main-login-details-container">
        <div className={isLoggedIn==false ? "login-details-container" : "hide"}>
          <button onClick={handleRegisterClick}>Register</button>
          <button onClick={handleRegisterClick}>Login</button>
        </div>
        <div className={isLoggedIn==true ? "profile-img" : "hide"}>
          <img src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <p>{name}</p>
        </div>
      </div>
      <div className={open ? "open" : "close"}>
        <LoginAndRegistrationForm handleRegisterClick={handleRegisterClick} changeLoggedIn={changeLoggedIn}/>
      </div>
    </div>
  )
}
