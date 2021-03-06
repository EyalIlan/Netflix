import React from 'react'
import SearchBar from '../SearchBar/Search'
import Link from '../link/Link' 
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            
            <div className="flex navbar_elements">
                <Link url = "/" title = "Movies"></Link>
                <img className="icon_size" src="/images/movie.png" alt=""/>
            </div>
            
            <div className="flex navbar_elements">
            <Link url = "/tv" title="Tv-Shows"></Link>
            <img className="icon_size" src="/images/tv-show.png" alt=""/>
            </div>

            <div className="flex navbar_elements">
            <Link url = "/favorite" title="My favorites"></Link>
            <img className="icon_size" src="/images/star.png" alt=""/>
            </div>

            <div className="flex navbar_elements">
            <Link url = "/statistics" title ="Statistics">Statistics</Link>
            <img className="icon_size" src="/images/trend.png" alt=""/>
            </div>    
            <div className="flex navbar_elements">
                <SearchBar></SearchBar>
            </div>

        </div>
    )
}
