import React from "react";
import LibrarySong from "../LibrarySong";
import * as st from "./styles";
import { ILibraryProps } from "./types";

const Library: React.FC<ILibraryProps> = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <st.LibraryContainer libraryStatus={libraryStatus}>
      <st.H2>Library</st.H2>
      <st.SongContainer>
        {songs?.map((song) => (
          <LibrarySong
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </st.SongContainer>
    </st.LibraryContainer>
  );
};

export default Library;
