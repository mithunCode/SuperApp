import { useEffect, useState } from "react";
import SelectGenre from "../../components/SelectGenre";
import "./entertainment.css";
import { useNavigate } from "react-router-dom";
import err from "../../assets/err.png";

const Entertainment = () => {
  const navigate = useNavigate();

  const genres = [
    ["action", "#FF5209"],
    ["drama", "#FF5209"],
    ["romance", "#148A08"],
    ["thriller", "#84C2FF"],
    ["western", "#902500"],
    ["horror", "#7358FF"],
    ["fantasy", "#7358FF"],
    ["music", "#E61E32"],
    ["fiction", "#6CD061"],
  ];
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [minError, setMinError] = useState(false);

  const handleClick = (genreClicked, id) => {
    setSelectedGenre([...selectedGenre, genreClicked]);
  };

  const handleNextPage = () => {
    if (checkMinimumSelection() === true) {
      localStorage.setItem("selectedGenre", JSON.stringify(selectedGenre));
      navigate("/home");
    }
  };

  const checkMinimumSelection = () => {
    return selectedGenre.length >= 3 ? true : setMinError((err) => !err);
  };

  const handleRemoveGenre = (genreClicked, id) => {
    setSelectedGenre(selectedGenre.filter((genre) => genre !== genreClicked));
  };

  return (
    <div className="select-main">
      <div className="left">
        <h2 className="super-app">Super App</h2>
        <h3 className="choose">Choose your entertainment category</h3>
        <div className="selected">
          {selectedGenre.map((genre, i) => (
            <div className="selected-genre-btn" key={i}>
              {genre}{" "}
              <span
                className="deselect"
                onClick={() => handleRemoveGenre(genre, i)}
              >
                X
              </span>
            </div>
          ))}
        </div>
        <div>
          {minError && selectedGenre.length < 3 ? (
            <p className="minError">
              <img src={err} alt="danger" width={15} /> Minimum 3 category
              required
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="right">
        <div className="genre-sel">
          {genres.map((genre, i) => {
            return (
              <SelectGenre
                genre={genre}
                key={i}
                handleClick={handleClick}
                id={i}
                className="s"
              />
            );
          })}
        </div>
        <div>
          <button className="next-page" onClick={handleNextPage}>
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
