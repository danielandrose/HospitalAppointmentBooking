import React from 'react'
import "../css-files/navigation.css"

function Navigation() {
    return (
        <div className='nav-container'>
            <div className="nav-heading-container">
                <h1 className="nav-heading">CareConnect</h1>
            </div>
            <div className='nav-element-container'>
                <div className="nav-element">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" strokeWidth="2"> <path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1"></path> <path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1"></path> <path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1"></path> <path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1"></path> </svg> 
                    <p className="nav-text">DashBoard</p>
                </div>
                <div className="nav-element">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" strokeWidth="2"> <path d="M10.5 21h-4.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3"></path> <path d="M16 3v4"></path> <path d="M8 3v4"></path> <path d="M4 11h10"></path> <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path> <path d="M18 16.5v1.5l.5 .5"></path> </svg> 
                    <p className="nav-text">Appointments</p>
                </div>
                <div className="nav-element">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" strokeWidth="2"> <path d="M12 8l0 4l2 2"></path> <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"></path> </svg> 
                    <p className="nav-text">Patient History</p>
                </div>
                <div className="nav-element">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" strokeWidth="2"> <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"></path> <path d="M19 16h-12a2 2 0 0 0 -2 2"></path> <path d="M9 8h6"></path> </svg> 
                    <p className="nav-text">PharmaBook</p>
                </div>
            </div>
            <div className="nav-footer-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2"> <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2"></path> <path d="M15 12h-12l3 -3"></path> <path d="M6 15l-3 -3"></path> </svg> 
                <p className="nav-text">Log Out</p>
            </div>
        </div>
    )
}

export default Navigation