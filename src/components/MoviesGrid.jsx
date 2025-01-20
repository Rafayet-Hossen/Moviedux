import React, { useEffect, useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";
const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [genre, setGenre] = useState("All Genres");

  const [rating, setRating] = useState("All");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  }

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  }

  const matchesGenre = (movie,genre) => {
    return genre === "All Genres" || movie.genre.toLowerCase() === genre.toLowerCase();
  }

  const matchesSearchTerm = (movie,searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
  const filteredMovies = movies.filter((movie) =>
    matchesGenre(movie,genre) && matchesSearchTerm(movie,searchTerm)
  );
  
 
  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <input
        type="text"
        className="search-input text-gray-600"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            name=""
            id=""
            className="text-gray-600 filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>

        <div className="filter-slot">
          <label className="">Rating</label>
          <select
            name=""
            id=""
            className="text-gray-600 filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option value="">All</option>
            <option value="">Good</option>
            <option value="">Ok</option>
            <option value="">Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MoviesGrid;
