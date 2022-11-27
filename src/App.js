import React, { useEffect, useState} from 'react';
import './App.css';
import { getByName, getWithVideos, pageTypesMap } from './api/api';
import { MovieList } from './components/movie-list';
import { Header } from './components/header';
import { Player } from './components/player';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [selectedMovie, setSelectedMovie] = useState();
  const [page, setPage] = useState(1);
  const [pageType, setPageType] = useState(Object.keys(pageTypesMap)[0]);

  const selectMovieWithVideo = async (movie) => {
    const data = await getWithVideos(movie.id);
    setSelectedMovie(data);
    console.log(data);
  }

  useEffect( () => {
    async function callApi() {
      const results = await pageTypesMap[pageType]();
      selectMovieWithVideo(results[0]);
      console.log(results);
      setMovies(results);
    }
    callApi();
  }, [pageType]);

  useEffect( () => {
    async function callApi() {
      const results = await await pageTypesMap[pageType](page);
      selectMovieWithVideo(results[0]);
      console.log(results);
      setMovies([...movies, ...results]);
    }
    callApi();
  }, [page]);

  const searchMovies = async (e) => {
    e.preventDefault();
    const results = await getByName(searchKey);
    setMovies(results);
    selectMovieWithVideo(results[0]);
  }

  return (
    <div className="App">
      <Header 
        searchMovies={searchMovies} 
        setSearchKey={setSearchKey} 
      />

      {Object.keys(pageTypesMap).map(item => {
        return <button 
          className={item === pageType && 'page-type-current'}
          onClick={() => setPageType(item)}
          key={item}
        >
          {item}
        </button>
      })}

      <Player selectedMovie={selectedMovie} />

      <MovieList 
        movies={movies} 
        selectMovieWithVideo={selectMovieWithVideo}
        onLoadMore={() => setPage(page + 1)}
      />
    </div>
  );
}

export default App;
