import React, { useEffect, useState } from "react";
import dp from "../../assets/dp.png";
import "./entertainment.css";
import List from "../../components/List";
import { useNavigate } from "react-router-dom";

const Entertainment = () => {
  const movies = JSON.parse(window.localStorage.getItem("selectedGenre"));
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/select");
  };

  return (
    <>
      <div className="ent-header">
        <h2 className="super-app ent-super ">Super App</h2>
        <div className="ent-profile">
          <img
            src={dp}
            height={40}
            width={40}
            alt="ProfilePicture"
            className="ent-profile"
          />
        </div>
      </div>
      <div className="ent">
        <h3 className="ent-choice">Entertainment according to your choice</h3>
        <button className="next-page" onClick={() => handleClick()}>
          HomePage
        </button>
      </div>
      <div className="movie-container">
        {movies.map((movie, i) => (
          <List key={i} genre={movie} />
        ))}
      </div>
    </>
  );
};

export default Entertainment;
