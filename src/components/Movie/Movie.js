import React from 'react'

export default function Movie({imageUrl,title,rating}) {
    return (
   
        <div className="movieCard">
            <img src={`${imageUrl}`} alt="movie"/>
             
          <div className ="flex">
             <h3>{title}</h3>
             <span className="movie-rating red">{rating}</span>
           </div>
        </div>
   

    )
}
