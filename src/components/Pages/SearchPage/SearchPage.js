import React, { useState,useEffect } from 'react'

import HomePage from '../HomePage/HomePage'

export default function SearchPage({match}) {

    const url = `https://api.themoviedb.org/3/search/movie?api_key=564ff4ab275baff4372adb3dc85ab368&query=${match.params.term}&language=en-US`



    return (
        <div>
            <HomePage url={url}     t = {match.params.term}></HomePage>
        </div>
    )
}


