import React, { useEffect, useState } from "react";
import "./homepage.css";
import dp from "../../assets/dp.png";
import WeatherCard from "../../components/WeatherCard";
import NewsCard from "../../components/NewsCard";
const Homepage = () => {
  const [user, setUser] = useState("");
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userData")));
    setGenre(JSON.parse(localStorage.getItem("selectedGenre")));
  }, []);

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
          <WeatherCard />
        </div>
      </div>
      <div className="right-home">
        <NewsCard />
      </div>
    </div>
  );
};

export default Homepage;
