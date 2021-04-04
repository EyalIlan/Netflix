import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../../../App.css'

export default function Movie({match}) {
    const [id,SetId] = useState(match.params.id)
    const [Data,SetData] = useState([])
    const [url,SetUrl] = useState('')

    const  ImgStartUrl = 'https://image.tmdb.org/t/p/w500/'
    useEffect(() =>{
        
        const Request = async () =>{
            let Data = await Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=564ff4ab275baff4372adb3dc85ab368&language=en-US`)
            SetData(Data.data)
            let Url = await Axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=564ff4ab275baff4372adb3dc85ab368&language=en-US`)
            console.log(Url)
        
        }
        Request()
    },[])
    
    
    // console.log(Data)
    return (
        <div className="movie-container">
            <div className="poster">
                <img src={ImgStartUrl  + Data.backdrop_path} alt=""/>
            </div>
            <div className="movie-data">
                <h1>{Data.title}</h1>
                <h3>{Data.overview}</h3>

                <h5><a href={Data.homepage}>HomePage</a></h5>
            </div>
        </div>
    )
}
