import React from "react";

interface IPlaylistProps {
  audioData: any;
  setCurrentTrack: (track: any) => void;
  isPlaylistOpen: boolean;
  activeLibraryHandler: (nextPrev: string) => void;
}

const Playlist: React.FC<IPlaylistProps> = ({
  audioData,
  setCurrentTrack,
  isPlaylistOpen,
  activeLibraryHandler,
}) => {
  return (
    <div className={`c-playlist ${isPlaylistOpen ? "active-playlist" : ""}`}>
      <h2>Playlist</h2>
      <div className="playlist-songs">
        {audioData.map((track: any) => (
          <div
            className={`playlist-song ${track?.active ? "selected" : ""}`}
            key={track?.id}
            onClick={() => setCurrentTrack(track)}
          >
            <img src={track?.cover} alt={track?.name} />
            <div className="song-description">
              <h3>{track?.name}</h3>
              <h4>{track?.artist}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="playlist-navigation">
        <button onClick={() => activeLibraryHandler("prev")}>
          <img src="/skip-back.svg" alt="Previous" />
        </button>
        <button onClick={() => activeLibraryHandler("next")}>
          <img src="/skip-forward.svg" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Playlist;
