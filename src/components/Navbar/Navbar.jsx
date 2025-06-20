import React, { useState } from "react";
import "./Navbar.css";
import useMovieList from "../../Hooks/useMovieList";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";

function Navbar() {
  const navigator = useNavigate();
  const [isAutoCompleteVisible, setisAutoCompleteVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  const { theme, setTheme } = useContext(ThemeContext);

  function updateTheme() {
    if (theme == "dark") {
      setTheme("light");
      localStorage.setItem("app-theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("app-theme", "dark");
    }
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const moviesList = useMovieList(
    !debouncedSearchTerm ? "Avengers" : debouncedSearchTerm
  );

  function handleAutoCompleteClick(e, movieImdbId) {
    navigator(`/movie/${movieImdbId}`);
  }

  return (
    <div className="navbar-wrapper">
      <div className="movie-base-title">
        <Link to="/">Movie Base</Link>
      </div>
      <div className="search-bar">
        <input
          type="text"
          id="movie-search-input"
          onFocus={() => setisAutoCompleteVisible(true)}
          onBlur={() => setisAutoCompleteVisible(false)}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="What movie you are thinking about..."
        />
        <div
          id="result-list"
          style={{ display: isAutoCompleteVisible ? "block" : "none" }}
        >
          <div className="autocomplete-result">
            Auto complete results....{searchTerm}
          </div>
          {moviesList.length > 0 &&
            moviesList.map((movie) => (
              <div
                key={movie.imdbID}
                className="autocomplete-result"
                onMouseDown={(e) => handleAutoCompleteClick(e, movie.imdbID)}
              >
                {movie.Title}
              </div>
            ))}
        </div>
      </div>
      <div onClick={updateTheme}>
        <FontAwesomeIcon
          className="theme-icon"
          icon={theme == "dark" ? faSun : faMoon}
        />
      </div>
    </div>
  );
}

export default Navbar;
