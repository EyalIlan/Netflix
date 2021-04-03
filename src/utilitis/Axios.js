
import Axios from 'axios'

const API_KEY = "564ff4ab275baff4372adb3dc85ab368"

// const url = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`

const instance = Axios.create({
    baseURL:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
})

export default instance



