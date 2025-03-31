import React, { useState,useEffect } from 'react';
import './searchBar.css';
import axios from 'axios'
import DoctorCard from './DoctorCard.jsx';
import { API_URL } from '../../constants/URL.js';
import { addDoctor } from '../../slices/doctorSlice.js';
import {useDispatch,useSelector} from 'react-redux'
 
function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [doctors,setDoctors]=useState([]);
    const dispatch=useDispatch()

    console.log("Doctors Data: ", doctors);

    const getDoctorsDetails=async()=>{
        try{
            const response=await axios.get(`${API_URL}/doctors`)
            console.log(response.data);

            dispatch(addDoctor(response.data))

            setDoctors(response.data)
        }
        catch(err){
            console.log("Error in fetching doctors:",err);
        }
    }

    useEffect(() => {
        getDoctorsDetails();
      }, []);

      const filteredDoctors = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
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
                            key={val._id}
                            id={val._id}
                            name={val.name}
                            img={val.img}
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
