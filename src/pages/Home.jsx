import React from "react";
import Moviecard from "../components/Moviecard/Moviecard";
import "./Home.css";

const moviesList = [
  {
    Title: "One Piece",
    Year: "1999–",
    Rated: "TV-14",
    Released: "20 Oct 1999",
    Runtime: "24 min",
    Genre: "Animation, Action, Adventure",
    Director: "N/A",
    Writer: "Eiichirô Oda",
    Actors: "Mayumi Tanaka, Akemi Okamura, Laurent Vernin",
    Plot: 'Monkey D. Luffy sets off on an adventure with his pirate crew in hopes of finding the greatest treasure ever, known as the "One Piece."',
    Language: "Japanese",
    Country: "Japan",
    Awards: "6 wins & 13 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_SX300.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "9.0/10" }],
    Metascore: "N/A",
    imdbRating: "9.0",
    imdbVotes: "286,979",
    imdbID: "tt0388629",
    Type: "series",
    totalSeasons: "1",
    Response: "True",
  },
  {
    Title: "Anora",
    Year: "2024",
    Rated: "R",
    Released: "08 Nov 2024",
    Runtime: "139 min",
    Genre: "Comedy, Drama, Romance",
    Director: "Sean Baker",
    Writer: "Sean Baker",
    Actors: "Mikey Madison, Paul Weissman, Yura Borisov",
    Plot: "A young escort from Brooklyn meets and impulsively marries the son of a Russian oligarch. Once the news reaches Russia, her fairy tale is threatened as his parents set out for New York to get the marriage annulled.",
    Language: "English, Russian, Armenian",
    Country: "United States",
    Awards: "Won 5 Oscars. 144 wins & 267 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYThiN2M0NTItODRmNC00NDhlLWFiYTgtMWM2YTEyYzI3ZTY1XkEyXkFqcGc@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.8/10" },
      { Source: "Rotten Tomatoes", Value: "93%" },
      { Source: "Metacritic", Value: "91/100" },
    ],
    Metascore: "91",
    imdbRating: "7.8",
    imdbVotes: "122,308",
    imdbID: "tt28607951",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "$16,300,129",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "The Brutalist",
    Year: "2024",
    Rated: "R",
    Released: "24 Jan 2025",
    Runtime: "216 min",
    Genre: "Drama",
    Director: "Brady Corbet",
    Writer: "Brady Corbet, Mona Fastvold",
    Actors: "Adrien Brody, Felicity Jones, Guy Pearce",
    Plot: "When a visionary architect and his wife flee post-war Europe in 1947 to rebuild their legacy and witness the birth of modern United States, their lives are changed forever by a mysterious, wealthy client.",
    Language: "English, Hungarian, Italian, Hebrew, Yiddish",
    Country: "United States, United Kingdom, Canada",
    Awards: "Won 3 Oscars. 136 wins & 340 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BM2U0MWRjZTMtMDVhNC00MzY4LTgwOTktZGQ2MDdiYTI4OWMxXkEyXkFqcGc@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.5/10" },
      { Source: "Rotten Tomatoes", Value: "93%" },
      { Source: "Metacritic", Value: "90/100" },
    ],
    Metascore: "90",
    imdbRating: "7.5",
    imdbVotes: "65,135",
    imdbID: "tt8999762",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "$16,025,241",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
];

function Home() {
  return (
    <div className="movie-card-wrapper">
      {moviesList.length > 0 &&
        moviesList.map((movie) => <Moviecard {...movie} />)}
    </div>
  );
}

export default Home;
