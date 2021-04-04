import React, { useState, useEffect } from 'react'
import Axios from 'axios'


export default function Movie(props) {
    
    const [id,SetId] = useState(null)
    
    useEffect(() =>{
        SetId(props.match.params.id)
        const Request = async () =>{
            
        }
        
        Request()
        
    },[])
    
    

    return (
        <div>
           
        </div>
    )
}
