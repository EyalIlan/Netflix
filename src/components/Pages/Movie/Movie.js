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
    const [type,SetType] = useState(new URLSearchParams(window.location.search).get('type'))

    // const parameters = new URLSearchParams(window.location.search)
    

    console.log(type);

    let displayLogos;
    let show



    const  ImgStartUrl = 'https://image.tmdb.org/t/p/w500/'
    
    useEffect(() =>{
        
        
            const Request = async () =>{
                await GetMovies()
            }
                 Request()
        
        
    },[])
    
    
    const GetMovies = async () =>{
        SetShowData(false)
        let Data = await Axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=564ff4ab275baff4372adb3dc85ab368&language=en-US`) // get movie
        SetData(Data.data)
        let Url = await Axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=564ff4ab275baff4372adb3dc85ab368&language=en-US`) //get video
        SetUrl(Url.data)
        SetShowData(true)
       
    }


    const _onReady =(event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }




    const Favorite = () =>{ //Need to Refactor
        

        let arr = JSON.parse(localStorage.getItem('Array'))
        let MovieInFavorite = arr.find(p => p.id === Data.id)
    
        if(MovieInFavorite === undefined ){
                arr.push(Data)            
        }
        else{
            arr = arr.filter(p => p.id !== Data.id)
        }

            localStorage.setItem('Array',JSON.stringify(arr))
    }   
              
            
             
          
      
    

    
    let YoutubeObt = {
        playerVars :{
            autoplay:1
        }
    }



    // GET LOGOS
    if(Data.production_companies){
        displayLogos =  Data.production_companies.map(p =>{
             return p.logo_path?<img src={ImgStartUrl + p.logo_path } alt=""/>: <h2>LOGO</h2>
         })
    }else{
        displayLogos = "" 
    }
    
    let showFavorite
    
//    showFavorite = favorite ? <i class="fas fa-heart fa-5x redColor" onClick={Favorite}></i> : <i class="fas fa-heart fa-5x" onClick={Favorite}></i>
  


    if(showData){
        show = (<div>
        
        <div className="container">
                <h1 className="title">{Data.name || Data.title}</h1>
        <div className="movie-container">
            <div className="poster">
                <img src={ImgStartUrl  + Data.poster_path} alt=""/>
            </div>
            <div className="movie-data">
                {url && <Youtube id="VideoSize" videoId={url.results[0]?url.results[0].key:''} opts={YoutubeObt} ></Youtube> }
                    <p>{Data.overview}</p>
                
            </div>
        </div>
        
        </div>
        <div className="lower-movie-content flex">
                <h4><a href={Data.homepage}>HomePage</a></h4>
                    {/* {showFavorite} */}
                <h4>{Data.release_date===undefined?'Date Unknown':Data.release_date}</h4>
        </div>
        <div className="logos flex_around">
                        {displayLogos}
        </div>
        </div>)
      
    }else{
        show = ( 
                  
            <Spinner></Spinner>
            
            )
        }
        
        return (
            
        <div>
            {show}
        </div>
    )
}


// style={{backgroundImage:`url(${ImgStartUrl}${Data.backdrop_path})`}}