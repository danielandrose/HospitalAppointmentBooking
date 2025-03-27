import React from 'react'
import "../css-files/banner.css"
import doc_img from "../imgs/doctor.png"

function Banner() {
    return (
        <div className='main-banner-container'>
            <div className='banner-container'>
                <div className='banner-left'>
                    <div className='banner-element'>
                        <h1>Schedule Your Appointment Now</h1>
                    </div>
                    <div className='banner-element'>
                        <button><p>Book Your Appointment</p></button>
                    </div>
                </div>
                <div className='banner-right'>
                    <img className='banner-img' src={doc_img} />
                </div>
            </div>
        </div>
    )
}

export default Banner