
import React, { useState, useEffect } from 'react'
// import Axios from '../../utilitis/Axios'
import Axios from 'axios'
import Card from '../Movies/Movies'
import {Link,NavLink} from 'react-router-dom'
import SecondaryNavbar from '../../UI/SecondaryNavabr/secondNavbar'


export default function HomePage({url,t,type,favorites,showFavorite}) {
    
    const [movies,SetMovies] = useState([])
    const [currentPage,SetCurrentPage] = useState (1)
    const [PrevlockButton,SetPrevLockButton] = useState(true)
    const [nextlockButton,SetNextLockButton] = useState(true)
    const [totalPages,SetTotalPages] = useState(0)
    const [term,SetTerm] = useState(t)

    
    const previousPage = () =>{
        SetCurrentPage(currentPage - 1)
      }
      
      const nextPage = () =>{
        SetCurrentPage(currentPage + 1)  
      }
      
      useEffect(() =>{

        const Request = async () =>{
          if(!showFavorite){
            let Data = await  Axios.get(`${url}&page=${currentPage}`) 
            SetMovies(Data.data.results)
            SetCurrentPage(Data.data.page)
            SetTotalPages(Data.total_pages)
          }else{
            SetMovies(favorites)
          }
         }
        Request()
         currentPage === 1? SetPrevLockButton(true): SetPrevLockButton(false)
         currentPage === totalPages? SetNextLockButton(true) : SetNextLockButton(false) 
      
        },[currentPage,url])
        
        if(term !== t){
          SetTerm(t)
          SetCurrentPage(1)
        }

        
       

        let DisplayContent;
        if(type === "tv_show"){
          DisplayContent = movies.map((p,index) =>{
            return <NavLink  activeClassName="acitve" to={`/movie/${p.id}?type=tvShow`}><Card key={index} title={p.name} rating={p.vote_average} imageUrl={p.poster_path} ></Card></NavLink>
           })
        }
        
        if(type === "movie"){
          DisplayContent =  movies.map((p,index) =>{
            return <NavLink  activeClassName="acitve" to={`/movie/${p.id}?type=movie`}><Card key={index} title={p.title} rating={p.vote_average} imageUrl={p.poster_path} ></Card></NavLink>
          })
        }  


        return (
          <div className="App Backround-movie">
              
            <SecondaryNavbar></SecondaryNavbar>
            <div id="top"></div>

            <div className ="grid">
                  {DisplayContent}
            </div>
               
               {!showFavorite &&
                  <div className="lower-navbar">
                    <a href="#top">  <button className="btn"  disabled={PrevlockButton} onClick={previousPage}>{currentPage - 1}</button> </a>
                    <a href="#top"> <button className="btn"  disabled={nextlockButton} onClick={nextPage}>{currentPage+1}</button> </a>
                  </div>}
                    
            </div>
      
        );

    
}


