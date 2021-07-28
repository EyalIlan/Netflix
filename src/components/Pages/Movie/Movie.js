import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../../../App.css'
import './Movie.css'
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


    const _onReady =(event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }




    const addStoragh = () =>{
      let arr = JSON.parse(localStorage.getItem('Array'))
      arr.push(Data)
      localStorage.setItem('Array',JSON.stringify(arr))
    }

    
    let YoutubeObt = {
        height:'400',
        width:'900',
        playerVars :{
            autoplay:1
        }
    }

    let displayLogos;
    let show

    // GET LOGOS
    if(Data.production_companies){
        displayLogos =  Data.production_companies.map(p =>{

            console.log(p.logo_path);

             return p.logo_path?<img src={ImgStartUrl + p.logo_path } alt=""/>: <h2>LOGO</h2>
         })
    }else{
        displayLogos = "" 
    }
    
    console.log(displayLogos)

    if(showData){
        show = (<div className="main-container Backround-movie" >
        
        
        <div className="container">
                <h1>{Data.name || Data.title}</h1>
        <div className="movie-container">
            <div className="poster">
                <img src={ImgStartUrl  + Data.poster_path} alt=""/>
            </div>
            <div className="movie-data">
                {url && <Youtube videoId={url.results[0]?url.results[0].key:''} opts={YoutubeObt} ></Youtube> }
                <p>{Data.overview}</p>
        </div>
        </div>
        
        </div>
        <div className="lower-movie-content flex">
                <h4><a href={Data.homepage}>HomePage</a></h4>
                    <button onClick={addStoragh} className="btn">Add to my favorites</button>
                <h4>{Data.release_date===undefined?'Date Unknown':Data.release_date}</h4>
        </div>
        <div className="logos flex_around">
                        {displayLogos}
        </div>
        </div>)
    }else{
        show = ( 
                  <Spinner>

                  </Spinner>
           
                  )
    }

    return (
        
        <div>
            {show}
        </div>
    )
}


// style={{backgroundImage:`url(${ImgStartUrl}${Data.backdrop_path})`}}