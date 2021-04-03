import './App.css';
import React, { useState, useEffect } from 'react'
import Axios from './utilitis/Axios'
import Navbar from './components/NavBar/Navbar'

function App() {
  

const [movies,SetMovies] = useState([])
const [currentPage,SetCurrentPage] = useState (0)
const [lockButton,SetLockButton] = useState(true)


useEffect(() =>{
  const Request = async () =>{
      let Data = await  Axios.get('&page=1') // nned to be dinamic
      SetMovies(Data.data)
      SetCurrentPage(Data.data.page)
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
        <div className="movie">
            <img src="" alt="movie image"/>
        </div>
        <div className="movie-info">
             <h3>Movie Title</h3>
             <span className="green">9.8</span>
        <div>
             <button disabled={lockButton}>{currentPage - 1}</button>
             <button>{currentPage+1}</button>  
          </div>
              
        </div>

    </div>
  );
}

export default App;
