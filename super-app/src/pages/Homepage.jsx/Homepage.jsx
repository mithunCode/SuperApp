import React, { useEffect, useState } from "react";
import "./homepage.css";
import dp from "../../assets/dp.png";
import WeatherCard from "../../components/WeatherCard";
import NewsCard from "../../components/NewsCard";
import Timer from "../../components/Timer";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const [user, setUser] = useState("");
  const [genre, setGenre] = useState([]);
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userData")));
    setGenre(JSON.parse(localStorage.getItem("selectedGenre")));
    setNotes(localStorage.getItem("notes"));
  }, []);
  useEffect(() => {
    localStorage.setItem("notes", notes);
  }, [notes]);
  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleBrowse = () => {
    navigate("/entertainment");
  };
  return (
    <div className="homepage">
      <div className="left-home">
        <div className="left-top">
          <div className="left-2">
            <div className="profile-card">
              <div>
                <img src={dp} height={130} alt="ProfilePicture" />
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
            <div className="weather">{/* <WeatherCard /> */}</div>
          </div>

          <div className="notes">
            All Notes
            <textarea
              className="notepad"
              value={notes}
              onChange={handleNotesChange}
            >
              {notes}
            </textarea>
          </div>
        </div>
        <div className="timer">
          <Timer />
        </div>
      </div>
      <div className="right-home">
        <NewsCard />
        <button
          className="browse-btn"
          onClick={handleBrowse}
          style={{ cursor: "pointer" }}
        >
          Browse
        </button>
      </div>
    </div>
  );
};

export default Homepage;
