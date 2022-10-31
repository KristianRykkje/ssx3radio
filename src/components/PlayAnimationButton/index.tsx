import React from "react";
import { AnimatedButton, ButtonContainer } from "./styles";

export const PlayAnimationButton: React.FC<{
  isPlaying: boolean;
  playTrackHandler: () => void;
}> = ({ isPlaying, playTrackHandler }) => {
  return (
    <ButtonContainer>
      <AnimatedButton isPlaying={isPlaying} onClick={playTrackHandler} />
    </ButtonContainer>
  );
};
