import React from 'react'
import HomePage from './components/Pages/Transferpage/Transferpage'
import Navbar from './components/UI/NavBar/Navbar'
import {Route,BrowserRouter} from 'react-router-dom'
import Movie from './components/Pages/Movie/Movie'
import SearchPage from './components/Pages/SearchPage/SearchPage'

function App() {
  
  return(

    <BrowserRouter>
      <Navbar></Navbar>
      <div>
        <Route path="/" exact component={HomePage}></Route>
        <Route path ="/movie/:id" component={Movie}></Route>
        <Route path="/search/:term" component={SearchPage}></Route>
      </div>
    </BrowserRouter>

  )

}

export default App;
