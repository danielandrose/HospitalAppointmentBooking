import React from 'react'
import "../css-files/hero.css"
import Navigation from "./Navigation.jsx"
import MiddleSection from "./MiddleSection.jsx"
import LoginDetails from './LoginDetails.jsx'
import News from './News.jsx'

function Hero(){
    return(
        <div className="main-container">
            <div className="side-child">
                <Navigation />
            </div>
            <div className="center-child">
                <MiddleSection />
            </div>
            <div className="side-child">
                <LoginDetails />
                <News />
            </div>
        </div>
    )
}

export default Hero;