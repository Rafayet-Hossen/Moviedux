import React from "react";

const MovieCard = ({ movie }) => {
  const { id, image, title, genre, rating } = movie;

  const handleError = (event) => {
    event.target.src = "images/default.jpg";
  };

  const getRating = (rating) => {
    if(rating >= 8){
        return 'rating-good'
    }
    else if(rating<8 && rating>=5){
        return 'rating-ok'
    }
    else{
        return 'rating-bad'
    }
  }
  return (
    <div key={id} className="movie-card">
      <img src={`images/${image}`} alt="" onError={handleError} />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{title}</h3>
        <p className="movie-card-genre">{genre}</p>
        <p className={`movie-card-rating ${getRating(rating)}`}>{rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
