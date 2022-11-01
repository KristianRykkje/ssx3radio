import React, { ChangeEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import * as st from "./styles";
import { IPlayerProps, ISkipDirection } from "./types";
import { ISong } from "../Radio/types";

// style
const pointer = { cursor: "pointer" };

const Player: React.FC<IPlayerProps> = ({
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  setSongs,
}) => {
  // Event handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current?.play();
      setIsPlaying(!isPlaying);
    }
  };

  const togglePlayPauseIcon = () => {
    if (isPlaying) {
      return faPause;
    } else {
      return faPlay;
    }
  };

  const getTime = (time: number) => {
    let minute = Math.floor(time / 60);
    let second = ("0" + Math.floor(time % 60)).slice(-2);
    return `${minute}:${second}`;
  };

  const dragHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
      setSongInfo({ ...songInfo, currentTime: Number(e.target.value) });
    }
  };

  const skipTrackHandler = (direction: ISkipDirection) => {
    const currentIndex = songs.findIndex(
      (track: ISong) => track.name === currentSong.name
    );
    const isLastSong = currentIndex === songs.length - 1;
    const isFirstSong = currentIndex === 0;
    if (direction === ISkipDirection.SkipForward) {
      const nextSong = isLastSong ? songs[0] : songs[currentIndex + 1];
      setCurrentSong(nextSong);
      activeLibraryHandler(nextSong);
    } else if (direction === ISkipDirection.SkipBack) {
      const nextSong = isFirstSong
        ? songs[songs.length - 1]
        : songs[currentIndex - 1];
      setCurrentSong(nextSong);
      activeLibraryHandler(nextSong);
    }
    if (isPlaying) {
      audioRef.current?.play();
    }
  };

  const activeLibraryHandler = (newSong: ISong) => {
    const newSongs = songs.map((song) => {
      if (song.id === newSong.id) {
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
  };

  return (
    <st.PlayerContainer>
      <st.TimeControlContainer>
        <st.P>{getTime(songInfo.currentTime || 0)}</st.P>
        <st.Track currentSong={currentSong}>
          <st.Input
            onChange={dragHandler}
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            type="range"
          />
          <st.AnimateTrack songInfo={songInfo}></st.AnimateTrack>
        </st.Track>

        <st.P>{getTime(songInfo.duration || 0)}</st.P>
      </st.TimeControlContainer>

      <st.PlayControlContainer>
        <FontAwesomeIcon
          onClick={() => skipTrackHandler(ISkipDirection.SkipBack)}
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
          style={pointer}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          icon={togglePlayPauseIcon()}
          size="2x"
          style={pointer}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler(ISkipDirection.SkipForward)}
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
          style={pointer}
        />
      </st.PlayControlContainer>
    </st.PlayerContainer>
  );
};

export default Player;
