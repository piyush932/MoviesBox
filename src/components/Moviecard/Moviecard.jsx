import React from "react";
import ReactSVG from "../../assets/react.svg";
import "./Moviecard.css";
import { Link } from "react-router-dom";

function Moviecard({ Title, Year, Type, Poster, id }) {
  return (
    <div className="movie-grid">
      <div className="movie-wrapper">
        <div className="movie-image">
          <Link to={`/movie/${id}`} key={id}>
            <img key={Poster} src={Poster} placeholdersrc={ReactSVG} />
          </Link>
        </div>
        <div className="movie-title">
          <h5>{Title}</h5>
        </div>
        <div className="movie-year">
          <span>Released in: {Year}</span>
        </div>
        <div className="movie-type">
          <span>Type: {Type}</span>
        </div>
      </div>
    </div>
  );
}

export default Moviecard;
