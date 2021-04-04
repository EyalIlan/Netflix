
import React, { useState, useEffect } from 'react'
import '../../../App.css';
import Axios from '../../utilitis/Axios'
import Movie from '../Movies/Movies'
import {Link} from 'react-router-dom'



export default function HomePage() {
    
    const [movies,SetMovies] = useState([])
    const [currentPage,SetCurrentPage] = useState (1)
    const [PrevlockButton,SetPrevLockButton] = useState(true)
    const [nextlockButton,SetNextLockButton] = useState(true)
    const [totalPages,SetTotalPages] = useState(0)

  

    const previousPage = () =>{
        SetCurrentPage(currentPage - 1)
      }
      
      const nextPage = () =>{
        SetCurrentPage(currentPage + 1)  
      }
      
      useEffect(() =>{
        const Request = async () =>{
            let Data = await  Axios.get(`&page=${currentPage}`) // nned to be dinamic
            SetMovies(Data.data.results)
            SetCurrentPage(Data.data.page)
            SetTotalPages(Data.total_pages)
         }
        Request()
      
         currentPage === 1? SetPrevLockButton(true): SetPrevLockButton(false)
         currentPage === totalPages? SetNextLockButton(true) : SetNextLockButton(false)
      
      },[currentPage])
        
        // console.log(movies)
      
       
        return (
          <div className="App">
              
            <div className ="grid">
               {movies.map((p,index) =>{
                 return <Link to={`/movie/${p.id}`}><Movie key={index} title={p.title} rating={p.vote_average} imageUrl={p.poster_path} id={p.id}></Movie> </Link>
               })}
            </div>
      
               <div className="lower-navbar">
                   <button className="btn"  disabled={PrevlockButton} onClick={previousPage}>{currentPage - 1}</button>
                   <button className="btn"  disabled={nextlockButton} onClick={nextPage}>{currentPage+1}</button>  
                </div>
                    
            </div>
      
        );

    
}


