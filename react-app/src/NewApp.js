import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

export default function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      searchMovies("Marvel");
    }, []);
  
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
 
// you can use .then() instead of async / await 

/* .json() methods converts the JSON string recieved into a Javascript object.

'{"title": "Inception", "year": 2010, "director": "Christopher Nolan"}'

to: 

{
   title: "Inception",
   year: 2010,
   director: "Christopher Nolan"
}

*/

      setMovies(data.Search);
    };
  
    return (
      <div className="app">
        <h1>MovieLand</h1>
  
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
  
{/* {} is used cuz ternary operator is a JS thing. */}

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    );
  };

// ?. is a optional chaining operator that checks if movies is true and isn't undefined or null. If movies is true and length is greater than 0 then the div is created and array is mapped. It is needed because if movies were to be undefined or null it'd throw an error since we would be comparing undefined / null with 0.