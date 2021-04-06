import React from 'react'
import SearchBar from '../SearchBar/Search'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to = "/">Home</Link>
            <Link to = "/tvShows">Tv-Shows</Link>
            <Link to = "/"/>
            <Link to = "/tvShows"/>
            <SearchBar></SearchBar>
        </div>
    )
}
