import React from 'react'
import "./middleSection.css"
import Banner from './Banner.jsx'
import SearchBar from './SearchBar.jsx'

function MiddleSection(){
    return(
        <div className='middle-section-container'>
            <Banner />
            <SearchBar />
        </div>
    )
}

export default MiddleSection