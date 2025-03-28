import React,{useState} from 'react'
import "../css-files/LoginDetails.css"

export default function LoginDetails() {
    const [isLoggedIn,setIsLoggedIn]=useState(true);
  return (
    <div className="main-login-details-container">
        <div className={isLoggedIn?"login-details-container hide":"login-details-container"}>
            <button>Register</button>
            <button>Login</button>
        </div>
        <div className={!isLoggedIn?"profile-img hide":"profile-img"}>
            <img src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <p>Daniel</p>
        </div>
    </div>
  )
}
