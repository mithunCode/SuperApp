import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./styles.css";
import inc from "../assets/inc.png";
import tune from "../assets/tune.mp3";
import dec from "../assets/dec.png";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const [timer, setTimer] = useState(false);
  const timerInSeconds = hours * 3600 + mins * 60 + secs;
  const [complete, setComplete] = useState(false);
  if (complete) {
    setTimeout(() => {
      setComplete(false);
      window.location.reload();
    }, 5000);
  }

  return (
    <>
      <div className="watch">
        <CountdownCircleTimer
          isPlaying={timer}
          duration={timerInSeconds}
          colors={["#FF6A6A"]}
          className="watch-design"
          strokeWidth={8}
          trailColor=" #191E39"
          trailStrokeWidth={25}
          onComplete={() => {
            setTimer(false);
            setComplete(true);
          }}
        >
          {({ remainingTime }) => {
            const hours = Math.floor(remainingTime / 3600);
            const minutes = Math.floor((remainingTime % 3600) / 60);
            const seconds = remainingTime % 60;

            return `${0 + hours}:${minutes}:${seconds}`;
          }}
        </CountdownCircleTimer>
      </div>
      <div className="timer-container">
        <div className="setTimer">
          <div className="timer-first-col">
            <p>Hours</p>
            <img
              src={inc}
              height={20}
              width={25}
              alt=""
              onClick={() => setHours((prev) => +prev + 1)}
            />
            <p className="time">{hours < 10 ? `0` + `${hours}` : hours}</p>
            <img
              src={dec}
              height={20}
              width={25}
              alt=""
              onClick={() => setHours((prev) => +prev - 1)}
            />
          </div>
          <div className="time">:</div>
          <div className="timer-first-col">
            <p>Minutes</p>
            <img
              src={inc}
              height={20}
              width={25}
              alt=""
              onClick={() => setMins((prev) => +prev + 1)}
            />
            <p className="time">{mins < 10 ? `0` + `${mins}` : mins}</p>
            <img
              src={dec}
              height={20}
              width={25}
              alt=""
              onClick={() => setMins((prev) => +prev - 1)}
            />
          </div>
          <div className="time">:</div>
          <div className="timer-first-col">
            <p>Seconds</p>
            <img
              src={inc}
              height={20}
              width={25}
              alt=""
              onClick={() => setSecs((prev) => +prev + 1)}
            />
            <p className="time">{secs < 10 ? `0` + `${secs}` : secs}</p>
            <img
              src={dec}
              height={20}
              width={25}
              alt=""
              onClick={() => setSecs((prev) => +prev - 1)}
            />
          </div>
        </div>
        <button className="timer-btn" onClick={(prev) => setTimer(true)}>
          {timer ? "Stop" : "Start"}
        </button>
        {complete && (
          <embed controls src={tune} autostart="true" hidden="true"></embed>
        )}
      </div>
    </>
  );
};

export default Timer;
