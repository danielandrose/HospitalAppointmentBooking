import React, { useState } from 'react';
import "./appointmentPage.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function AppointmentPage() {
    const [searchParams] = useSearchParams();
    const docId = searchParams.get("id");
    const userId = useSelector((state) => state.userId);
	const navigate = useNavigate()

    const [appointmentDetails, setAppointmentDetails] = useState({
        patientName: "",
        patientPhone: "",
        patientAge: "",
        date: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setAppointmentDetails(prev => ({ ...prev, [name]: value }));
    }

    async function bookAppointment(event) {
        event.preventDefault();

        if (!userId) {
            alert("You must be logged in to book an appointment.");
            return;
        }

        try {
            // Add appointment to Doctor
            await axios.put(`http://localhost:5000/doctors/${docId}`, {
                patientID: userId,
                patientAge: appointmentDetails.patientAge,
                date: appointmentDetails.date
            });

            // Add appointment to User
            await axios.put(`http://localhost:5000/users/${userId}`, {
                doctor: docId,
                dates: appointmentDetails.date
            });
			navigate('/');
            alert("Appointment booked successfully!");
        } catch (error) {
            console.error("Error booking appointment:", error);
            alert("Failed to book appointment. Please try again.");
        }
    }

    return (
        <div className='main-appointment-container'>
            <h2>Appointment Booking Page</h2>
            <div className='sub-appointment-container'>
                <div className='appointment-form'>
                    <form onSubmit={bookAppointment}>
                        <div className="sub-form">
                            <label>Patient Name:</label>
                            <input type="text" name="patientName" value={appointmentDetails.patientName} onChange={handleChange} placeholder='Enter patient name here...' required />
                            
                            <label>Patient Phone No:</label>
                            <input type="text" name="patientPhone" value={appointmentDetails.patientPhone} onChange={handleChange} placeholder='Enter patient phone number...' required />
                            
                            <label>Patient Age:</label>
                            <input type="number" name="patientAge" value={appointmentDetails.patientAge} onChange={handleChange} placeholder='Enter patient age...' required />
                            
                            <label>Select the Appointment Date:</label>
                            <input type="date" name="date" value={appointmentDetails.date} onChange={handleChange} required />
                        </div>
                        <button type="submit">Book</button>
                    </form>
                </div>
                <img src="https://i.pinimg.com/736x/d8/fe/60/d8fe609d93ea5851746176a042839747.jpg" alt="Doctor" />
            </div>
        </div>
    );
}
