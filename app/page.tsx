"use client";
import styles from "./page.module.css";
import { radioData } from "./data";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  // play the first audio file on page load and start the next when the first is finished

  const [currentAudio, setCurrentAudio] = useState(0);
  const musicPlayers = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("") : undefined
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const [timeInCurrentAudio, setTimeInCurrentAudio] = useState(0);

  // update timeInCurrentAudio every second
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setTimeInCurrentAudio((timeInCurrentAudio) => timeInCurrentAudio + 0.1);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (musicPlayers.current) {
      musicPlayers.current.onended = () => {
        setCurrentAudio((currentAudio + 1) % radioData.length);
        setTimeInCurrentAudio(0);
      };
    }
  }, [currentAudio]);

  const play = () => {
    if (musicPlayers.current) {
      musicPlayers.current.play();
      setIsPlaying(true);
    }
  };

  const pause = () => {
    if (musicPlayers.current) {
      musicPlayers.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.radio}>
        {/* <div className={styles.radio__image}>
          <Image
            src={radioData[currentAudio].image}
            alt="radio image"
            width={300}
            height={300}
          />
        </div> */}
        <div className={styles.radio__info}>
          <h1 className={styles.radio__title}>
            {radioData[currentAudio].name}
          </h1>
        </div>
        {/* Show how far audio has come in current audiofile */}

        <div className={styles.radio__progress}>
          <div
            className={styles.radio__progress__bar}
            style={{
              width: `${
                (timeInCurrentAudio /
                  (musicPlayers?.current?.duration as number)) *
                100
              }%`,
            }}
          ></div>
        </div>
        <div className={styles.radio__controls}>
          <audio
            ref={musicPlayers as any}
            src={radioData[currentAudio].url}
            autoPlay
          />
          {isPlaying ? (
            <button className={styles.radio__button} onClick={pause}>
              Pause
            </button>
          ) : (
            <button className={styles.radio__button} onClick={play}>
              Play
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
