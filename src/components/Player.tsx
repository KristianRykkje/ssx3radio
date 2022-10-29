import React from "react";

interface IPlayerProps {
  currentTrack: any;
  isPlaying: boolean;
  playTrackHandler: () => void;
  skipTrackHandler: (direction: string) => void;
  progress: number;
  dragHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formatTime: (time: number) => string;
  duration: number;
  currentTime: number;
  volume: number;
  volumeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  muteHandler: () => void;
  isMuted: boolean;
  loopHandler: () => void;
  isLooping: boolean;
  shuffleHandler: () => void;
  isShuffling: boolean;
  fullscreenHandler: () => void;
  isFullscreen: boolean;
}

const Player: React.FC<IPlayerProps> = ({
  currentTrack,
  isPlaying,
  playTrackHandler,
  skipTrackHandler,
  progress,
  dragHandler,
  formatTime,
  duration,
  currentTime,
  volume,
  volumeHandler,
  muteHandler,
  isMuted,
  loopHandler,
  isLooping,
  shuffleHandler,
  isShuffling,
  fullscreenHandler,
  isFullscreen,
}) => {
  return (
    <div className="c-player">
      <div className="c-player__track">
        <img src={currentTrack?.cover} alt={currentTrack?.name} />
        <h2>{currentTrack?.name}</h2>
        <h3>{currentTrack?.artist}</h3>
      </div>
      <div className="c-player__controls">
        <div className="c-player__controls-time">
          <p>{formatTime(currentTime)}</p>
          <input
            type="range"
            min={0}
            max={duration || 0}
            value={progress}
            onChange={dragHandler}
          />
          <p>{formatTime(duration)}</p>
        </div>
        <div className="c-player__controls-buttons">
          <button onClick={() => skipTrackHandler("skip-back")}>
            <img src="/skip-back.svg" alt="Skip Back" />
          </button>
          <button onClick={playTrackHandler}>
            <img src={isPlaying ? "/pause.svg" : "/play.svg"} alt="Play" />
          </button>
          <button onClick={() => skipTrackHandler("skip-forward")}>
            <img src="/skip-forward.svg" alt="Skip Forward" />
          </button>
        </div>
      </div>
      <div className="c-player__volume">
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={volumeHandler}
        />
        <button onClick={muteHandler}>
          <img src={isMuted ? "/volume-mute.svg" : "/volume.svg"} alt="Mute" />
        </button>
      </div>
      <div className="c-player__options">
        <button onClick={loopHandler}>
          <img
            src={isLooping ? "/repeat-active.svg" : "/repeat.svg"}
            alt="Repeat"
          />
        </button>
        <button onClick={shuffleHandler}>
          <img
            src={isShuffling ? "/shuffle-active.svg" : "/shuffle.svg"}
            alt="Shuffle"
          />
        </button>
        <button onClick={fullscreenHandler}>
          <img
            src={isFullscreen ? "/fullscreen-exit.svg" : "/fullscreen.svg"}
            alt="Fullscreen"
          />
        </button>
      </div>
    </div>
  );
};

export default Player;
