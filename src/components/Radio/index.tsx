import Head from "next/head";
import { useState, useEffect, useRef, MutableRefObject } from "react";
import Credit from "../Credit";
import Library from "../Library";
import Nav from "../Nav";
import Player from "../Player";
import Song from "../Song";
import { getSongs, getTrackUrlFromData } from "./helpers";
import { RadioContainer } from "./styles";
import { ISongInfo } from "./types";

const Radio = () => {
  const [songs, setSongs] = useState<any>(null);
  const [currentSong, setCurrentSong] = useState<any>(null);

  useEffect(() => {
    const loadsongs = async () => {
      const data = await getSongs();
      setSongs(data);
      setCurrentSong(data?.[0]);
    };

    loadsongs();
  }, []);

  const audioRef = useRef() as MutableRefObject<HTMLAudioElement>;

  // State
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songInfo, setSongInfo] = useState<ISongInfo>({
    currentTime: 0,
    duration: 0,
  });

  // Functions
  const updateTimeHandler = (e: any) => {
    if (e.target) {
      const current = e.target.currentTime;
      const duration = e.target.duration;
      setSongInfo({ ...songInfo, currentTime: current, duration });
    }
  };

  const onEndedHandler = () => {
    const currentIndex = songs.findIndex(
      (track: any) => track.name === currentSong
    );
    if (currentIndex === songs.length - 1) {
      setCurrentSong(songs[0].name);
      return;
    }
    setCurrentSong(songs[currentIndex + 1].name);
  };

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
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
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
        src={getTrackUrlFromData(currentSong?.name)?.publicUrl}
      />
    </RadioContainer>
  );
};

export default Radio;
