import React, { useState } from 'react'
import "./loginAndRegistration.css"
import axios from 'axios'
import { useUser } from '../../UserContext';
import { updateUserID } from '../../slices/userIdSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const databaseLink = "http://localhost:5000/users";

export default function LoginAndRegistrationForm(props) {
    const [logORreg, setLogORreg] = useState("login");
    const dispatch=useDispatch()

    const userID = useSelector((state) => state.userId);  // Correct key name
    console.log("Current Redux userID:", userID);

    const [userDetails, setUserDetails] = useState({
        name: "",
        password: "",
        confirmPassword: ""
    })

    const { user, setUser } = useUser();

    function handleDetailsChange(event) {
        const { name, value } = event.target;
        setUserDetails(prev => ({
            ...prev,
            [name]: value
        }));
    }

    async function submitButtonClick() {
        if (logORreg === "register") {
            if (userDetails.password !== userDetails.confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            try {
                const response = await axios.post(databaseLink, {
                    name: userDetails.name,
                    password: userDetails.password
                });

                console.log("User added successfully:", response.data);
                console.log("Full response:", response); // Check what response looks like
                console.log("Extracted ID:", response.data._id); // Check if ID exists

                props.handleRegisterClick();
                props.changeLoggedIn(userDetails.name);
                setUser(response.data._id);
                dispatch(updateUserID(response.data._id))
                alert("User registered successfully!");
            } catch (err) {
                if (err.response && err.response.status === 400) {
                    alert("Username is already taken. Please choose a different name.");
                } else {
                    alert("Error registering user. Please try again.");
                }
            }
        }
        else if (logORreg === "login") {
            // Login Logic
            try {
                const response = await axios.post(`${databaseLink}/login`, userDetails);

                console.log("User added successfully:", response.data);
                console.log("Full response:", response); // Check what response looks like
                console.log("Extracted ID:", response.data._id); // Check if ID exists

                props.handleRegisterClick();
                props.changeLoggedIn(response.data.name);
                setUser(response.data._id);
                dispatch(updateUserID(response.data._id));  

                console.log("Current Redux userID:", userID);

            } catch (err) {
                if (err.response && err.response.status === 404) {
                    alert("User not found. Please register first.");
                } else if (err.response && err.response.status === 401) {
                    alert("Incorrect password. Try again.");
                } else {
                    alert("Error logging in. Please try again.");
                }
            }
        }
    }

    return (
        <div className='main-loginAndRegistration'>
            <div className='sub-loginAndRegistration'>
                <div className="change-options">
                    <button onClick={() => setLogORreg("login")}>Login</button>
                    <button onClick={() => setLogORreg("register")}>Registration</button>
                </div>
                <div className={logORreg === 'login' ? `${logORreg} form` : "hide"}>
                    <div className='detail-element'>
                        <label>Name : </label>
                        <input type="text" name="name" value={userDetails.name} onChange={handleDetailsChange} placeholder='Enter name' />
                    </div>
                    <div className='detail-element'>
                        <label>Password : </label>
                        <input type="password" name="password" value={userDetails.password} onChange={handleDetailsChange} placeholder='Enter Password' />
                    </div>
                </div>
                <div className={logORreg === 'register' ? `${logORreg} form` : "hide"}>
                    <div className='detail-element'>
                        <label>Name : </label>
                        <input type="text" name="name" value={userDetails.name} onChange={handleDetailsChange} placeholder='Enter name' />
                    </div>
                    <div className='detail-element'>
                        <label>Password : </label>
                        <input type="password" name="password" value={userDetails.password} onChange={handleDetailsChange} placeholder='Enter Password' />
                    </div>
                    <div className='detail-element'>
                        <label>Confirm Password : </label>
                        <input type="password" name="confirmPassword" value={userDetails.confirmPassword} onChange={handleDetailsChange} placeholder='Enter Password Again' />
                    </div>
                </div>
                <button className='submit' onClick={submitButtonClick}>{logORreg}</button>
                <svg onClick={props.handleRegisterClick} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                    <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                </svg>
            </div>
        </div>
    )
}
