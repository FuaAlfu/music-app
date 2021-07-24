import React from 'react';

const LibrarySong = ({song,songs,setCurrentSong,id,audioRef,isPlaying}) => {
    const songSelectedHandler = () =>{
        /*
        const selectedSong = songs.filter((state) => state.id === id);
        console.log(id);
        setCurrentSong(selectedSong[0]);
        */
        setCurrentSong(song);
        // check if the song is playing
        if(isPlaying){
            const playPromise = audioRef.current.play();
            //audioRef.current.play();
            if(playPromise !== undefined){ //not loaded yet..
                playPromise.then((audio) => {
                    audioRef.current.play();
                });
            }
        }  
    };
    return(
       <div onClick={songSelectedHandler} className="library-song">
        <img alt={song.name} src={song.cover}/>
        <div className="song-description">
       <h3>{song.name}</h3>
       <h3>{song.artist}</h3>
       </div>
       </div>
        )
}

export default LibrarySong;
