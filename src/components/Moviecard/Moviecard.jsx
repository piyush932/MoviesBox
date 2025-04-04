import React from "react";
import ReactSVG from '../../assets/react.svg';

function Moviecard({ Title, Year, Type, Poster, id }) {
  return (
    <div className="movie-wrapper">
      <div className="movie-image">
        <img
          key={Poster}
          src={Poster} 
          placeholderSrc={ReactSVG}
        />
      </div>
      <div className="movie-title">
        <span>{Title}</span>
      </div>
      <div className="movie-year">
        <span>Released in: {Year}</span>
      </div>
      <div className="movie-type">
        <span>Type: {Type}</span>
      </div>
    </div>
  );
}

export default Moviecard;
