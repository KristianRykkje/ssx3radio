import React from "react";

interface ILibraryProps {
  audioData: any;
  setCurrentTrack: (track: any) => void;
  isLibraryOpen: boolean;
  activeLibraryHandler: (nextPrev: string) => void;
}

const Library: React.FC<ILibraryProps> = ({
  audioData,
  setCurrentTrack,
  isLibraryOpen,
  activeLibraryHandler,
}) => {
  return (
    <div className={`c-library ${isLibraryOpen ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {audioData.map((track: any) => (
          <div
            className={`library-song ${track?.active ? "selected" : ""}`}
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
      <div className="library-navigation">
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

export default Library;
