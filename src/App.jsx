import React,{useEffect, useState} from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

//  fc737dd4






const App = ( ) => {

    const API_URL = 'https://www.omdbapi.com/?apikey=fc737dd4&'

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies('')
    },[])


    return(
        <div className="app">
            <h1>MovieApp</h1>

            <div className="search">
                <input type="text" placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <img src={SearchIcon} alt="Search" onClick={() => searchMovies(searchTerm)} />
            </div>

            {
                movies?.length > 0
                ?(
                    <div className="container">
                        {movies.map((movie, index) => (
                            <MovieCard key={index} movie={movie}/>
                        ))}
                    </div>
                ) :
                (
                    <div className="empty">
                        <h2>Search a movie</h2>
                    </div>
                )
            }

            
        </div>
    )
}

export default App;