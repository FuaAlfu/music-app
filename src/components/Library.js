import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({songs}) =>{
    return(
       <div className="library">
           <h2>library</h2>
           <div className="library-song">
                {songs.map(song => <LibrarySong song={song}/>)}
           </div>
       </div>
    )
}


export default Library