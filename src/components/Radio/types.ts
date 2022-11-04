import { ISong } from "@src/types/ISong";

export interface ISongInfo {
  currentTime: number;
  duration: number;
}

export interface IRadioProps {
  songsData: ISong[];
}
