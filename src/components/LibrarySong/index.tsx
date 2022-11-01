import React from "react";
import * as st from "./styles";
import { ILibrarySongProps } from "./types";

const LibrarySong: React.FC<ILibrarySongProps> = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  // Function
  const songSelectHandler = () => {
    setCurrentSong(song);
    const curSong = song;
    const songList = songs;

    const newSongs = songList.map((song) => {
      if (song.id === curSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);

    // check if user is wanting to play a song.
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
  };

  return (
    <st.LibrarySongContainer onClick={songSelectHandler} isActive={song.active}>
      <st.Img src={song.cover} alt={song.name}></st.Img>
      <st.LibrarySongDescription>
        <st.H1>{song.name}</st.H1>
        <st.H2>{song.artist}</st.H2>
      </st.LibrarySongDescription>
    </st.LibrarySongContainer>
  );
};

export default LibrarySong;
