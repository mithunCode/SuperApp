import React, { useState } from "react";
import "./styles.css";
import action from "../assets/action.png";
import drama from "../assets/drama.png";
import romance from "../assets/romance.png";
import thriller from "../assets/thriller.png";
import fantasy from "../assets/fantasy.png";
import horror from "../assets/horror.png";
import music from "../assets/music.png";
import western from "../assets/western.png";
import fiction from "../assets/fiction.png";

const SelectGenre = ({ genre, handleClick, id }) => {
  const img = genre[0] + ".png";
  let genreClicked = genre[0];
  const clicked = () => {
    document.getElementById(id).style.border = "4px solid green";
    handleClick(genreClicked, id);
  };

  return (
    <div
      style={{ backgroundColor: genre[1] }}
      className="genre-box"
      onClick={clicked}
      id={id}
    >
      <p className="genre-name">{genre[0]}</p>
      <img src={img} id="" width={120} alt={genre[0]} />
    </div>
  );
};

export default SelectGenre;
