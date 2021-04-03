import React from 'react'

export default function Movie({imageUrl,title,rating}) {
    return (
    <div>
        <div className="movie">
            <img src={`${imageUrl}`} alt="movie image"/>
        </div>
        <div className="movie-info">
             <h3>{title}</h3>
             <span className="green">{rating}</span>
        </div>
    </div>

    )
}
