import React from 'react'
import HomePage from '../HomePage/HomePage'

export default function Tv_show() {
    
    
    let url = "https://api.themoviedb.org/3/tv/popular?api_key=564ff4ab275baff4372adb3dc85ab368"
    
 
    
    return (
        <div>
            <HomePage url ={url} type="tv_show"></HomePage>
        </div>
    )
}
