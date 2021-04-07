import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../../../App.css'
import Youtube from 'react-youtube'
import Spinner from '../../UI/Spinner/Spinner'

export default function Movie({match}) {
    const [id,SetId] = useState(match.params.id)
    const [Data,SetData] = useState([])
    const [url,SetUrl] = useState('')
    const [showData,SetShowData] = useState(false)

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
        SetShowData(false)
        let Data = await Axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=564ff4ab275baff4372adb3dc85ab368&language=en-US`) // get tv-show
        // console.log(Data)
        SetData(Data.data)
        let Url = await Axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=564ff4ab275baff4372adb3dc85ab368&language=en-US`) //get video
        SetUrl(Url.data)
        SetShowData(true) 

    }

    
    const GetMovie = async () =>{
        SetShowData(false)
        let Data = await Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=564ff4ab275baff4372adb3dc85ab368&language=en-US`) // get movie
        SetData(Data.data)
        let Url = await Axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=564ff4ab275baff4372adb3dc85ab368&language=en-US`) //get video
        SetUrl(Url.data)
        SetShowData(true) 
    }


    //pasrse move out
    // string move in
    // remove item 

    const addStoragh = () =>{
      let arr = JSON.parse(localStorage.getItem('Array'))
      arr.push(Data)
      localStorage.setItem('Array',JSON.stringify(arr))
    }

    
    let display;
    let show
    if(Data.production_companies){
        display =  Data.production_companies.map(p =>{
             return <img src={ImgStartUrl + p.logo_path} alt=""/>
         })
    }else{
        display = "" 
    }
    
    if(showData){
        show = (<div className="main-container" style={{backgroundImage:`url(${ImgStartUrl}${Data.backdrop_path})`}}>
        <div className="movie-container">
            <div className="poster">
                <img src={ImgStartUrl  + Data.poster_path} alt=""/>
            </div>
            <div className="movie-data">
                <h1>{Data.name || Data.title}</h1>
                {url && <Youtube videoId={url.results[0].key}></Youtube> }
                <h3>{Data.overview}</h3>

            </div>
        </div>
        <div className="lower-movie-content">
                <h4><a href={Data.homepage}>HomePage</a></h4>
                    <button onClick={addStoragh}>Add to my favorites</button>
                <h4>{Data.release_date}</h4>
        </div>
        <div className="logos flex_around">
            {display}
        </div>
        </div>)
    }else{
        show = (<Spinner></Spinner>)
    }

    return (
        
        <div>
            {show}
        </div>
    )
}
