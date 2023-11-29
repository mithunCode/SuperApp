import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./styles.css";
const Timer = () => {
  return (
    <>
      <div className="watch">
        <CountdownCircleTimer
          isPlaying
          duration={300}
          colors={["#FF6A6A"]}
          className="watch-design"
          strokeWidth={8}
          trailColor=" #191E39"
          trailStrokeWidth={25}
        >
          {({ remainingTime }) => {
            const hours = Math.floor(remainingTime / 3600);
            const minutes = Math.floor((remainingTime % 3600) / 60);
            const seconds = remainingTime % 60;

            return `${hours}:${minutes}:${seconds}`;
          }}
        </CountdownCircleTimer>
      </div>
      <div>x</div>
    </>
  );
};

export default Timer;
