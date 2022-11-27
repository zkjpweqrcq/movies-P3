import React from "react";
import MovieCard from "../movie-card";

export const MovieList = ({ movies, selectMovieWithVideo, onLoadMore }) => {
    return (
        <div className="container">
            {movies.map(movie => 
                <MovieCard 
                    key={movie.id} 
                    movie={movie} 
                    selectMovie={selectMovieWithVideo}
                />
            )}
            <button className="btn-load-more" onClick={onLoadMore}>Load More</button>
        </div>
    );
}
