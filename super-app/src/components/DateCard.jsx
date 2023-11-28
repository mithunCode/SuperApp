import { useState } from "react";

const DateCard = () => {
  let [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    })
  );
  var currentdate = new Date();
  var date =
    currentdate.getMonth() +
    1 +
    "-" +
    currentdate.getDate() +
    "-" +
    currentdate.getFullYear();

  setInterval(() => {
    var curTime = new Date().toLocaleTimeString("en-US", {
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    });
    setTime(curTime);
  }, 1000);
  return (
    <>
      <div className="date-container">
        <p>{date}</p>
        <p>{time}</p>
      </div>
    </>
  );
};

export default DateCard;
