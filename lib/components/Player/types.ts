import { ISong } from "@lib/types/ISong";
import { ISongInfo } from "../Radio/types";

export interface IPlayerProps {
  currentSong?: ISong;
  setCurrentSong: (song: ISong) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
  songInfo: ISongInfo;
  setSongInfo: (songInfo: ISongInfo) => void;
  songs: ISong[];
  setSongs: (songs: ISong[]) => void;
}

export enum ISkipDirection {
  SkipBack = "skip-back",
  SkipForward = "skip-forward",
}
