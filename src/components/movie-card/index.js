import React from "react";

// poster_path /b6IRp6Pl2Fsq37r9jFhGoLtaqHm.jpg
// title
// vote_average


const MovieCard = ({movie, selectMovie}) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

    return (
        <div className="movie-container" onClick={() => selectMovie(movie)}>
            {
                movie.poster_path 
                ? <img className="movie-cover" src={IMAGE_PATH + movie.poster_path} alt={movie.title}/>
                : <div className="movie-placeholder">No Image Found</div>
            }
            <h5 className="movie-title">{movie.title}</h5>
            <p className="movie-vote" title={'votes: ' + movie.vote_count}>{movie.vote_average}</p>
        </div>
    );
}

export default MovieCard;