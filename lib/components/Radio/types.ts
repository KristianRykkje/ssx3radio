import { ISong } from "@lib/types/ISong";

export interface ISongInfo {
  currentTime: number;
  duration: number;
}

export interface IRadioProps {
  songsData: ISong[];
}
