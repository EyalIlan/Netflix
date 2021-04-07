import React, { useState, useEffect } from 'react'
import HomePage from '../HomePage/HomePage'

export default function Favorite() {
            
    const [data,SetData] = useState(JSON.parse(localStorage.getItem('Array'))) 

    console.log(data)

    return (
        <div>
            <HomePage   favorites = {data}  showFavorite = {true} type="movie"></HomePage>
        </div>
    )
}
