import React, { useState } from 'react'


export default function Search() {
    const [term,SetTerm] = useState('')        
    
    return (
        <div>
            <input className="search" type="text" placeholder="Search"/>
        </div>
    )
}
