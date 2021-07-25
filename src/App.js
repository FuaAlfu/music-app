import React, {useState, useRef} from 'react';
import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import data from './util';

function App() {
  //Ref
  const audioRef = useRef(null);
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo,setSongInfo] = useState({
    currentTime: 0,  //currentTime: null
    duration: 0,  //same name :: duration: null
});
const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;  //same name
 //setSongInfo({...setSongInfo,currTime: current, duration: duration})  //same name duration, so type it for once
 setSongInfo({...songInfo,currentTime: current, duration});
  //console.log(e);
};
  return (
    <div className="App">
      <h1 className="title">music player</h1>
     <Song currentSong={currentSong} />
     <Player
      audioRef={audioRef}
      setIsPlaying={setIsPlaying}
      isPlaying={isPlaying} 
      currentSong={currentSong} 
      setSongInfo={setSongInfo}
      songInfo={songInfo}
      />
     <Library 
     audioRef={audioRef}
     songs={songs} 
     setCurrentSong={setCurrentSong}
     isPlaying={isPlaying}
     setSongs={setSongs}
    />
     <audio 
     onTimeUpdate={timeUpdateHandler} 
     onLoadedMetadata={timeUpdateHandler} 
     ref={audioRef} src={currentSong.audio}
     >
     </audio>
    </div>
  );
}

export default App;
