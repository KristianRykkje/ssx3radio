import React from "react";

interface INavProps {
  isPlaying: boolean;
  playTrackHandler: () => void;
  openPlaylistHandler: () => void;
  openSettingsHandler: () => void;
  openLibraryHandler: () => void;
}

const Nav: React.FC<INavProps> = ({
  isPlaying,
  playTrackHandler,
  openPlaylistHandler,
  openSettingsHandler,
  openLibraryHandler,
}) => {
  return (
    <nav>
      <h1>SSX3 Radio</h1>
      <button onClick={playTrackHandler}>
        <img src={isPlaying ? "/pause.svg" : "/play.svg"} alt="Play" />
      </button>
      <button onClick={openPlaylistHandler}>
        <img src="/playlist.svg" alt="Playlist" />
      </button>
      <button onClick={openSettingsHandler}>
        <img src="/settings.svg" alt="Settings" />
      </button>
      <button onClick={openLibraryHandler}>
        <img src="/library.svg" alt="Library" />
      </button>
    </nav>
  );
};

export default Nav;
