import './App.css';
import React, { useState, useEffect } from 'react'
import Axios from './utilitis/Axios'
import Navbar from './components/NavBar/Navbar'
import Movie from './components/Movie/Movie'
function App() {
  

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
  
  console.log(movies)

 
  return (
    <div className="App">
        <Navbar></Navbar>
        
      <div className ="grid">
         {movies.map((p,index) =>{
           return <Movie key={index} title={p.title} rating={p.vote_average} imageUrl={p.poster_path} id={p.id}></Movie>
         })}
      </div>

        <div>
             <button disabled={PrevlockButton} onClick={previousPage}>{currentPage - 1}</button>
             <button disabled={nextlockButton} onClick={nextPage}>{currentPage+1}</button>  
          </div>
              
      </div>

  );
}

export default App;
