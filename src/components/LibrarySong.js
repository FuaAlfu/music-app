import React from 'react';

const LibrarySong = () => {
    return(
       <div className="Library-song">
        <img alt={currentSong.name} src={currentSong.cover}/>
       <h3>{currentSong.name}</h3>
       <h3>{currentSong.artist}</h3>
       </div>
        )
}

export default LibrarySong;
