import React, { useState,useEffect } from 'react'
import classes from './style.module.css';


export default function Movie({imageUrl,title,rating}) {
    
    const  ImgStartUrl = 'https://image.tmdb.org/t/p/w500/'
    
    const [showRating,SetShowRating] = useState('')
    const [Rating,SetRating] = useState(rating)
    const [movieCard,SetMovieCard] = useState([])

    useEffect(() =>{
      SetMovieCard([])  
        RatingStatus()
      SetMovieCard(classes.movieCard)  
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
            <img src={`${ImgStartUrl+imageUrl}`} alt="movie"/> 
          <div className ={classes.flex}>
             <h3>{title}</h3>
              <p><span className={[classes.movie_rating,classes.showRating].join('')}>{rating}</span></p>
           </div>
        </div>
 
    )
}
