import React from 'react'
import SearchBar from '../SearchBar/Search'
// import {Link} from 'react-router-dom'
import Link from '../link/Link' 

export default function Navbar() {
    return (
        <div className="navbar">
            
            <div className="flex navbar_elements">
                <Link url = "/" title = "Movies"></Link>
                <img className="icon_size" src="/images/movie.png" alt=""/>
            </div>
            
            <div className="flex navbar_elements">
            <Link url = "/tv_show" title="Tv-Shows"></Link>
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

            <SearchBar></SearchBar>
        </div>
    )
}
