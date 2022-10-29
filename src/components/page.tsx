"use client";
import styles from "./page.module.css";
import { radioData } from "./data";
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  MutableRefObject,
  AudioHTMLAttributes,
} from "react";
import { createClient } from "@supabase/supabase-js";
import Nav from "./Nav";
import Player from "./Player";
import Library from "./Library";
import Playlist from "./Playlist";
import Settings from "./Settings";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://uiocwfaqmetqkvbvmptu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpb2N3ZmFxbWV0cWt2YnZtcHR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjcwMjcwMjksImV4cCI6MTk4MjYwMzAyOX0.9FA5Q4gVqdjPDeW9Q9Q4u7IfJEesoA75zGm7GVJM5wY"
);

const getAudioData = async () => {
  const { data, error } = await supabase.storage.getBucket("music");
  console.log("🚀 ~ file: page.tsx ~ line 27 ~ getAudioData ~ data", data);

  if (error) {
    console.log("error", error);
  }

  return data;
};

function App() {
  const [audioData, setAudioData] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  const audioRef = useRef() as MutableRefObject<HTMLAudioElement>;
  const intervalRef = useRef(null);
  const nextTrackIndexRef = useRef(0);

  const skipTrackHandler = useCallback(async () => {
    if (nextTrackIndexRef.current > audioData.length - 1) {
      setCurrentTrack(audioData[0]);
      nextTrackIndexRef.current = 0;
    } else {
      setCurrentTrack(audioData[nextTrackIndexRef.current]);
    }
    if (isPlaying) audioRef.current.play();
  }, [audioData, isPlaying]);

  useEffect(() => {
    loadAudioData();
  }, []);

  useEffect(() => {
    if (audioRef) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, audioRef]);

  useEffect(() => {
    audioRef.current.volume = volume;
    audioRef.current.muted = isMuted;
  }, [volume, isMuted]);

  useEffect(() => {
    if (isLooping) {
      audioRef.current.loop = true;
    } else {
      audioRef.current.loop = false;
    }
  }, [isLooping]);

  useEffect(() => {
    if (isShuffling) {
      const newIndex = Math.floor(Math.random() * audioData.length);
      nextTrackIndexRef.current = newIndex;
    } else {
      nextTrackIndexRef.current = currentTrack?.index + 1;
    }
  }, [isShuffling]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", () => {
        setProgress((audioRef.current.currentTime / duration) * 100);
        setCurrentTime(audioRef.current.currentTime);
      });
      audioRef.current.addEventListener("loadeddata", () => {
        setDuration(audioRef.current.duration);
      });
      audioRef.current.addEventListener("ended", () => {
        skipTrackHandler();
      });
    }
  }, [currentTrack, duration, skipTrackHandler]);

  const loadAudioData = async () => {
    const audioData = await getAudioData();
    console.log(
      "🚀 ~ file: page.tsx ~ line 99 ~ loadAudioData ~ audioData",
      audioData
    );
    const newAudioData = audioData.map((track, index) => {
      return {
        name: track.name,
        cover: "/images/cover.jpg",
        artist: "Artist",
        audio: track.url,
        color: ["#EF476F", "#FFD166"],
        id: index,
        active: false,
      };
    });
    setAudioData(newAudioData);
    setCurrentTrack(newAudioData[0]);
  };

  const playTrackHandler = () => {
    if (audioRef) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(!isPlaying);
      } else {
        audioRef.current.play();
        setIsPlaying(!isPlaying);
      }
    }
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = (e.target.value * duration) / 100;
    setProgress(e.target.value);
  };

  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const activeLibraryHandler = (nextPrev) => {
    const newAudioData = audioData.map((track) => {
      if (track.id === nextPrev.id) {
        return {
          ...track,
          active: true,
        };
      } else {
        return {
          ...track,
          active: false,
        };
      }
    });
    setAudioData(newAudioData);
  };

  const volumeHandler = (e) => {
    setVolume(e.target.value);
    setIsMuted(false);
  };

  const muteHandler = () => {
    setIsMuted(!isMuted);
  };

  const loopHandler = () => {
    setIsLooping(!isLooping);
  };

  const shuffleHandler = () => {
    setIsShuffling(!isShuffling);
  };

  const openPlaylistHandler = () => {
    setIsPlaylistOpen(!isPlaylistOpen);
  };

  const openSettingsHandler = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const openLibraryHandler = () => {
    setIsLibraryOpen(!isLibraryOpen);
  };

  const fullscreenHandler = () => {
    if (isFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    } else {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    }
  };

  return (
    <div className="App">
      {/* //   <Nav
    //     isPlaying={isPlaying}
    //     playTrackHandler={playTrackHandler}
    //     openPlaylistHandler={openPlaylistHandler}
    //     openSettingsHandler={openSettingsHandler}
    //     openLibraryHandler={openLibraryHandler}
    //   />
    //   <Player
    //     currentTrack={currentTrack}
    //     isPlaying={isPlaying}
    //     playTrackHandler={playTrackHandler}
    //     skipTrackHandler={skipTrackHandler}
    //     progress={progress}
    //     dragHandler={dragHandler}
    //     formatTime={formatTime}
    //     duration={duration}
    //     currentTime={currentTime}
    //     volume={volume}
    //     volumeHandler={volumeHandler}
    //     muteHandler={muteHandler}
    //     isMuted={isMuted}
    //     loopHandler={loopHandler}
    //     isLooping={isLooping}
    //     shuffleHandler={shuffleHandler}
    //     isShuffling={isShuffling}
    //     fullscreenHandler={fullscreenHandler}
    //     isFullscreen={isFullscreen}
    //   />
    //   <Library
    //     audioData={audioData}
    //     setCurrentTrack={setCurrentTrack}
    //     isLibraryOpen={isLibraryOpen}
    //     activeLibraryHandler={activeLibraryHandler}
    //   />
    //   <Playlist
    //     audioData={audioData}
    //     setCurrentTrack={setCurrentTrack}
    //     isPlaylistOpen={isPlaylistOpen}
    //     activeLibraryHandler={activeLibraryHandler}
    //   />
    //   <Settings
    //     isSettingsOpen={isSettingsOpen}
    //     volume={volume}
    //     volumeHandler={volumeHandler}
    //     muteHandler={muteHandler}
    //     isMuted={isMuted}
    //     loopHandler={loopHandler}
    //     isLooping={isLooping}
    //     shuffleHandler={shuffleHandler}
    //     isShuffling={isShuffling}
    //   />*/}
      <audio ref={audioRef} src={currentTrack?.audio}></audio>
    </div>
  );
}

export default App;
