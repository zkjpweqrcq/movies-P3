import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { IMAGE_PATH } from "../../api/api";

export const Player = ({selectedMovie}) => {
    const [playTrailer, setPlayTrailer] = useState(false);

    useEffect(() => {
        setPlayTrailer(false);
    }, [selectedMovie]);

    const renderTrailer = () => {
      const { results } = selectedMovie.videos;
      const trailer = results.length ? results.find(vid => vid.name === 'Official Trailer') : { key: 'xkfrrkqlKGE' };
      const key = trailer ? trailer.key : selectedMovie.videos.results[0].key;
      
        return (<YouTube videoId={key} className="youtube-container" opts={{
          width: '100%',
          height: '100%',
          playerVars: {
            controls: 0,
            autoplay: 1,
            disablekb: 1,
          }
        }}/>);
      }

    return (      
        <div className="hero" style={{
            backgroundImage: `url(${IMAGE_PATH}${selectedMovie ? selectedMovie.backdrop_path : '/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg'})`
        }}>
            <div className="content">
            {selectedMovie && selectedMovie.videos && playTrailer && renderTrailer()}
            <button className="button" onClick={() => setPlayTrailer(true) }>Play Trailer</button>
            <h1 className='title'>{selectedMovie ? selectedMovie.title : 'No title'}</h1>
            <p className='overview'>{selectedMovie ? selectedMovie.overview : 'No overview'}</p>
            </div>
        </div>
      );
}