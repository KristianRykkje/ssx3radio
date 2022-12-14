import Head from "next/head";
import { useState, useEffect, useRef, MutableRefObject } from "react";
import Credit from "../Credit";
import Library from "../Library";
import Nav from "../Nav";
import Player from "../Player";
import Song from "../Song";
import { getMetaDataByName } from "./data";
import { getSongs, getTrackUrlFromData } from "./helpers";
import { RadioContainer } from "./styles";
import { ISong, ISongInfo } from "./types";

const Radio = () => {
  const [songs, setSongs] = useState<ISong[]>([]);

  useEffect(() => {
    const loadsongs = async () => {
      const songsDataArr = [];
      const data = await getSongs();

      for (let i = 0; i < data.length; i++) {
        const songData = data[i];
        const metaData = getMetaDataByName(songData.name);
        const trackUrl = getTrackUrlFromData(songData.name);
        const coverUrl = "/ssx3cover.jpg";
        const song = {
          ...songData,
          ...metaData,
          trackUrl,
          coverUrl,
          active: false,
        };
        if (i === 0) {
          song.active = true;
        }
        songsDataArr.push(song);
      }

      setSongs(songsDataArr);
    };

    loadsongs();
  }, []);

  const setNewActiveSong = (newSong: ISong) => {
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

  const audioRef = useRef() as MutableRefObject<HTMLAudioElement>;

  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songInfo, setSongInfo] = useState<ISongInfo>({
    currentTime: 0,
    duration: 0,
  });

  const updateTimeHandler = (e: any) => {
    if (e.target) {
      const current = e.target.currentTime;
      const duration = e.target.duration;
      setSongInfo({ ...songInfo, currentTime: current, duration });
    }
  };

  const onEndedHandler = () => {
    const currentIndex = songs.findIndex((track: ISong) => track.active);
    const isLastSong = currentIndex === songs.length - 1;
    const nextSong = isLastSong ? songs[0] : songs[currentIndex + 1];

    setNewActiveSong(nextSong);
  };

  const currentSong = songs.find((song) => song.active);

  return (
    <RadioContainer libraryStatus={libraryStatus}>
      <Head>
        <title>SSX 3 Radio Big</title>
        <meta name="description" content="SSX 3 Radio Big" />
      </Head>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setNewActiveSong}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        setCurrentSong={setNewActiveSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <Credit />
      <audio
        autoPlay={true}
        onPlay={() => setIsPlaying(true)}
        onLoadedMetadata={updateTimeHandler}
        onTimeUpdate={updateTimeHandler}
        onEnded={onEndedHandler}
        ref={audioRef}
        src={currentSong?.trackUrl?.publicUrl}
      />
    </RadioContainer>
  );
};

export default Radio;
