import React from "react";
import Moviecard from "../components/Moviecard/Moviecard";
import "./Home.css";
import useMovieList from "../Hooks/useMovieList";
import { Link } from "react-router-dom";

function Home() {
  const moviesList = useMovieList("Avengers","Batman","Harry Potter");

  return (
    <div className="movie-card-wrapper">
      {moviesList.length > 0 &&
        moviesList.map((movie) => (
           <Moviecard key={movie.imdbID} id={movie.imdbID} {...movie} />
        ))}
    </div>
  );
}

export default Home;
