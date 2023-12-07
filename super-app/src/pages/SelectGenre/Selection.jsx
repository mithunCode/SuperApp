import { useState } from "react";
import SelectGenre from "../../components/SelectGenre";
import "./selection.css";
import { useNavigate } from "react-router-dom";
import err from "../../assets/err.png";
import action from "../../assets/action.png";
import drama from "../../assets/drama.png";
import romance from "../../assets/romance.png";
import thriller from "../../assets/thriller.png";
import fantasy from "../../assets/fantasy.png";
import horror from "../../assets/horror.png";
import music from "../../assets/music.png";
import western from "../../assets/western.png";
import fiction from "../../assets/fiction.png";

const Selection = () => {
  const navigate = useNavigate();
  const img = [
    action,
    drama,
    romance,
    thriller,
    western,
    horror,
    fantasy,
    music,
    fiction,
  ];

  const genres = [
    ["Action", "#FF5209"],
    ["Drama", "#FF5209"],
    ["Romance", "#148A08"],
    ["Thriller", "#84C2FF"],
    ["Western", "#902500"],
    ["Horror", "#7358FF"],
    ["Fantasy", "#7358FF"],
    ["Music", "#E61E32"],
    ["Fiction", "#6CD061"],
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
                img={img[i]}
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

export default Selection;
