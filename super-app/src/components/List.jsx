import React, { useEffect, useState } from "react";
import imgMov from "./../assets/action.png";

const List = ({ genre }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "46993aa5e2mshf424e4034124846p139af6jsn063932f3b74a",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };
    const fetchMovies = async () => {
      await fetch(
        `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}`,
        options
      )
        .then((response) => response.json())
        .then((response) => setMovies(response.results.splice(4, 4)))
        .catch((err) => console.error(err));
    };
    fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      <p className="mov-genre">{genre}</p>
      <div className="mov-list">
        {movies.map((movie, i) => {
          return (
            <div key={i}>
              <img
                src={movie?.primaryImage?.url || imgMov}
                width={200}
                height={100}
                alt="movie"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
