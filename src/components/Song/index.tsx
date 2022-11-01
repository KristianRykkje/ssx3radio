import React from "react";
import * as st from "./styles";
import { ISongProps } from "./types";

const Song: React.FC<ISongProps> = ({ currentSong }) => {
  return (
    <st.SongContainer>
      <st.Img src={currentSong?.cover} alt={currentSong?.name}></st.Img>
      <st.H1>{currentSong?.name}</st.H1>
      <st.H2>{currentSong?.artist}</st.H2>
    </st.SongContainer>
  );
};

export default Song;
