import React, { useEffect, useState } from "react";
import "./homepage.css";
import dp from "../../assets/dp.png";
const Homepage = () => {
  const [user, setUser] = useState("");
  const [genre, setGenre] = useState([]);
  let [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    })
  );
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userData")));
    setGenre(JSON.parse(localStorage.getItem("selectedGenre")));
  }, []);
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
    <div className="homepage">
      <div className="left-home">
        <div className="profile-card">
          <div>
            <img src={dp} height={250} alt="ProfilePicture" />
          </div>
          <div className="user-info">
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <h2 className="uname">{user.username}</h2>
            <div className="genre-show">
              {genre.map((item, i) => (
                <div key={i} className="selectedG">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="weather">
          <div className="date-container">
            <p>{date}</p>
            <p>{time}</p>
          </div>
        </div>
      </div>
      <div className="right-home"></div>
    </div>
  );
};

export default Homepage;
