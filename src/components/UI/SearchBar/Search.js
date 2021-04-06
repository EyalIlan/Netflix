import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Search() {
    const [term,SetTerm] = useState('')        
    

    if(term.length === 0){
        SetTerm('batman')
    }

    return (
        <div className="flex">
            <input className="search" type="text" placeholder="Search" onChange={(e) =>{SetTerm(e.target.value)}}/>
            <Link to={`/search/${term}`}><img className="icon_size" src="/images/search.png" alt=""/></Link>
           
        </div>
    )
}

// Be active, Think out loud, Ask Q, Know your worth
