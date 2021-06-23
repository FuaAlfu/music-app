import React, {useState,useRef} from 'react';
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome';
import {faPlay,
        faAngleLeft,
        faAngleRight,
    } from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
     //Ref
     const audioRef = useRef(null);
    //Event Handlers
    const playSongHandler = () => {
        //test
       //console.log(audioRef.current);
       if(isPlaying){
       //invoke
       audioRef.current.pause();
       setIsPlaying(!isPlaying);
       }else{
       //invoke
       audioRef.current.play();
       setIsPlaying(!isPlaying);
       }
    };
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;  //same name
       //setSongInfo({...setSongInfo,currTime: current, duration: duration})  //same name duration, so type it for once
       setSongInfo({...songInfo,currentTime: current, duration});
        //console.log(e);
    };
    const getTime = (time) => {
        //format time
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
            ); 
    };
    //state
    const [songInfo,setSongInfo] = useState({
        currentTime: null,
        duration: null,  //same name
    });
    return(
       <div className="player">
          <div className="time-control">
              <p>{getTime(songInfo.currentTime)}</p>
              <input type="range"/>
              <p>{getTime(songInfo.duration)}</p>
          </div>
          <div className="play-control">
          <FontAwesomeIcon  className="skip-back" size="2x" icon={faAngleLeft}/>
          <FontAwesomeIcon onClick={playSongHandler}  className="play" size="2x" icon={faPlay}/>
          <FontAwesomeIcon  className="skip-forward" size="2x" icon={faAngleRight}/>
          </div>
          <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
       </div>
        );
};

export default Player;
