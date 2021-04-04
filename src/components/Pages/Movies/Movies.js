import React, { useState,useEffect } from 'react'

export default function Movie({imageUrl,title,rating}) {
    
    const  ImgStartUrl = 'https://image.tmdb.org/t/p/w500/'
    
    const [showRating,SetShowRating] = useState('')
     
    useEffect(() =>{

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

    },[])

     

    return (
   
        <div className="movieCard">
            <img src={`${ImgStartUrl+imageUrl}`} alt="movie"/>
             
          <div className ="flex">
             <h3>{title}</h3>
             <span className={"movie-rating " + showRating}>{rating}</span>
           </div>
        </div>
   

    )
}
