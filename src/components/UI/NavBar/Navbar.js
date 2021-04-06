import React from 'react'
import SearchBar from '../SearchBar/Search'
// import {Link} from 'react-router-dom'
import Link from '../link/Link' 

export default function Navbar() {
    return (
        <div className="navbar">
            <Link url = "/" title = "Movies"></Link>
            <Link url = "/tv_show" title="Tv-Shows"></Link>
            <Link url = "/favorite" title="My favorites"></Link>
            <Link url = "/statistics" title ="Statistics">Statistics</Link>
            <SearchBar></SearchBar>
        </div>
    )
}
