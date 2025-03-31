import React from 'react'
import './doctorCard.css'
import {useNavigate} from 'react-router-dom'

function DoctorCard(props){
    const navigate=useNavigate();
    function handleBookNowButtonClick(id){
        console.log("The book now button got clicked")
        navigate(`/appointmentBooker?id=${encodeURIComponent(id)}`)
    }
    return (
        <div className='card-container'>
            <div className="card-image">
                <img src={props.img}/>
            </div>
            <div className="description">
                <h2>Name : {props.name}</h2>
                <p>Specialization : {props.specialization}</p>
            </div>
            <div>
                <button className="book-now-button" onClick={()=>handleBookNowButtonClick(props.id)}>
                    Book Now
                </button>
            </div>
        </div>
    )
}

export default DoctorCard