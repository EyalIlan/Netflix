import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../../../App.css'
import Youtube from 'react-youtube'

export default function Movie({match}) {
    const [id,SetId] = useState(match.params.id)
    const [Data,SetData] = useState([])
    const [url,SetUrl] = useState('')
    // const [logos,SetLogos] = useState([])

    const parameters = new URLSearchParams(window.location.search)
    
   
    const  ImgStartUrl = 'https://image.tmdb.org/t/p/w500/'
    useEffect(() =>{
        
        
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


    console.log(Data)
    let display;
    if(Data.production_companies){
        display =  Data.production_companies.map(p =>{
             return <img src={ImgStartUrl + p.logo_path} alt=""/>
         })
    }else{
        display = "" 
    }

    return (
        <div className="main-container" style={{backgroundImage:`url(${ImgStartUrl}${Data.backdrop_path})`}}>

        <div className="movie-container">
            <div className="poster">
                <img src={ImgStartUrl  + Data.poster_path} alt=""/>
            </div>
            <div className="movie-data">
                <h1>{Data.name || Data.title}</h1>
              {url && <Youtube videoId={url.results[0].key}></Youtube> }
                <h4>{Data.overview}</h4>

            </div>
        </div>
        <div className="lower-movie-content">
                <h4><a href={Data.homepage}>HomePage</a></h4>
                <h4>{Data.release_date}</h4>
            </div>
        <div className="logos flex_around">
            {
                display
            }
        </div>
        </div>
    )
}
