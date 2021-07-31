import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../../../App.css'
import './Movie.css'
import Youtube from 'react-youtube'
import Spinner from '../../UI/Spinner/Spinner'

export default function Movie({ match }) {
    const [id, SetId] = useState(match.params.id)//the id of the movie and youtube
    const [Data, SetData] = useState([])// the data itself
    const [url, SetUrl] = useState('') // youtube
    const [showData, SetShowData] = useState(false) // show all the data -> loader
    const [type, SetType] = useState(new URLSearchParams(window.location.search).get('type'))// type of the movie tv-show.....
    const [lock, SetLock] = useState(true) // lock favorite button until the data is arived
    const [favorite, SetFavorite] = useState(false) // show if movie is in favorite already
    // const parameters = new URLSearchParams(window.location.search)

    let displayLogos;
    let show



    const ImgStartUrl = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {

        if (Data.length === 0) {
            const Request = async () => {
                await GetMovies()
            }
            Request()
        } else {
            // SetLock(false)
            Favorite()
        }

    }, [Data])


    const GetMovies = async () => {
        SetShowData(false)
        let DATA = await Axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=564ff4ab275baff4372adb3dc85ab368&language=en-US`) // get movie
        SetData(DATA.data)
        let Url = await Axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=564ff4ab275baff4372adb3dc85ab368&language=en-US`) //get video
        SetUrl(Url.data)
        SetShowData(true)

    }


    const Favorite = () => { //can Refactor more
        
        let arr = JSON.parse(localStorage.getItem('Array'))

        if (!checkInFavorite(arr)) {
            SetFavorite(false)
                // arr.push(Data) 
        }else{
            SetFavorite(true)
            // arr = arr.filter(p => p.id !== Data.id)
        }   
            // localStorage.setItem('Array',JSON.stringify(arr))
    }


    const FavoriteHandler = () =>{

        let arr = JSON.parse(localStorage.getItem('Array'))

        if(favorite){
            arr = arr.filter(p => p.id !== Data.id)
        }else{
            arr.push(Data) 
        }
        localStorage.setItem('Array',JSON.stringify(arr))    
        SetFavorite(!favorite)

    }

    const checkInFavorite = (arr) =>{
        let MovieInFavorite = arr.find(p => p.id === Data.id)
        return MovieInFavorite?true:false

    }



    let YoutubeObt = {
        playerVars: {
            autoplay: 1
        }
    }

    // GET LOGOS
    if (Data.production_companies) {
        displayLogos = Data.production_companies.map(p => {
            return p.logo_path ? <img src={ImgStartUrl + p.logo_path} alt="" /> : <h2>LOGO</h2>
        })
    } else {
        displayLogos = ""
    }



    

    let showFavorite = (<button onClick={FavoriteHandler}  className="TransprentButton"><i className={favorite ? `fas fa-heart fa-5x redColor` : `fas fa-heart fa-5x`} /></button>)



    if (showData) {
        show = (<div>

            <div className="container">
                <h1 className="title">{Data.name || Data.title}</h1>
                <div className="movie-container">
                    <div className="poster">
                        <img src={ImgStartUrl + Data.poster_path} alt="" />
                    </div>
                    <div className="movie-data">
                        {url && <Youtube id="VideoSize" videoId={url.results[0] ? url.results[0].key : ''} opts={YoutubeObt} ></Youtube>}
                        <p>{Data.overview}</p>

                    </div>
                </div>

            </div>
            <div className="lower-movie-content flex">
                <h4><a href={Data.homepage}>HomePage</a></h4>
                {showFavorite}
                <h4>{Data.release_date === undefined ? 'Date Unknown' : Data.release_date}</h4>
            </div>
            <div className="logos flex_around">
                {displayLogos}
            </div>
        </div>)

    } else {
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