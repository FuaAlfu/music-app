import React, {useState, useEffect} from 'react';
import './styles/app.scss'
import Player from './components/Player';
import Song from './components/Song';
import data from './util';

function App() {
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <h1 className="title">music player</h1>
     <Song currentSong={currentSong} />
     <Player />
    </div>
  );
}

export default App;
