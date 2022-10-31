import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

export const AnimatedButton = styled.button<{
  isPlaying: boolean;
}>`
  background-color: #000;
  border: 1px solid #fff;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 2rem;
  height: 100px;
  width: 100px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  &:active {
    transform: scale(0.9);
  }

  ${({ isPlaying }) =>
    isPlaying &&
    `
    background-color: #fff;
    color: #000;
  `}

  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
  }

  @media (max-width: 480px) {
    height: 40px;
    width: 40px;
  }

  @media (max-width: 320px) {
    height: 30px;
    width: 30px;
  }

  @media (max-width: 240px) {
    height: 20px;
    width: 20px;
  }

  // pulsating animation when playing

  ${({ isPlaying }) =>
    isPlaying &&
    `
    animation: pulse 2s infinite;
  `}

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
