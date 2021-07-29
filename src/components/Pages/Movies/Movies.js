import React, { useState,useEffect } from 'react'
import  './style.css';


export default function Movie({imageUrl,title,rating}) {
    
    const  ImgStartUrl = 'https://image.tmdb.org/t/p/w500/'
    
    const [showRating,SetShowRating] = useState('')
    const [Rating,SetRating] = useState(rating)
    const [movieCard,SetMovieCard] = useState([])

    useEffect(() =>{
      SetMovieCard([])  
        RatingStatus()
      SetMovieCard("movieCard")  
    },[Rating])

    
const RatingStatus = () =>{
    
    let ratingcolor = ''   

    if(rating <= 5){
        ratingcolor  = "red"
    }
    if(rating >5 && rating < 8){
        ratingcolor = "orange"
    }
    if(rating >= 8){
        ratingcolor = "green"
    }    
    
    SetShowRating(ratingcolor)
}

    if(Rating !== rating){
        SetRating(rating)
    } 


    return (
   
        <div className={movieCard}>
            <img src={`${imageUrl!==null?ImgStartUrl+imageUrl:'/images/placeholder.jpg'}`} alt="movie"/> 
          <div className ={"flex3"}>
              <h3>{title}</h3>
              <p><span className={`movie_rating ${showRating}`}>{rating}</span></p>
           </div>
        </div>
 
    )
}
