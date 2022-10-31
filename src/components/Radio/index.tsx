import { useState, useEffect, useRef, MutableRefObject } from "react";
import { Header } from "../Header";
import { PlayAnimationButton } from "../PlayAnimationButton";
import { getAudioData, getTrackUrlFromData } from "./helpers";
import { StyledContainer } from "./styles";

const Radio = () => {
  const [audioData, setAudioData] = useState<any>(null);
  const [currentTrack, setCurrentTrack] = useState<any>(null);

  useEffect(() => {
    const loadAudioData = async () => {
      const data = await getAudioData();
      setAudioData(data);
      setCurrentTrack(data?.[0]?.name);
    };

    loadAudioData();
  }, []);

  const audioRef: MutableRefObject<HTMLAudioElement | null> = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);

  const playTrackHandler = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  const timeUpdateHandler = (e: any) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setProgress((current / duration) * 100);
  };

  const dragHandler = (e: any) => {
    audioRef.current!.currentTime =
      (e.target.value / 100) * audioRef.current!.duration;
    setProgress(e.target.value);
  };

  const skipTrackHandler = (direction: string) => {
    const currentIndex = audioData.findIndex(
      (track: any) => track.name === currentTrack
    );
    if (direction === "skip-forward") {
      setCurrentTrack(
        getTrackUrlFromData(audioData[currentIndex + 1].name).data.publicUrl
      );
    }
    if (direction === "skip-back") {
      if ((audioRef.current!.currentTime as number) > 3) {
        audioRef.current!.currentTime = 0;
      } else {
        setCurrentTrack(
          getTrackUrlFromData(audioData[currentIndex - 1].name).data.publicUrl
        );
      }
    }
  };

  const onEndedHandler = () => {
    const currentIndex = audioData.findIndex(
      (track: any) => track.name === currentTrack
    );
    if (currentIndex === audioData.length - 1) {
      setCurrentTrack(audioData[0].name);
      return;
    }
    setCurrentTrack(audioData[currentIndex + 1].name);
  };

  return (
    <StyledContainer>
      <Header />
      <PlayAnimationButton
        isPlaying={isPlaying}
        playTrackHandler={playTrackHandler}
      />

      <audio
        ref={audioRef}
        className="w-full h-full"
        src={getTrackUrlFromData(currentTrack).data.publicUrl}
        autoPlay={true}
        onPlay={() => setIsPlaying(true)}
        controls={true}
        onEnded={(_e) => {
          onEndedHandler();
        }}
      ></audio>

      {/* List whole audioData */}
      <select onChange={(e) => setCurrentTrack(e.target.value)}>
        {audioData?.map((track: any) => (
          <option
            key={getTrackUrlFromData(track.name).data.publicUrl}
            value={track.name}
          >
            {track.name}
          </option>
        ))}
      </select>
    </StyledContainer>
  );
};

export default Radio;
