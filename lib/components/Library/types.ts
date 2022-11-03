import { ISong } from "@lib/types/ISong";

export interface ILibraryProps {
  songs: ISong[];
  setCurrentSong: (song: ISong) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  setSongs: (songs: ISong[]) => void;
  libraryStatus: boolean;
}
