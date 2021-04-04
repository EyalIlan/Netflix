import React from 'react'
import HomePage from './components/Pages/HomePage/HomePage'
import Navbar from './components/UI/NavBar/Navbar'
import {Route,BrowserRouter} from 'react-router-dom'
import Movie from './components/Pages/Movie/Movie'

function App() {
  
  return(

    <BrowserRouter>
      <Navbar></Navbar>
      <div>
        <Route path="/" exact component={HomePage}></Route>
        <Route path ="/movie/:id" component={Movie}></Route>
      </div>
    
    </BrowserRouter>

  )

}

export default App;
