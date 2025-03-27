import React from 'react'
import '../css-files/doctorCard.css'

function DoctorCard(props){
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
                <button className="book-now-button">Book Now</button>
            </div>
        </div>
    )
}

export default DoctorCard