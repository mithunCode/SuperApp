import React, { useState } from "react";
import "./styles.css";

const SelectGenre = ({ genre, handleClick, id, img }) => {
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
