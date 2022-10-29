import styled from "styled-components";

export const RadioPage = styled.div`
  .container {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background-color: #fff;
  }

  .radio {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: #000;
  }

  .radio__info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
  }

  .radio__controls {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
  }

  .radio__button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
  }

  .radio__progress {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 100px;
    width: 100%;
    height: 10px;
    background-color: #000;
    z-index: 4;
  }

  .radio__progress__bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #fff;
    z-index: 4;
  }
`;
