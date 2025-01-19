import React from 'react';

const MovieCard = ({movie}) => {
    const {id,image,title,genre,rating} = movie;
    return (
      <div key={id} className="movie-card">
        <img src={`images/${image}`} alt="" />
        <div className="movie-card-info">
          <h3 className="movie-card-title">{title}</h3>
          <p className="movie-card-genre">{genre}</p>
          <p className="movie-card-rating">{rating}</p>
        </div>
      </div>
    );
};

export default MovieCard;