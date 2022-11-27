import React from "react";

export const Header = ({searchMovies, setSearchKey}) => {
    return (      
        <header className='header'>
            <h1>Movie App</h1>
            <form className="search-form" onSubmit={searchMovies}>
                <input className="search-field" type="text" onChange={(e) => setSearchKey(e.target.value)}/>
                <button className="search-button" type="submit">Search</button>
            </form>
        </header>
  );
}