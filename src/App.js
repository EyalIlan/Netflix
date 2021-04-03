import './App.css';
import React, { useState, useEffect } from 'react'
import Axios from './utilitis/Axios'
import Navbar from './components/NavBar/Navbar'
import Movie from './components/Movie/Movie'
function App() {
  

const [movies,SetMovies] = useState([])
const [currentPage,SetCurrentPage] = useState (0)
const [lockButton,SetLockButton] = useState(true)

const [totalPages,SetTotalPages] = useState(0)


useEffect(() =>{
  const Request = async () =>{
      let Data = await  Axios.get('&page=1') // nned to be dinamic
      SetMovies(Data.data.results)
      SetCurrentPage(Data.data.page)
      SetTotalPages(Data.total_pages)
      if(currentPage === 0){
        SetLockButton(true)
      }else{
        SetLockButton(false)
    }
  }
  Request()
},[])
  
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
             <button disabled={lockButton}>{currentPage - 1}</button>
             <button>{currentPage+1}</button>  
          </div>
              
      </div>

  );
}

export default App;
