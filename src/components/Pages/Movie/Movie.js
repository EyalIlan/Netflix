import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../../../App.css'
import Youtube from 'react-youtube'

export default function Movie({match}) {
    const [id,SetId] = useState(match.params.id)
    const [Data,SetData] = useState([])
    const [url,SetUrl] = useState('')
    const [movies,SetMovies] = useState('')

    const parameters = new URLSearchParams(window.location.search)
    
    const GetParams = () =>{
       
    }

    const  ImgStartUrl = 'https://image.tmdb.org/t/p/w500/'
    useEffect(() =>{
        GetParams()
        
        
        const Request = async () =>{
            
            switch(parameters.get('type')){
                case 'tvShow':
                    GetTvShows()
                    break;
                case 'movie':
                    GetMovie()
                    break;
            }

        }
        Request()
    },[])
    

    const GetTvShows = async () =>{

        let Data = await Axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=564ff4ab275baff4372adb3dc85ab368&language=en-US`) // get tv-show
        SetData(Data.data)
        let Url = await Axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=564ff4ab275baff4372adb3dc85ab368&language=en-US`) //get video
        SetUrl(Url.data)
    }

    
    const GetMovie = async () =>{

        let Data = await Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=564ff4ab275baff4372adb3dc85ab368&language=en-US`) // get movie
        SetData(Data.data)
        let Url = await Axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=564ff4ab275baff4372adb3dc85ab368&language=en-US`) //get video
        SetUrl(Url.data)
    }



    return (
        <div className="movie-container">
            <div className="poster">
                <img src={ImgStartUrl  + Data.backdrop_path} alt=""/>
            </div>
            <div className="movie-data">
                <h1>{Data.title}</h1>
              {url && <Youtube videoId={url.results[0].key}></Youtube> }
                <h3>{Data.overview}</h3>

                <h5><a href={Data.homepage}>HomePage</a></h5>
            </div>
        </div>
    )
}
