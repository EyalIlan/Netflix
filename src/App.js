import React from 'react'
import HomePage from './components/Pages/Transferpage/Transferpage'
import Navbar from './components/UI/NavBar/Navbar'
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import Movie from './components/Pages/Movie/Movie'
import SearchPage from './components/Pages/SearchPage/SearchPage'
import Tv_show from './components/Pages/Tv_show/Tv_show'
import Favorite from './components/Pages/Favorite/Favorite'
function App() {


  if(!localStorage.getItem('Array')){
      localStorage.setItem('Array',JSON.stringify([]))
  }

  return(

    <BrowserRouter>
      <div className="Backround-movie">
        <Navbar></Navbar>
        <Switch>
        <Route path ="/movie/:id" component={Movie}></Route>
        <Route path="/search/:term" component={SearchPage}></Route>
        <Route path="/tv_show" component ={Tv_show}></Route>
        <Route path="/favorite" component = {Favorite}></Route>
        <Route path="/" exact component={HomePage}></Route>
        </Switch>
      </div>
    </BrowserRouter>

  )

}

export default App;
