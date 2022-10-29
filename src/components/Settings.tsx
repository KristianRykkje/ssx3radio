import React from "react";

interface ISettingsProps {
  isSettingsOpen: boolean;
  volume: number;
  volumeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  muteHandler: () => void;
  isMuted: boolean;
  loopHandler: () => void;
  isLooping: boolean;
  shuffleHandler: () => void;
  isShuffling: boolean;
}

const Settings: React.FC<ISettingsProps> = ({
  isSettingsOpen,
  volume,
  volumeHandler,
  muteHandler,
  isMuted,
  loopHandler,
  isLooping,
  shuffleHandler,
  isShuffling,
}) => {
  return (
    <div className={`c-settings ${isSettingsOpen ? "active" : ""}`}>
      <div className="c-settings__volume">
        <div className="c-settings__volume-icon">
          <i className="fas fa-volume-up"></i>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={volumeHandler}
        />
        <div className="c-settings__volume-icon">
          <i className="fas fa-volume-mute" onClick={muteHandler}></i>
        </div>
      </div>
      <div className="c-settings__loop">
        <i
          className={`fas fa-redo-alt ${isLooping ? "active" : ""}`}
          onClick={loopHandler}
        ></i>
      </div>
      <div className="c-settings__shuffle">
        <i
          className={`fas fa-random ${isShuffling ? "active" : ""}`}
          onClick={shuffleHandler}
        ></i>
      </div>
    </div>
  );
};

export default Settings;
