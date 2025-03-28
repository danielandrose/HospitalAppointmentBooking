import React, { useState } from 'react';
import '../css-files/searchBar.css';
import { doctors } from "../constant.js"; 
import DoctorCard from './DoctorCard.jsx';

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");

    console.log("Doctors Data: ", doctors);

    const filteredDoctors = doctors.filter((doctor) =>
        doctor.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='search-container'>
            <div className='search-bar'>
                <div className="input-box">
                    <input 
                        type="text"
                        placeholder='Search by name...'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className='search-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2"> 
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path> 
                        <path d="M21 21l-6 -6"></path> 
                    </svg>
                </div>
            </div>

            <div className='doctors-detail'>
                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((val) => (
                        <DoctorCard
                            key={val.id}
                            id={val.id}
                            name={val.title}
                            img={val.image}
                            specialization={val.specialization}
                        />
                    ))
                ) : (
                    <p className="no-results">No doctors found</p>
                )}
            </div>
        </div>
    );
}

export default SearchBar;



/*import React from 'react'
import '../css-files/searchBar.css'
import { doctors } from "../constant.js"
import DoctorCard from './DoctorCard.jsx'

function SearchBar() {
    return (
        <div className='search-container'>
            <div className='search-bar'>
                <div className="input-box">
                    <input placeholder='Search the doctor here' />
                </div>
                <div className='search-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2"> <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path> <path d="M21 21l-6 -6"></path> </svg>
                </div>
            </div>
            <div className='doctors-detail'>
                {doctors.map((val) => (
                    <DoctorCard
                        key={val.id}
                        id={val.id}
                        name={val.title}
                        img={val.image}
                        specialization={val.specialization}
                    />
                ))}
            </div>
        </div>
    )
}

export default SearchBar;*/