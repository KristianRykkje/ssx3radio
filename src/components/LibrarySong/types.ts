import { ISong } from "@src/types/ISong";

export interface ILibrarySongProps {
  song: ISong;
  setCurrentSong: (song: ISong) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  songs: ISong[];
  setSongs: (songs: ISong[]) => void;
}
